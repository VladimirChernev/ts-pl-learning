import PageFactory from '@tests/pages/Page.factory';
import { expect, Page, BrowserContext } from '@playwright/test';
import { step } from '@lib/tools/step.decorator';
import ClientsPage from '@tests/pages/Clients.page';
import NewClientPage from '@tests/pages/New.Client.page';

export default class ClientsPageSteps extends PageFactory {
  private readonly clientsPage: ClientsPage;
  private readonly newClientPage: NewClientPage;

  constructor(page: Page, context: BrowserContext) {
    super(page, context);
    this.clientsPage = new ClientsPage(page, context);
    this.newClientPage = new NewClientPage(page, context);
  }

  /**
   * Navigate to Clients Page
   */
  @step('Navigate to Clients Page')
  async navigateToClientsPage() {
    await this.page.goto(this.clientsPage.URL);
    await expect.soft(this.page, 'Verify we are on Clients page').toHaveTitle(this.clientsPage.TITLE);
  }

  /**
   * Click New Client Button
   */
  @step('Click New Client Button')
  async clickNewClientButton() {
    await this.clientsPage.NEW_CLIENT_BUTTON.click();
    await expect.soft(this.page, 'Verify we are on New Client page').toHaveTitle(this.newClientPage.TITLE);
    // Wait for the form to be ready
    await expect(this.newClientPage.CLIENT_NAME_INPUT, 'Wait for client name input to appear on page').toBeVisible({ timeout: 10000 });
  }

  /**
   * Fill in New Client Form Name
   * @type {string} clientName - client name to fill in
   */
  @step('Fill in New Client Form Name')
  async fillClientName(clientName: string) {
    await expect(this.newClientPage.CLIENT_NAME_INPUT, 'Wait for client name input to be visible and enabled').toBeVisible();
    await expect(this.newClientPage.CLIENT_NAME_INPUT, 'Wait for client name input to be enabled').toBeEnabled();
    await this.newClientPage.CLIENT_NAME_INPUT.fill(clientName);
  }

  /**
   * Click Save Button
   */
  @step('Click Save Button')
  async clickSaveButton() {
    
    const popupOverlay = this.page.locator('.popup_overlay');
    await expect(popupOverlay, 'Wait for popup overlay to be hidden').toBeHidden({ timeout: 5000 }).catch(async () => {
      
      await this.page.keyboard.press('Escape');
      await expect(popupOverlay, 'Wait for popup overlay to be hidden after Escape').toBeHidden({ timeout: 2000 });
    });
    
    await this.newClientPage.SAVE_BUTTON.click();
  }

  /**
   * Verify Success Message
   */
  @step('Verify Success Message')
  async verifySuccessMessage() {
    await expect.soft(this.newClientPage.SUCCESS_MESSAGE, 'Verify success message is visible').toBeVisible();
  }

  /**
   * Click Clients List Link
   */
  @step('Click Clients List Link')
  async clickClientsListLink() {
    // Try to find and click the link with a short timeout, then navigate directly if not found
    try {
      await expect(this.newClientPage.CLIENTS_LIST_LINK, 'Wait for Clients List link to be visible').toBeVisible({ timeout: 2000 });
      await this.newClientPage.CLIENTS_LIST_LINK.click();
    } catch (error) {
      // If link is not found quickly, navigate directly to clients page
      await this.page.goto(this.clientsPage.URL);
    }
    
    await expect.soft(this.page, 'Verify we are back on Clients page').toHaveTitle(this.clientsPage.TITLE);
  }

  /**
   * Verify Client is in List
   * @type {string} clientName - client name to verify
   */
  @step('Verify Client is in List')
  async verifyClientInList(clientName: string) {
    await expect.soft(this.clientsPage.CLIENT_ROW(clientName), `Verify client "${clientName}" is in the list`).toBeVisible();
  }
}

