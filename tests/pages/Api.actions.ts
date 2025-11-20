import { APIRequestContext, APIResponse } from '@playwright/test';
import { testConfig, ENV } from '@testconfig';

// API Documentation: https://api.inv.bg/v3/swagger-ui/

export default class ApiActions {
  private readonly request: APIRequestContext;
  private readonly baseUrl: string;

  constructor(request: APIRequestContext) {
    this.request = request;
    this.baseUrl = testConfig[ENV]['api'];
  }

  setHeaders(token: string = '') {
    return {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    };
  }

  async obtainAuthToken(email: string, password: string) {
    // set up request params:
    const url: string = this.baseUrl + 'login/token';
    const body = {
      email: email,
      password: password,
      domain: 'st2016',
    };

    // Log request values:
    console.log(`\nObtain Authorization Token Request:`);
    console.log(`POST: ${url}`);
    console.log(`Request Body: \n`, JSON.stringify(body, null, 2));

    // trigger the request:
    const response: APIResponse = await this.request.post(url, {
      headers: this.setHeaders(),
      data: body,
    });

    // log response details
    console.log('Response Status: ', response.status());
    console.log('Response Body: \n', JSON.stringify(await response.json(), null, 2));

    // return response object as rusult:
    return response;
  }

  async createItem(token: string, name: string, nameEn: string, price: number) {
    // set up request params:
    const url: string = this.baseUrl + 'items';
    const body = {
      name: name,
      price: price,
      currency: 'BGN',
      price_for_quantity: 1,
      quantity_unit: 'кг.',
      is_limited: true,
      catalog_number: 'тест продукт',
      outside_id: 0,
      name_en: nameEn,
      tags: ['tag_1', 'tag_2'],
    };

    // Log request values:
    console.log(`\nCreate Item Request:`);
    console.log(`POST: ${url}`);
    console.log(`Request Body: \n`, JSON.stringify(body, null, 2));

    // trigger the request:
    const response: APIResponse = await this.request.post(url, {
      headers: this.setHeaders(token),
      data: body,
    });

    // log response details
    console.log('Response Status: ', response.status());
    console.log('Response Body: \n', JSON.stringify(await response.json(), null, 2));

    // return response object as rusult:
    return response;
  }

  async deleteItem(token: string, itemId: number) {
    // set up request params:
    const url: string = this.baseUrl + `items/${itemId}`;

    // Log request values:
    console.log(`\nDelete Item:`);
    console.log(`DELETE: ${url}`);

    // trigger the request:
    const response: APIResponse = await this.request.delete(url, {
      headers: this.setHeaders(token),
    });

    // log response details
    console.log('Response Status: ', response.status());

    // return response object as rusult:
    return response;
  }
}
