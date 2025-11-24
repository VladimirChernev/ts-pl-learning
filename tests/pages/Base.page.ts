import { Page, BrowserContext, Locator } from '@playwright/test';
import selectStringByLang from '@lib/tools/selectStringByLang';
import { LANG } from '@testconfig';

export class BasePage {
  /* Page Setup */
  public readonly page: Page;
  public readonly context: BrowserContext;

  // Page Variables:
  public URL: string;
  public TITLE: string;

  /* 
    Global Locators:
  */

  /* Header */
  public readonly SETTINGS_BUTTON: Locator;
  public readonly PLAN_BUTTON: Locator;
  public readonly USERPANEL_MENU: Locator;
  public readonly LOGOUT_BUTTON: Locator;

  /* Navigation Menu*/
  public readonly NEW_INVOICE_BUTTON: Locator;
  public readonly DOCUMENTS_BUTTON: Locator;
  public readonly CLIENTS_BUTTON: Locator;

  /* Other */
  public readonly SUPPORT_CHAT_BUTTON: Locator;

  /* Footer */
  public readonly CONTACTS_BUTTON: Locator;

  constructor(page: Page, context: BrowserContext) {
    /* Page Setup */
    this.page = page;
    this.context = context;

    /* 
      Global Locators:
    */

    /* Header */
    this.SETTINGS_BUTTON = this.page.locator('.selenium-settings-menu');
    this.PLAN_BUTTON = this.page.locator('.selenium-plan-settings');
    this.USERPANEL_MENU = this.page.locator('#userpanel');
    this.LOGOUT_BUTTON = this.page.locator('.selenium-button-logout.button-logout');

    /* Navigation Menu*/
    this.NEW_INVOICE_BUTTON = this.page.locator('//*[@id="tabs_invoices/new"]');
    this.DOCUMENTS_BUTTON = this.page.locator('#tabs_documents');
    this.CLIENTS_BUTTON = this.page.locator('#tabs_clients');

    /* Other */
    this.SUPPORT_CHAT_BUTTON = page.locator('#lhc_status_widget_v2');

    /* Footer */
    // this.CONTACTS_BUTTON = page.getByText('Контакти');
    this.CONTACTS_BUTTON = page.getByText(selectStringByLang(LANG, { en: 'Contacts', bg: 'Контакти' }));
  }
}
