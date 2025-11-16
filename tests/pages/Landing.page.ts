import { Page, BrowserContext, Locator } from '@playwright/test';
import { BasePage } from '@tests/pages/Base.page';

export class LandingPage extends BasePage {
  public readonly TO_INVOICE_LIST: Locator;

  constructor(page: Page, context: BrowserContext) {
    /* Page Setup */
    super(page, context);

    /* Page Variables */
    this.URL = 'https://st2016.inv.bg/home';
    this.TITLE = 'Система за фактуриране - QA Ground';

    /* Page Locators */
    this.TO_INVOICE_LIST = this.page.locator('//a[@class="item_startmenu"][@href="https://st2016.inv.bg/invoices"]');
  }
}
