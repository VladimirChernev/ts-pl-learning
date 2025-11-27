import { test, expect } from '@playwright/test';

// execute file with the command: 'npx playwright test -g "Lesson 13 Homework"'
// add the parameter: '--headed' to see the browser
// add the parameter: '--debug' to execute in debug mode
// after execution view html report with command: 'npx playwright show-report'
// fill in the missing code, where element to test has the same name as the test step
// try to use Playwright locators where possible
// use soft assertions everywhere with comments like the example below
test(`Lesson 13 Homework`, async ({ page }) => {
  await test.step('Navigate to Automation Practice page', async () => {
    await page.goto('https://rahulshettyacademy.com/AutomationPractice/');
    await expect.soft(page, 'Verify Page Title').toHaveTitle('Practice Page');
  });

  // create a test step with the name 'Radio Button Example'
  // check radio button #2
  // Verify Radio button #2 is checked

  // create a test step with the name 'Suggession Class Example'
  // fill the input with "Bulgaria"
  // click on the first auto complete suggestion
  // Verify the input value is "Bulgaria"

  // create a test step with the name 'Dropdown Example'
  // select option #2 from the dropdown
  // Verify the selected option is "option2"

  // create a test step with the name 'Checkbox Example'
  // check checkbox #3
  // Verify checkbox #3 is checked

  // create a test step with the name 'Element Displayed Example'
  // click on the "Hide" button
  // Verify the input element is now hidden

  // create a test step with the name 'Mouse Hover Example'
  // hover over the "Mouse Hover" element
  // Verify the "Top" link is now visible
});
