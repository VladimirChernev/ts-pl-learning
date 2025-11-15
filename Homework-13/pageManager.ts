import { Page } from '@playwright/test';
import { PracticePage } from './practicePage';

export class PageManager {
  readonly page: Page;
  readonly practicePage: PracticePage;

  constructor(page: Page) {
    this.page = page;
    this.practicePage = new PracticePage(page);
  }
}
