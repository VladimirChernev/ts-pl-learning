import { Page, BrowserContext } from '@playwright/test';

// Page Objects:
import LandingPage from '@tests/pages/Landing.page';
import LoginPage from '@tests/pages/Login.page';
import NewInvoicePage from '@tests/pages/New.Invoice.page';
import Documents from '@tests/pages/Documents.page';
import Api from '@tests/pages/Api';

export default class PageFactory {
  public readonly page: Page;
  public readonly context: BrowserContext;

  // Page Objects:
  public readonly landingPage: LandingPage;
  public readonly loginPage: LoginPage;
  public readonly newInvoicePage: NewInvoicePage;
  public readonly documentsPage: Documents;

  // API Objects:
  public readonly api: Api;

  constructor(page: Page, context: BrowserContext) {
    /* Page Setup */
    this.page = page;
    this.context = context;

    /* Initialize Page Objects */
    this.landingPage = new LandingPage(page, context);
    this.loginPage = new LoginPage(page, context);
    this.newInvoicePage = new NewInvoicePage(page, context);
    this.documentsPage = new Documents(page, context);
    this.api = new Api(page.request);
  }
}
