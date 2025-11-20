import { APIRequestContext, APIResponse } from '@playwright/test';

// API Documentation: https://api.inv.bg/v3/swagger-ui/

export default class Api {
  readonly request: APIRequestContext;
  readonly baseUrl: string;

  constructor(request: APIRequestContext) {
    this.request = request;
    this.baseUrl = 'https://api.inv.bg/v3/';
  }

  setHeaders(apiToken: string = ''): Record<string, string> {
    return {
      Accept: `application/json'`,
      'Content-Type': 'application/json',
      Authorization: `Bearer ${apiToken}`,
      'Accept-Language': 'bg',
    };
  }

  async obtainAuthToken(email: string, password: string): Promise<APIResponse> {
    // set up request params:
    const url = this.baseUrl + 'login/token';
    const body = {
      email: email,
      password: password,
      domain: 'st2016',
    };

    // log request details
    console.log(`\nRequest: obtainAuthToken`);
    console.log(`POST: ${url}`);
    console.log('Request Body:\n', JSON.stringify(body, null, 2));

    // trigger the request
    const response: APIResponse = await this.request.post(url, {
      headers: this.setHeaders(),
      data: body,
    });

    // log response details
    console.log('Respone Status:', response.status());
    console.log('Response Body:\n', JSON.stringify(await response.json(), null, 2));

    // return response object as result
    return response;
  }

  async getItems(token: string): Promise<APIResponse> {
    const url = this.baseUrl + 'items';
    console.log(`\nRequest: getItems`);
    console.log(`GET: ${url}`);

    const response: APIResponse = await this.request.get(url, {
      headers: this.setHeaders(token),
    });

    console.log('Respone Status:', response.status());
    console.log('Response Body:\n', JSON.stringify(await response.json(), null, 2));

    return response;
  }

  async createItem(token: string, name: string, name_en: string, price: number): Promise<APIResponse> {
    const url = this.baseUrl + 'items';
    const body = {
      name: name,
      price: price,
      currency: 'BGN',
      price_for_quantity: 1,
      quantity_unit: 'гр.',
      is_limited: true,
      catalog_number: 'string',
      outside_id: 0,
      name_en: name_en,
      tags: ['tag_1', 'tag_2'],
    };

    console.log(`\nRequest: createItem`);
    console.log(`POST: ${url}`);
    console.log('Request Body:\n', JSON.stringify(body, null, 2));

    const response: APIResponse = await this.request.post(url, {
      headers: this.setHeaders(token),
      data: body,
    });

    console.log('Respone Status:', response.status());
    console.log('Response Body:\n', JSON.stringify(await response.json(), null, 2));

    return response;
  }

  async getItem(token: string, itemId: number): Promise<APIResponse> {
    const url = this.baseUrl + `items/${itemId}`;
    console.log(`\nRequest: getItem`);
    console.log(`GET: ${url}`);

    const response: APIResponse = await this.request.get(url, {
      headers: this.setHeaders(token),
    });

    console.log('Respone Status:', response.status());
    console.log('Response Body:\n', JSON.stringify(await response.json(), null, 2));

    return response;
  }

  async deleteItem(token: string, itemId: number): Promise<APIResponse> {
    const url = this.baseUrl + `items/${itemId}`;
    console.log(`\nRequest: getItems`);
    console.log(`DELETE: ${url}`);

    const response: APIResponse = await this.request.delete(url, {
      headers: this.setHeaders(token),
    });

    console.log('Respone Status:', response.status());

    return response;
  }
}
