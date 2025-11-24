import { Page, BrowserContext, Locator } from '@playwright/test';
import { BasePage } from '@tests/pages/Base.page';

export default class NewClientPage extends BasePage {
  public readonly CLIENT_NAME_INPUT: Locator;
  public readonly SAVE_BUTTON: Locator;
  public readonly SUCCESS_MESSAGE: Locator;
  public readonly CLIENTS_LIST_LINK: Locator;

  constructor(page: Page, context: BrowserContext) {
    /* Page Setup */
    super(page, context);

    /* Page Variables */
    this.URL = 'https://st2016.inv.bg/clients/new';
    this.TITLE = 'Добавяне на клиент - QA Ground';

    /* Page Locators */
    this.CLIENT_NAME_INPUT = this.page.locator('input#name-bg');
    this.SAVE_BUTTON = this.page.locator('.save-settings-submit-button.selenium-client-add-submit');
    this.SUCCESS_MESSAGE = this.page.locator('#okmsg');
    this.CLIENTS_LIST_LINK = this.page.getByText('Списък клиенти').first();
  }
}

