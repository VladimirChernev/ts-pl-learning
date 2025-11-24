import { Page, BrowserContext, Locator } from '@playwright/test';
import { BasePage } from '@tests/pages/Base.page';

export default class ClientsPage extends BasePage {
  public readonly NEW_CLIENT_BUTTON: Locator;
  public readonly CLIENT_NAME_INPUT: Locator;
  public readonly SAVE_BUTTON: Locator;
  public readonly SUCCESS_MESSAGE: Locator;
  public readonly CLIENTS_LIST_LINK: Locator;
  public readonly CLIENT_ROW: (clientName: string) => Locator;

  constructor(page: Page, context: BrowserContext) {
    /* Page Setup */
    super(page, context);

    /* Page Variables */
    this.URL = 'https://st2016.inv.bg/clients';
    this.TITLE = 'Клиенти - QA Ground';

    /* Page Locators */
    this.NEW_CLIENT_BUTTON = this.page.locator('.newbtn.selenium-add-client-button');
    this.CLIENT_NAME_INPUT = this.page.locator('#client_firmname');
    this.SAVE_BUTTON = this.page.getByRole('button', { name: 'Запази' });
    this.SUCCESS_MESSAGE = this.page.locator('#okmsg');
    this.CLIENTS_LIST_LINK = this.page.getByText('Списък клиенти').first();
    this.CLIENT_ROW = (clientName: string) => this.page.getByRole('row', { name: new RegExp(clientName, 'i') });
  }
}

