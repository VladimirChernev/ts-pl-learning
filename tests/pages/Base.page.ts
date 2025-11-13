import { Page, BrowserContext, Locator } from '@playwright/test';

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

  /* Navigation Menu*/
  public readonly NEW_INVOICE_BUTTON: Locator;

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

    /* Navigation Menu*/
    this.NEW_INVOICE_BUTTON = this.page.locator('//*[@id="tabs_invoices/new"]');

    /* Other */
    this.SUPPORT_CHAT_BUTTON = page.locator('#lhc_status_widget_v2');

    /* Footer */
    this.CONTACTS_BUTTON = page.getByText('Контакти');
  }
}
