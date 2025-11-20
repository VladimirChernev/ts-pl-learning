import PageFactory from '@tests/pages/Page.factory';
import { expect, Page, BrowserContext } from '@playwright/test';
import { step } from '@lib/tools/step.decorator';
import path from 'path';

export default class DocumentsPageSteps extends PageFactory {
  constructor(page: Page, context: BrowserContext) {
    super(page, context);
  }

  /**
   * Click Upload New Document Button
   */
  @step('Click Upload New Document Button')
  async ClickUploadNewDocumentButton() {
    await this.documentsPage.UPLOAD_NEW_DOCUMENT_BUTTON.click();
    await expect.soft(this.documentsPage.UPLOAD_FILE_BUTTON).toBeVisible();
  }

  /**
   * Upload New Document File
   */
  @step('Upload New Document File')
  async UploadNewDocumentFile(fileName: string) {
    await this.documentsPage.UPLOAD_FILE_BUTTON.setInputFiles(path.join(__dirname, '..', '..', 'resources', 'files', fileName));
    await this.documentsPage.CREATE_DOCUMENT_BUTTON.click();
    await expect.soft(this.documentsPage.CREATED_DOCUMENT_LINK(fileName)).toBeVisible();
    
  }
}
