import PageFactory from '@tests/pages/Page.factory';
import { expect, Page, BrowserContext } from '@playwright/test';
import { step } from '@lib/tools/step.decorator';
import { LANG } from '@playwright.config';

export default class SharedSteps extends PageFactory {
  constructor(page: Page, context: BrowserContext) {
    super(page, context);
  }

  /**
   * Navigate to site login page
   */
  @step('Navigate to site login page')
  async navigateToLoginPage() {
    await this.page.goto('/');
    await expect.soft(this.page).toHaveTitle(this.loginPage.TITLE);
  }

  /**
   * Login to the site with provided username and password
   * @param username - username to use for login
   * @param password - password to use for login
   */
  @step('Login to the site with provided username and password')
  async login(username: string, password: string, usingEnterKey: boolean = false) {
    await this.loginPage.EMAIL_INPUT.fill(username);
    await this.loginPage.PASSWORD_INPUT.fill(password);
    switch (LANG) {
      case 'bg':
        await this.loginPage.BG_LANG_RADIO_BUTTON.click();
        break;
      case 'en':
        await this.loginPage.EN_LANG_RADIO_BUTTON.click();
        break;
    }
    if (!usingEnterKey) {
      await this.loginPage.LOGIN_BUTTON.click();
    } else {
      await this.loginPage.PASSWORD_INPUT.press('Enter');
    }
    await expect.soft(this.page).toHaveTitle(this.landingPage.TITLE);
  }

  /**
   * Login to the site with provided username and password
   * @param username - username to use for login
   * @param password - password to use for login
   * @param errorMessage - expected error message
   */
  @step('Login to the site with provided username and password')
  async unsuccesfulLogin(username: string, password: string, errorMessage: string) {
    await this.loginPage.EMAIL_INPUT.fill(username);
    await this.loginPage.PASSWORD_INPUT.fill(password);
    await this.loginPage.LOGIN_BUTTON.click();
    await expect.soft(this.page).toHaveTitle(this.loginPage.TITLE);
    await expect.soft(this.loginPage.ERROR_MESSAGE).toContainText(errorMessage);
  }

  /**
   * Logout of the site
   */
  @step('Logout of the site')
  async logout() {
    await this.landingPage.USERPANEL_MENU.click();
    await this.landingPage.LOGOUT_BUTTON.click();
    await expect.soft(this.page).toHaveTitle(this.loginPage.TITLE);
    await expect.soft(this.loginPage.LOGOUT_MESSAGE).toContainText('Вие излязохте от акаунта си.');
  }
}
