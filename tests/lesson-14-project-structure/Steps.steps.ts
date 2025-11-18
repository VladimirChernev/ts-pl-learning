import { test, expect, Page, BrowserContext } from '@playwright/test';
import { LoginPage } from '@tests/pages/Login.page';
import { LandingPage } from '@tests/pages/Landing.page';
import { NewInvoicePage } from '@tests/pages/New.Invoice.page';

export class Steps {
  public readonly page: Page;
  public readonly context: BrowserContext;

  public readonly loginPage: LoginPage;
  public readonly landingPage: LandingPage;
  public readonly newInvoicePage: NewInvoicePage;

  constructor(page: Page, context: BrowserContext) {
    /* Page Setup */
    this.page = page;
    this.context = context;

    // initialize page objects
    this.loginPage = new LoginPage(page, context);
    this.landingPage = new LandingPage(page, context);
    this.newInvoicePage = new NewInvoicePage(page, context);
  }

  /**
   * Navigate to site login page
   */
  async navigateToLoginPage() {
    test.step('Navigate to Login Page', async () => {
      await this.page.goto('https://st2016.inv.bg/');
      await expect.soft(this.page).toHaveTitle(this.newInvoicePage.TITLE);
    });
  }

  /**
   * Login to the site with provided username and password
   * @param username - site username
   * @param password - site password
   */
  async Login(username: string, password: string) {
    test.step('Login', async () => {
      await this.loginPage.EMAIL_INPUT.fill(username);
      await this.loginPage.PASSWORD_INPUT.fill(password);
      await this.loginPage.LOGIN_BUTTON.click();
      await expect.soft(this.page).toHaveTitle(this.landingPage.TITLE);
    });
  }

  /**
   * Navigate to New Invoice Page
   */
  async NavigateToNewInvoicePage() {
    await test.step('Navigate to New Invoice Page', async () => {
      await this.landingPage.NEW_INVOICE_BUTTON.click();
      await expect.soft(this.page).toHaveTitle(this.newInvoicePage.TITLE);
    });
  }
}
