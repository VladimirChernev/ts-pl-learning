import { Page, BrowserContext, Locator } from '@playwright/test';
import { BasePage } from '@tests/pages/Base.page';

export class LoginPage extends BasePage {
  public readonly EMAIL_INPUT: Locator;
  public readonly PASSWORD_INPUT: Locator;
  public readonly LOGIN_BUTTON: Locator;

  constructor(page: Page, context: BrowserContext) {
    /* Page Setup */
    super(page, context);

    /* Page Variables */
    this.URL = 'https://st2016.inv.bg/login';
    this.TITLE = 'Вход - QA Ground';

    /* Page Locators */
    this.EMAIL_INPUT = page.locator('#loginusername');
    this.PASSWORD_INPUT = page.locator('#loginpassword');
    this.LOGIN_BUTTON = page.locator('#loginsubmit');
  }
}
