import PageFactory from '@tests/pages/Page.factory';
import { expect, Page, BrowserContext, APIResponse } from '@playwright/test';
import { step } from '@lib/tools/step.decorator';

export default class ApiSteps extends PageFactory {
  constructor(page: Page, context: BrowserContext) {
    super(page, context);
  }

  /**
   * Obtain Authorization Token
   */
  @step('Obtain Authorization Token')
  async obtainAuthToken(email: string, password: string) {
    // make request and verify 200 response:
    const response: APIResponse = await this.api.obtainAuthToken(email, password);
    expect.soft(response.status(), 'Verify Obtain Auth Token Response Status').toBe(200);

    // get response's json body, extract authorization token from the body, verify it has a value
    const responseBody: { token: string; expires: string; expires_string: string } = await response.json();
    const authToken = responseBody.token;
    expect.soft(authToken, 'Verify Auth Token is not empty').not.toBeUndefined();

    // log new token and return it for future use
    console.log(`Setting API Authorization Token to: "${authToken}"`);
    return authToken;
  }

  /**
   * Get Items Count
   */
  @step('Get Items Count')
  async getItemsCount(token: string) {
    const response: APIResponse = await this.api.getItems(token);
    expect.soft(response.status(), 'Verify Get Items Response Status').toBe(200);

    const responseBody: { total: number; next_page: string; prev_page: string; items: [] } = await response.json();
    const itemsCount = responseBody.total;
    expect.soft(itemsCount, 'Verify items Count is not empty').not.toBeUndefined();

    console.log(`Created Item ID count is: "${itemsCount}"`);
    return itemsCount;
  }

  /**
   * Create Item
   */
  @step('Create Item')
  async createItem(token: string, name: string, name_en: string, price: number) {
    const response: APIResponse = await this.api.createItem(token, name, name_en, price);
    expect.soft(response.status(), 'Verify Create Item Response Status').toBe(201);

    const responseBody: { id: number } = await response.json();
    const itemId = responseBody.id;
    expect.soft(itemId, 'Verify Item ID is not empty').not.toBeUndefined();

    console.log(`Created Item ID is: "${itemId}"`);
    return itemId;
  }

  /**
   * Get Item Details
   */
  @step('Get Item Details')
  async getItem(token: string, itemId: number) {
    const response: APIResponse = await this.api.getItem(token, itemId);
    expect.soft(response.status(), 'Verify Get Items Response Status').toBe(200);

    const itemsDetails: {
      id: number;
      deleted: boolean;
      create_date: string;
      name: string;
      price: number;
      currency: string;
      price_for_quantity: number;
      quantity_unit: string;
      is_limited: boolean;
      catalog_number: string;
      outside_id: number;
    } = await response.json();

    console.log(`Item Details: \n"${itemsDetails}"`);
    return itemsDetails;
  }

  /**
   * Delete Item
   */
  @step('Delete Item')
  async deleteItem(token: string, itemId: number) {
    const response: APIResponse = await this.api.deleteItem(token, itemId);
    expect.soft(response.status(), 'Verify Delete Item Response Status').toBe(204);
  }
}
