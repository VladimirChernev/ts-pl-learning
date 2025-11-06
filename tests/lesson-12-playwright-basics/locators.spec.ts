import { test } from '@playwright/test';

// documentation: https://playwright.dev/docs/locators
// best practices: https://playwright.dev/docs/best-practices#best-practices

test('Locator Examples', async ({ page }) => {
  await page.goto('https://st2016.inv.bg/login');

  /*
    Custom Locator + Selectors Xpath or CSS
  */

  // find by ID
  await page.locator('//input[@id="loginusername"]').fill('username'); // XPath
  await page.locator('input#loginusername').fill('username'); // CSS

  // find by Attribute - Name
  await page.locator('//*[@name="password"]').fill('password'); // Xpath
  await page.locator('[name="password"]').fill('password'); // CSS

  // find by Attribute - Tabindex:
  await page.locator('//*[@tabindex="3"]').click(); // Xpath
  await page.locator('[tabindex="3"]').click(); // CSS

  // find by Class
  await page.locator("//*[contains(@class, 'selenium')]").click(); // Xpath but this will locate any class with the substring "selenium" as part of its value like "selenium-login-header" or "selenium-remember-me-option" etc.
  await page.locator("//input[contains(concat(' ', @class, ' '), 'selenium-submit-button g-recaptcha')]").click(); // Xpath
  await page.locator('input.selenium-submit-button.g-recaptcha').click(); // CSS

  // find by Text
  await page.locator("//*[.='Забравена парола?'] ").click(); // Xpath exact text match
  await page.locator("//*[contains(text(),'Забравена')]").click(); // Xpath contain text
  await page.locator('text="Забравена парола?"').click(); // CSS, remove the "" to make text NOT case sensitive

  // Combination Example: find by clacc and filter by text
  await page.locator('.operator').filter({ hasText: 'Чат с оператор' }).click();

  /*
    Playwright Build-in Locators
  */

  // find by Text:
  await page.getByText('Забравена парола?').click();
  await page.getByText('Забравена парола?', { exact: true }).click(); // make text case sensitive

  // find by Role:
  await page.getByRole('checkbox', { name: 'запомни входа от този компютър' }).click();
  await page.getByRole('button', { name: 'bla' }).click();

  // find by Label:
  await page.getByLabel('Search Wikipedia').fill('knowledge'); // https://www.wikipedia.org/

  // find by Placeholder:
  await page.getByPlaceholder('Search IMDb').fill('movie'); // https://www.imdb.com/

  // find by Title:
  await page.getByTitle('English — Wikipedia — The Free Encyclopedia').click(); // https://www.wikipedia.org/

  //find by Alt text:
  await page.getByAltText('Get Certified').click(); // https://www.w3schools.com/tags/att_img_alt.asp

  // find by test ID (works only if the test ID is set in the HTML dom):
  await page.getByTestId('testid#001').click();

  /*
    Working with multiple elements
  */

  // counts all elements found by locator
  console.log(await page.locator('//*[contains(@class, "selenium")]').count());

  // find all elements by text:
  console.log((await page.locator('//*[contains(@class, "selenium")]').all()).toString());

  // these are not recommended and rely on the HTML DOM structure (use as a last resort):
  // find first element by text:
  await page.locator('//*[contains(@class, "selenium")]').first().hover();
  // find last element by text:
  await page.locator('//*[contains(@class, "selenium")]').last().hover();
  // find nth element by text (1 means the third element in the list):
  await page.locator('//*[contains(@class, "selenium")]').nth(3).hover();
});
