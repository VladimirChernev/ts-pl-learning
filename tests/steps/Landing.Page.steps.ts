import PageFactory from '@tests/pages/Page.factory';
import { expect, Page, BrowserContext } from '@playwright/test';
import { step } from '@lib/tools/step.decorator';

export default class LandingPageSteps extends PageFactory {
  constructor(page: Page, context: BrowserContext) {
    super(page, context);
  }

  /**
   * Navigate to New Invoice Page
   */
  @step('Navigate to New Invoice Page')
  async NavigateToNewInvoicePage() {
    await this.landingPage.NEW_INVOICE_BUTTON.click();
    await expect.soft(this.page).toHaveTitle(this.newInvoicePage.TITLE);
  }

  /**
   * Navigate to Documents Page
   */
  @step('Navigate to Documents Page')
  async navigateToDocumentsPage() {
    await this.landingPage.DOCUMENTS_BUTTON.click();
    await expect.soft(this.page).toHaveTitle(this.documentsPage.TITLE);
  }

  /**
   * Navigate to Clients Page
   */
  @step('Navigate to Clients page')
  async navigateToClientsPage() {
    await this.landingPage.CLIENTS_BUTTON.click();
    await expect.soft(this.page).toHaveTitle(this.clientsPage.TITLE);
  }
}
