import { test } from '@playwright/test';

// documentation: https://playwright.dev/docs/Locators
// documentation: https://playwright.dev/docs/best-practices#best-practices

test('Locator Examples', async ({ page }) => {
  await page.goto('https://st2016.inv.bg/login');

  /*
    Locator - Selector (Xpath or CSS)
  */

  // find by Id
  await page.locator('#loginusername').fill('Username'); // CSS
  await page.locator('//*[@id="loginusername"]').fill('Username'); // Xpath

  // find by Attribute - Name
  await page.locator('[name="email"]').fill('Username'); // CSS
  await page.locator('//*[@name="email"]').fill('Username'); // Xpath

  // find by Attribute - tabindex
  await page.locator('[tabindex="1"]').fill('Username'); // CSS
  await page.locator('//*[@tabindex="1"]').fill('Username'); // Xpath

  // find by Class
  await page.locator('.textinput.selenium-login-email').fill('Username'); // CSS
  await page.locator('//*[contains(@class,"selenium-login-email")]').fill('Username');

  // find by Text
  await page.locator('text="Забравена парола?"').click(); // CSS
  await page.locator('//*[contains(text(),"Забравена парола?")]').click(); // Xpath

  // combination Example
  await page.locator('.operator').filter({ hasText: 'Чат с оператор' }).click();

  /* 
  Playwright Built-in Locators
  */

  // find by Role
  await page.getByRole('button', { name: 'Вход' }).click();

  // find by Text
  await page.getByText('запомни входа от този компютър').check();

  // find by Label
  await page.getByLabel('English').check();
  await page.getByLabel('EN').check();

  // find by Test Id
  await page.getByTestId('Chechbox test').check();

  // find by Placeholder
  await page.getByPlaceholder('Search IMDb').fill('Predator');

  // find by Title
  await page.getByTitle('English — Wikipedia — The Free Encyclopedia').click();

  // find by Alt text
  await page.getByAltText('Get Certified').click();

  /*
    Working with multiple elements
  */

  // count all elements found by locator
  console.log(await page.locator('//*[contains(@class,"selenium")]').count());

  // find all locators and print them
  console.log((await page.locator('//*[contains(@class,"selenium")]').all()).toString());

  // find first in a list of locators
  await page.locator('//*[contains(@class,"selenium")]').first().click();

  // find last in a list of locators
  await page.locator('//*[contains(@class,"selenium")]').last().click();

  // find n-th in a list of locators
  await page.locator('//*[contains(@class,"selenium")]').nth(5).click();
});
