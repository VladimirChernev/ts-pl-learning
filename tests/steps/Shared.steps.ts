import PageFactory from '@tests/pages/Page.factory';
import { expect, Page, BrowserContext } from '@playwright/test';
import { step } from '@lib/tools/step.decorator';

export default class SharedSteps extends PageFactory {
  constructor(page: Page, context: BrowserContext) {
    super(page, context);
  }

  /**
   * Navigate to site login page
   */
  @step('Navigate to site login page')
  async navigateToLoginPage() {
    await this.page.goto('https://st2016.inv.bg/');
    await expect.soft(this.page).toHaveTitle(this.loginPage.TITLE);
  }

  /**
   * Login to the site with provided username and password
   * @param username - site username
   * @param password - site password
   */
  @step('Login to the site with provided username and password')
  async login(username: string, password: string) {
    await this.loginPage.EMAIL_INPUT.fill(username);
    await this.loginPage.PASSWORD_INPUT.fill(password);
    await this.loginPage.LOGIN_BUTTON.click();
    await expect.soft(this.page).toHaveTitle(this.landingPage.TITLE);
  }
}
