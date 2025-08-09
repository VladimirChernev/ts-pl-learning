import { test, expect } from '@playwright/test';
import path from 'path';

// documentation: https://playwright.dev/docs/input

test('Banker Scenario', async ({ page }) => {
  await test.step('Navigate to landing page', async () => {
    await page.goto('https://banker3-qa.test.procreditbank.bg/');
  });

  await test.step('Navigate to login page', async () => {
    await page.getByRole('link', { name: 'Login' }).click();
    await expect(page).toHaveTitle('Банкер 3 OnLine Вход в системата');
  });

  // text input
  // fill input field with text:
  await page.getByRole('textbox').fill('Peter');

  // Checkboxes and radio buttons:
  // Check the checkbox
  await page.getByRole('checkbox').check();
  // assert the checked state
  expect(page.getByRole('checkbox')).toBeChecked();

  // Selecting options in a dropdown:
  // Single selection matching the value or label
  await page.getByLabel('Choose a color').selectOption('blue');
  // Single selection matching the label
  await page.getByLabel('Choose a color').selectOption({ label: 'Blue' });
  // Multiple selected items
  await page.getByLabel('Choose multiple colors').selectOption(['red', 'green', 'blue']);

  // Mouse clicks:
  // Generic click
  await page.getByRole('button').click();
  // Double click
  await page.getByText('Item').dblclick();
  // Right click
  await page.getByText('Item').click({ button: 'right' });
  // Shift + click
  await page.getByText('Item').click({ modifiers: ['Shift'] });
  // Ctrl + click on Windows and Linux or Meta + click on macOS:
  await page.getByText('Item').click({ modifiers: ['ControlOrMeta'] });
  // Hover over element
  await page.getByText('Item').hover();
  // Click the top left corner
  await page.getByText('Item').click({ position: { x: 0, y: 0 } });

  // Keyboard input:
  // Hit Enter
  await page.getByText('Submit').press('Enter');
  // Key combination
  await page.getByRole('textbox').press('Control+ArrowRight');
  await page.locator('#name').press('Shift+ArrowLeft');
  await page.locator('#name').press('Shift+A');
  // Press $ sign on keyboard
  await page.getByRole('textbox').press('$');

  // Upload files:
  // Select one file
  await page.getByLabel('Upload file').setInputFiles(path.join(__dirname, 'myfile.pdf'));
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

  // Focus element:
  await page.getByRole('textbox').focus();

  // Drag and drop:
  await page.locator('#item-to-be-dragged').dragTo(page.locator('#item-to-drop-at'));

  // Scrolling:
  // Scrolls automatically so that button is visible
  await page.getByRole('button').click();
  // Scroll the footer into view, forcing an "infinite list" to load more content
  await page.getByText('Footer text').scrollIntoViewIfNeeded();
});
  