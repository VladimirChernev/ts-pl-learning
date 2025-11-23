import { Page, BrowserContext, Locator } from '@playwright/test';
import { BasePage } from '@tests/pages/Base.page';
import selectStringByLang from '@lib/tools/selectStringByLang';
import { LANG } from '@testconfig';

export default class Clients extends BasePage {
  public readonly ADD_NEW_CLIENT_BUTTON: Locator;
  public readonly CLIENTS_LIST_BUTTON: Locator;
  public readonly CLIENTS_LIST: Locator;
  public readonly SUCCESS_MESSAGE: Locator;

  constructor(page: Page, context: BrowserContext) {
    /* Page Setup */
    super(page, context);

    /* Page Variables */
    this.URL = 'https://st2016.inv.bg/clients/manage';
    this.TITLE = selectStringByLang(LANG, { en: 'Clients - QA Ground LTD.', bg: 'Клиенти - QA Ground' });

    /* Page Locators */
    this.ADD_NEW_CLIENT_BUTTON = this.page.locator('.newbtn.selenium-add-client-button');
    this.CLIENTS_LIST_BUTTON = this.page.locator('.onsublink');
    this.CLIENTS_LIST = this.page.locator('.selenium-client-link');
    this.SUCCESS_MESSAGE = this.page.getByText('Клиентът е добавен успешно.', {
      exact: true,
    });
  }
}
