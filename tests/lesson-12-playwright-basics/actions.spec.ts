import { test } from '@playwright/test';
import path from 'path';

// documentation: https://playwright.dev/docs/input

test('Actions Examples', async ({ page }) => {
  await page.goto('https://st2016.inv.bg/login');

  // Text input (<input>, <textarea> and [contenteditable])
  await page.locator('#loginusername').fill('Username');

  // Checkboxes and Radio buttons:
  await page.locator('.selenium-language-radio-button-EN').check();
  await page.locator('#persistent').check();

  // Selecting option in a dropdown:
  await page.locator('#searchLanguage').selectOption('Afrikaans'); // both value 'af' or text 'Afrikaans' https://www.wikipedia.org/

  // Mouse clicks:
  // Generic click
  await page.locator('#persistent').click();
  // Double click
  await page.locator('#passicon').dblclick();
  // Right click
  await page.locator('#loginusername').click({ button: 'right' });
  // Shift + click
  await page.getByText('Item').click({ modifiers: ['Shift'] });
  // Ctrl + click on Windows and Linux or Meta + click on macOS:
  await page.getByText('Item').click({ modifiers: ['ControlOrMeta'] });
  // Click the top left corner
  await page.locator('#simplepage').click({ position: { x: 0, y: 0 } });

  // Focus element:
  await page.locator('#newpass2').focus();

  // Drag and drop:
  await page.locator('#newpass2').dragTo(page.locator('#loginusername'));

  // Keyboard input:
  // Hit Enter
  await page.locator('#loginusername').fill('karamfilovs@gmail.com');
  await page.locator('#loginpassword').fill('111111');
  await page.locator('#loginpassword').press('Enter');
  // Key combination
  await page.getByRole('textbox').press('Control+ArrowRight');
  await page.getByRole('textbox').press('Shift+ArrowLeft');
  await page.getByRole('textbox').press('Shift+A');
  // Press $ sign on keyboard
  await page.locator('#universalSearchInput').press('$');

  // Hover over element
  await page.getByText('Към списък фактури').hover(); // after login

  // Scrolling:
  // Scrolls automatically so that button is visible
  await page.getByRole('link', { name: 'Контакти' }).hover();
  // Scroll the footer into view, forcing an "infinite list" to load more content
  await page.getByRole('link', { name: 'Контакти' }).scrollIntoViewIfNeeded();

  // Upload files:
  await page.locator('#tabs_documents').click(); // after login
  await page.locator('.newbtn.selenium-new-doc').click();
  // Select one file
  await page.locator('.selenium-file-input').setInputFiles(path.join(__dirname, 'xpath_css_dom_ref.pdf'));
  await page.pause();
  // Select multiple files
  await page.getByLabel('Upload files').setInputFiles([path.join(__dirname, 'file1.txt'), path.join(__dirname, 'file2.txt')]);
  // Select a directory
  await page.getByLabel('Upload directory').setInputFiles(path.join(__dirname, 'mydir'));
  // Remove all the selected files
  await page.getByLabel('Upload file').setInputFiles([]);
  // Upload buffer from memory
  await page.getByLabel('Upload file').setInputFiles({
    name: 'file.txt',
    mimeType: 'text/plain',
    buffer: Buffer.from('this is test'),
  });
});
  