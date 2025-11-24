import { Page, BrowserContext, Locator } from '@playwright/test';
import { BasePage } from '@tests/pages/Base.page';
import selectStringByLang from '@lib/tools/selectStringByLang';
import { LANG } from '@testconfig';


export default class NewClientPage extends BasePage {
  public readonly CLIENT_NAME_INPUT: Locator;
  public readonly SAVE_BUTTON: Locator;
  public readonly SUCCESS_MESSAGE: Locator;
  public readonly CLIENTS_LIST_LINK: Locator;

  constructor(page: Page, context: BrowserContext) {
    super(page, context);

    this.URL = 'https://st2016.inv.bg/clients/manage/add';
    this.TITLE = selectStringByLang(LANG, {
      en: 'Add a client - QA Ground',
      bg: 'Добавяне на клиент - QA Ground',
    });

    this.CLIENT_NAME_INPUT = this.page.locator('#name-bg');
    this.SAVE_BUTTON = this.page.getByRole('button', { name: 'Запази' });
    this.SUCCESS_MESSAGE = this.page.getByText('Клиентът е добавен успешно.');
    this.CLIENTS_LIST_LINK = this.page.getByText('Списък клиенти');
  }
}