import { test, expect } from '@playwright/test';

// move file to demo folder while developing
// execute file with the command: 'npx playwright test'
// use the command: 'npx playwright test --headed' to see the browser
// use the command: 'npx playwright test --ui' for debug mode
// after execution find an html report in the 'test-results' folder
// fill in the missing code, element to use in test is in the UI section with the same name as the test step
// use soft assertions everywhere with comments like the example below
// when done, move the file back to the homework folder
test(`Homework 06`, async ({ page }) => {
  await test.step('Navigate to landing page', async () => {
    await page.goto('https://rahulshettyacademy.com/AutomationPractice/');
    await expect.soft(page, 'Verify Page Title').toHaveTitle('Practice Page');
  });

  await test.step('Radio Button Example', async () => {
    // check radio button #2
    // Verify Radio button #2 is checked
  });

  await test.step('Suggession Class Example', async () => {
    // fill the input with "Bulgaria"
    // click on the first auto complete suggestion
    // Verify the input value is "Bulgaria"
  });

  await test.step('Dropdown Example', async () => {
    // select option #2 from the dropdown
    // Verify the selected option is "option2"
  });

  await test.step('Checkbox Example', async () => {
    // check checkbox #3
    // Verify checkbox #3 is checked
  });

  await test.step('Element Displayed Example', async () => {
    // click on the "Hide" button
    // Verify the input element is now hidden
  });

  await test.step('Mouse Hover Example', async () => {
    // hover over the "Mouse Hover" element
    // Verify the "Top" link is now visible
  });
});
