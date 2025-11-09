import { test } from '@playwright/test';

// documentation: https://playwright.dev/docs/input

test('Actions Examples', async ({ page }) => {
  await page.goto('https://st2016.inv.bg/login');

  await page.pause();

  // Text Input
  // await page.locator('#loginusername').fill('username');

  // Checkbox and Radio buttons
  await page.locator('#persistent').check();
  await page.getByRole('radio', { name: 'English' }).check();

  // Select Option from Dropdown
  await page.locator('#searchLanguage').selectOption('af');

  // Multiple Option Dropdown Selection
  await page.locator('Choose multiple colour').selectOption(['red', 'blue', 'green'])

  // Mouse clicks
  // Generic click
  await page.locator('#loginsubmit').click();

  // Double click
  await page.locator('.fas.fa-eye').dblclick();

  // Right click
  await page.locator('#loginusername').click({ button: 'right'});

  // Shift + Click
  await page.locator('#loginsubmit').click({ modifiers: ['Shift'] });

  // Ctr + click
  await page.locator('#loginsubmit').click({ modifiers: ['ControlOrMeta'] });

  // Click at specific position (x=0 and y=0 meand top left corner)
  await page.locator('.login-logo-container--login__img').click({ position: { x: 0, y: 0 } });

  // Focus element
  await page.locator('.selenium-forgotten-page').focus();

  // Hover element
  await page.locator('#newpass2').hover();

  // Drag and drop
  await page.locator('#newpass2').dragTo(page.locator('#loginusername'));

  // Keyboard input
  await page.locator('#loginpassword').press('Enter');

  await page.pause();
});
