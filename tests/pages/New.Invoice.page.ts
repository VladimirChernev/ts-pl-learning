import { Page, BrowserContext } from '@playwright/test';
import { BasePage } from '@tests/pages/Base.page';

export default class NewInvoicePage extends BasePage {

  constructor(page: Page, context: BrowserContext) {
    /* Page Setup */
    super(page, context);

    /* Page Variables */
    this.URL = 'https://st2016.inv.bg/invoices/new';
    this.TITLE = 'Нова фактура - QA Ground';
  }
}
