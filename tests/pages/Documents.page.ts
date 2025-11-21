import { Page, BrowserContext, Locator } from '@playwright/test';
import { BasePage } from '@tests/pages/Base.page';

export default class Documents extends BasePage {
  public readonly UPLOAD_NEW_DOCUMENT_BUTTON: Locator;
  public readonly DOCUMENT_CHECKBOX: (filename: string) => Locator;
  public readonly DELETE_DOCUMENT_BUTTON: Locator;
  // Upload New Document Pop Up
  public readonly UPLOAD_FILE_BUTTON: Locator;
  public readonly CREATE_DOCUMENT_BUTTON: Locator;
  public readonly CREATED_DOCUMENT_LINK: (filename: string) => Locator;
  public readonly DELETE_MESSAGE: Locator;

  constructor(page: Page, context: BrowserContext) {
    /* Page Setup */
    super(page, context);

    /* Page Variables */
    this.URL = 'https://st2016.inv.bg/documents';
    this.TITLE = 'Документи - QA Ground';

    /* Page Locators */
    this.UPLOAD_NEW_DOCUMENT_BUTTON = this.page.locator('.newbtn.selenium-new-doc');
    this.DOCUMENT_CHECKBOX = (filename: string) => this.page.getByRole('row', { name: `${filename} Други неизпратен` }).getByRole('checkbox');
    this.DELETE_DOCUMENT_BUTTON = this.page.getByRole('link', { name: 'Изтрий' });
    this.DELETE_MESSAGE = this.page.locator('#okmsg');
    // Upload New Document Pop Up
    this.UPLOAD_FILE_BUTTON = this.page.locator('.selenium-file-input');
    this.CREATE_DOCUMENT_BUTTON = this.page.getByRole('button', { name: 'Създай' });
    this.CREATED_DOCUMENT_LINK = (filename: string) => this.page.getByRole('link', { name: filename });
  }

  async createdDocument(fileName: string): Promise<Locator> {
    return this.page.getByRole('link', { name: fileName });
  }
}
