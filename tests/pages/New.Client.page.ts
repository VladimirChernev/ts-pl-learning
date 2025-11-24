import { Page, BrowserContext, Locator } from '@playwright/test';
import { BasePage } from '@tests/pages/Base.page';
import selectStringByLang from '@lib/tools/selectStringByLang';
import { LANG } from '@testconfig';

export default class NewClientPage extends BasePage {
  public readonly CLIENT_NAME_INPUT_BG: Locator;
  public readonly SAVE_BUTTON: Locator;

  constructor(page: Page, context: BrowserContext) {
    /* Page Setup */
    super(page, context);

    /* Page Variables */
    this.URL = 'https://st2016.inv.bg/clients/manage/add';
    this.TITLE = selectStringByLang(LANG, { en: 'Add a client - QA Ground LTD.', bg: 'Добавяне на клиент - QA Ground' });

    /* Page Locators */
    this.CLIENT_NAME_INPUT_BG = this.page.locator('#name-bg');
    this.SAVE_BUTTON = this.page.locator('.selenium-client-add-submit');
  }
}
