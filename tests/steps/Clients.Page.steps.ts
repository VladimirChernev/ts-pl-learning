import PageFactory from '@tests/pages/Page.factory';
import { expect, Page, BrowserContext } from '@playwright/test';
import { step } from '@lib/tools/step.decorator';

export default class ClientsPageSteps extends PageFactory {
  constructor(page: Page, context: BrowserContext) {
    super(page, context);
  }

  /**
   * Navigate to New Client Page
   */
  @step('Navigate to New Client Page')
  async navigateToNewClientPage() {
    await this.clientsPage.ADD_NEW_CLIENT_BUTTON.click();
    await expect.soft(this.page).toHaveTitle(this.newClientPage.TITLE);
  }

  /**
   * Add New Client
   * @type {string} name - name of the client
   */
  @step('Add New Client')
  async addNewClient(name: string) {
    await this.newClientPage.CLIENT_NAME_INPUT_BG.fill(name);
    await this.newClientPage.SAVE_BUTTON.click();
    await expect.soft(this.clientsPage.SUCCESS_MESSAGE).toBeVisible();
  }

  /**
   * Verify client is visible in list
   * @type {string} name - name of exsiting client
   */
  @step('Verify Client is Visible in List')
  async verifyClientIsVisible(name: string) {
    await this.clientsPage.CLIENTS_LIST_BUTTON.click();

    const client = this.clientsPage.CLIENTS_LIST.filter({ hasText: name });
    await expect.soft(client).toBeVisible();
  }
}
