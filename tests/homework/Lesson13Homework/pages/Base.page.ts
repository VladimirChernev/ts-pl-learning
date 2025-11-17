import { Page } from '@playwright/test';

export class BasePage {
  /* Page Setup */
  public readonly page: Page;

  // Page Variables:
  public URL: string;
  public TITLE: string;

  constructor(page: Page) {
    /* Page Setup */
    this.page = page;
  }
}
