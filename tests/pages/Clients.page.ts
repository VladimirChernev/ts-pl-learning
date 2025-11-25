import { Page, BrowserContext, Locator } from '@playwright/test';
import { BasePage } from '@tests/pages/Base.page';
import { Credentials } from '@lib/enums/Credentials';

export default class ClientsPage extends BasePage {
  clientName = Credentials.CLIENT_NAME;

  public readonly NEW_CLIENT_BUTTON: Locator;
  public readonly NAME_FIELD: Locator;
  public readonly SAVE_NEW_CLIENT_BUTTON: Locator;
  public readonly ADD_NEW_CLIENT_PAGE: Locator;
  public readonly ADD_NEW_CLIENT_SUCCESS_MESSAGE: Locator;
  public readonly CLIENTS_LIST: Locator;
  public readonly CLIENTS_USER: Locator;
  public readonly CLIENT_DELETE_TAB: Locator;
  public readonly CLIENT_DELETE_BUTTON: Locator;

  constructor(page: Page, context: BrowserContext) {
    /* Page Setup */
    super(page, context);

    /* Page Variables */
    this.URL = 'https://st2016.inv.bg/clients/manage/';
    this.TITLE = 'Клиенти - QA Ground';

    /* Page Locators */
    this.NEW_CLIENT_BUTTON = this.page.locator('.newbtn.selenium-add-client-button');
    this.NAME_FIELD = this.page.locator('#name-bg');
    this.SAVE_NEW_CLIENT_BUTTON = this.page.locator('//button[contains(text(),"Запази")]');
    this.ADD_NEW_CLIENT_SUCCESS_MESSAGE = this.page.locator('//div[@id="okmsg"]');
    this.ADD_NEW_CLIENT_PAGE = this.page.getByText('Нов клиент');
    this.CLIENTS_LIST = this.page.locator('//a[contains(text(),"Списък клиенти")]');
    this.CLIENTS_USER = this.page.locator(`//tr[td[normalize-space()='${this.clientName}']]//input[@type='checkbox']`);
    this.CLIENT_DELETE_TAB = this.page.locator('#cl_delbtn');
    this.CLIENT_DELETE_BUTTON = this.page.getByRole('button', { name: 'Изтрий' });
  }
}
