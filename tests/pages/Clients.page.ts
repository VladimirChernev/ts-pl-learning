import { Page, BrowserContext, Locator } from '@playwright/test';
import { BasePage } from '@tests/pages/Base.page';
import selectStringByLang from '@lib/tools/selectStringByLang';
import { LANG } from '@testconfig';

export default class ClientsPage extends BasePage {
  public readonly NEW_CLIENT_BUTTON: Locator;

  constructor(page: Page, context: BrowserContext) {
    super(page, context);

    // URL и Title за страницата "Клиенти"
    this.URL = 'https://st2016.inv.bg/clients/manage/';
    this.TITLE = selectStringByLang(LANG, {
      en: 'Clients - QA Ground',
      bg: 'Клиенти - QA Ground',
    });

    // бутон "Нов клиент"
    this.NEW_CLIENT_BUTTON = this.page.getByText('Нов клиент');
  }

  clientRowByName(name: string): Locator {
    // Локатор за ред от таблицата, съдържащ името на клиента
    return this.page.locator(`//table//a[normalize-space()="${name}"]`);
  }
}
