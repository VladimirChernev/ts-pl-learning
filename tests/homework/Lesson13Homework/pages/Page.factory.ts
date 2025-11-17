import { Page } from '@playwright/test';
import { PracticePage } from './Practice.page';

export class PageFactory {
  static getPracticePage(page: Page) {
    return new PracticePage(page);
  }
}
