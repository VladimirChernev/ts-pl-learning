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
  async clickUploadNewDocumentButton() {
    await this.documentsPage.UPLOAD_NEW_DOCUMENT_BUTTON.click();
    await expect.soft(this.documentsPage.UPLOAD_FILE_BUTTON).toBeVisible();
  }

  /**
   * Upload New Document File
   */
  @step('Upload New Document File')
  async uploadNewDocumentFile(fileName: string) {
    await this.documentsPage.UPLOAD_FILE_BUTTON.setInputFiles(path.join(__dirname, '..', '..', 'resources', 'files', fileName));
    await this.documentsPage.CREATE_DOCUMENT_BUTTON.click();
    await expect.soft(this.documentsPage.DELETE_MESSAGE).toContainText('Файлът е качен успешно.');
    await expect.soft(this.documentsPage.CREATED_DOCUMENT_LINK(fileName)).toBeVisible();
  }

  /**
   * Delete Document File
   */
  @step('Delete Document File')
  async deleteDocumentFile(fileName: string) {
    await this.documentsPage.DOCUMENT_CHECKBOX(fileName).check();
    // Delete Document Action triggers a browser dialog, so we need to handle it with auto accept:
    this.page.on('dialog', (dialog) => dialog.accept());
    await this.documentsPage.DELETE_DOCUMENT_BUTTON.click();
    await expect.soft(this.documentsPage.DELETE_MESSAGE).toContainText('Избраните файлове/папки бяха перманентно изтрити.');
    await expect.soft(this.documentsPage.CREATED_DOCUMENT_LINK(fileName)).toBeHidden();
  }
}
