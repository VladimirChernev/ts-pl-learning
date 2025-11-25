import { APIRequestContext, APIResponse } from '@playwright/test';
import { testConfig, ENV } from '@testconfig';

export default class ApiActions {
  private readonly request: APIRequestContext;
  private readonly baseUrl: string;

  constructor(request: APIRequestContext) {
    this.request = request;
    this.baseUrl = testConfig[ENV]['api'];
  }

  /**
   * Set Headers with provided token
   * @type {string=''} token - used for api authentication
   */
  setHeaders(token: string = '') {
    return {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    };
  }

  /**
   * Obtain Authorization Token
   * @type {string} email - user email used to login
   * @type {string} password - user password
   */
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

  /**
   * Create Item
   * @type {string} token - token used for api authentication
   * @type {string} name - item name in bulgarian
   * @type {string} nameEn - item name in english
   * @type {number} price - item price
   */
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
      catalog_number: '24',
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

  /**
   * Delete Item
   * @type {string} token - token used for api authentication
   * @type {number} itemId - item unique id
   */
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

  // Get All iems

  async getItems(token: string) {
    // set up request params:
    const url: string = this.baseUrl + `items`;

    // trigger the request:
    const response: APIResponse = await this.request.get(url, {
      headers: this.setHeaders(token),
    });

   console.log('Response Status:', response.status());
   return response; 
  }

  // Get Items by ID

  async getItemById(token: string, itemId: number) {
    // set up request params:
    const url: string = this.baseUrl + `items/${itemId}`;

    // trigger the request:
    const response: APIResponse = await this.request.get(url, {
      headers: this.setHeaders(token)
    });

    // log response details
    console.log('Response Status: ', response.status());

    //// Parse JSON response
    const body = await response.json();
    return body.total;
  }
}
