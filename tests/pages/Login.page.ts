import { Page, BrowserContext, Locator } from '@playwright/test';
import { BasePage } from '@tests/pages/Base.page';
import selectStringByLang from '@lib/tools/selectStringByLang';
import { LANG } from '@testconfig';

export default class LoginPage extends BasePage {
  public readonly EMAIL_INPUT: Locator;
  public readonly PASSWORD_INPUT: Locator;
  public readonly LOGIN_BUTTON: Locator;
  public readonly BG_LANG_RADIO_BUTTON: Locator;
  public readonly EN_LANG_RADIO_BUTTON: Locator;
  public readonly LOGOUT_MESSAGE: Locator;
  public readonly ERROR_MESSAGE: Locator;

  constructor(page: Page, context: BrowserContext) {
    /* Page Setup */
    super(page, context);

    /* Page Variables */
    this.URL = 'https://st2016.inv.bg/login';
    this.TITLE = selectStringByLang(LANG, { en: 'Log in - QA Ground', bg: 'Вход - QA Ground' });

    /* Page Locators */
    this.EMAIL_INPUT = page.locator('#loginusername');
    this.PASSWORD_INPUT = page.locator('#loginpassword');
    this.BG_LANG_RADIO_BUTTON = page.locator('.selenium-language-radio-button-BG');
    this.EN_LANG_RADIO_BUTTON = page.locator('.selenium-language-radio-button-EN');
    this.LOGIN_BUTTON = page.locator('#loginsubmit');
    this.LOGOUT_MESSAGE = page.locator('#okmsg');
    this.ERROR_MESSAGE = page.locator('#error');
  }
}
