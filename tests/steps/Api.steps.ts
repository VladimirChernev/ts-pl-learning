import PageFactory from '@tests/pages/Page.factory';
import { expect, Page, BrowserContext, APIResponse } from '@playwright/test';
import { step } from '@lib/tools/step.decorator';

export default class ApiSteps extends PageFactory {
  constructor(page: Page, context: BrowserContext) {
    super(page, context);
  }

  /**
   * Obtain Authorization Token
   * @type {string} email - user email used to login
   * @type {string} password - user password
   */
  @step('Obtain Authorization Token')
  async obtainAuthToken(email: string, password: string) {
    // make request and verify 200 response:
    const response: APIResponse = await this.apiActions.obtainAuthToken(email, password);
    expect.soft(response.status()).toBe(200);

    // get response's json body and extract authorization token
    const responseBody: { token: string; expires: number; expires_string: string } = await response.json();
    const authToken: string = responseBody.token;
    expect.soft(authToken).not.toBeUndefined();

    // log new token and return it for future use
    console.log(`Setting API Authorization Token: "${authToken}"`);
    return authToken;
  }

  /**
   * Create Item
   * @type {string} token - token used for api authentication
   * @type {string} name - item name in bulgarian
   * @type {string} nameEn - item name in english
   * @type {number} price - item price
   */
  @step('Create Item')
  async createItem(token: string, name: string, nameEn: string, price: number) {
    // make request and verify 200 response:
    const response: APIResponse = await this.apiActions.createItem(token, name, nameEn, price);
    expect.soft(response.status()).toBe(201);

    // get response's json body and extract id
    const responseBody: { id: number } = await response.json();
    const itemId: number = responseBody.id;
    expect.soft(itemId).not.toBeUndefined();

    // log new token and return it for future use
    console.log(`Created Item's Id: "${itemId}"`);
    return itemId;
  }

  /**
   * Delete Item
   * @type {string} token - token used for api authentication
   * @type {number} itemId - item unique id
   */
  @step('Delete Item')
  async deleteItem(token: string, itemId: number) {
    // make request and verify 200 response:
    const response: APIResponse = await this.apiActions.deleteItem(token, itemId);
    expect.soft(response.status()).toBe(204);
  }

  /**
   * Get All Items and return total count
   * @type {string} token - token used for api authentication
   */
  @step('Get All Items')
  async getItems(token: string) {
    // make request and verify 200 response:
    const response: APIResponse = await this.apiActions.getItems(token);
    expect.soft(response.status()).toBe(200);

    // get response's json body and extract total
    const responseBody: { total: number } = await response.json();
    const total: number = responseBody.total;
    expect.soft(total).not.toBeUndefined();

    // log total and return it for future use
    console.log(`Total Items Count: "${total}"`);
    return total;
  }

  /**
   * Get Item by ID and verify its details
   * @type {string} token - token used for api authentication
   * @type {number} itemId - item unique id
   * @type {string} expectedName - expected item name to verify
   */
  @step('Get Item by ID')
  async getItemById(token: string, itemId: number, expectedName: string) {
    // make request and verify 200 response:
    const response: APIResponse = await this.apiActions.getItemById(token, itemId);
    expect.soft(response.status()).toBe(200);

    // get response's json body and extract item details
    const responseBody: { id: number; name: string; name_en: string; price: number } = await response.json();
    const itemName: string = responseBody.name;
    
    // verify item name matches expected name
    expect.soft(itemName).toBe(expectedName);
    console.log(`Verified Item Name: "${itemName}"`);
    
    return responseBody;
  }
}
