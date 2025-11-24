import PageFactory from '@tests/pages/Page.factory';
import { expect, Page, BrowserContext } from '@playwright/test';
import { step } from '@lib/tools/step.decorator';
import { LANG } from '@testconfig';

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
   * @type {string} username - username to use for login
   * @type {string} password - password to use for login
   * @type {boolean=false} usingEnterKey - alternative login with Enter keyboard key press
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
   * @type {string} username - username to use for login
   * @type {string} password - password to use for login
   * @type {string} errorMessage - expected error message
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

  /**
   * Navigate to Clients page
   */
  @step('Navigate to Clients page')
  async navigateToClientsPage() {
    await this.landingPage.CLIENTS_BUTTON.click();
    await expect.soft(this.page).toHaveTitle(this.clientsPage.TITLE);
  }

  /**
   * Click New Client button
   */
  @step('Click New Client button')
  async clickNewClientButton() {
    await this.clientsPage.NEW_CLIENT_BUTTON.click();
    await expect.soft(this.page).toHaveTitle(this.newClientPage.TITLE);
  }

  /**
   * Fill New Client form's Name field
   * @type {string} clientName - client name
   */
  @step('Fill New Client form Name field')
  async fillNewClientName(clientName: string) {
    await this.newClientPage.CLIENT_NAME_INPUT.fill(clientName);
  }

  /**
   * Click Save button on New Client form
   */
  @step('Save new client')
  async saveNewClient() {
    await this.newClientPage.SAVE_BUTTON.click();
  }

  /**
   * Verify success message after creating client
   */
  @step('Verify client saved successfully')
  async verifyClientSavedSuccessfully() {
    await expect.soft(this.newClientPage.SUCCESS_MESSAGE).toBeVisible();
  }

  /**
   * Open Clients List page from New Client page
   */
  @step('Open Clients List')
  async openClientsList() {
    await this.newClientPage.CLIENTS_LIST_LINK.click();
    await expect.soft(this.page).toHaveTitle(this.clientsPage.TITLE);
  }

  /**
   * Verify client is present in Clients list
   * @type {string} clientName - client name to search for
   */
  @step('Verify client is present in Clients list')
  async verifyClientIsInList(clientName: string) {
    await expect.soft(this.clientsPage.clientRowByName(clientName), `Client "${clientName}" should be visible in the list`).toBeVisible();
  }
}
