import PageFactory from '@tests/pages/Page.factory';
import { expect, Page, BrowserContext } from '@playwright/test';
import { step } from '@lib/tools/step.decorator';

export default class ClientsPageSteps extends PageFactory {
  constructor(page: Page, context: BrowserContext) {
    super(page, context);
  }

  /**
   * Add New CLient
   * @type {string} name - name to use for new client
   */
  @step('Add new client')
  async addNewClient(name: string) {
    await this.clientsPage.NEW_CLIENT_BUTTON.click();
    await expect.soft(this.clientsPage.ADD_NEW_CLIENT_PAGE).toBeTruthy;
    await this.clientsPage.NAME_FIELD.click();
    await this.clientsPage.NAME_FIELD.fill(name);
    await this.clientsPage.SAVE_NEW_CLIENT_BUTTON.click();
    await expect.soft(this.clientsPage.ADD_NEW_CLIENT_SUCCESS_MESSAGE).toBeVisible;
  }

  @step('Verify clients list')
  async verifyClientsList(clientName) {
    await this.clientsPage.CLIENTS_LIST.click();
    await expect.soft(this.page.getByText(clientName)).toBeVisible;
  }

  @step('Delete added user')
  async deleteUser() {
    await this.clientsPage.CLIENTS_LIST.click();
    await this.clientsPage.CLIENTS_USER.check();
    await this.clientsPage.CLIENT_DELETE_TAB.click();
    await this.clientsPage.CLIENT_DELETE_BUTTON.click();
    await expect.soft(this.page.getByText('Избраните клиенти бяха изтрити успешно')).toBeVisible;
  }
}
