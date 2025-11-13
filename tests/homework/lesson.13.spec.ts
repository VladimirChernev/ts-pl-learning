import { test, expect } from '@playwright/test';

// execute file with the command: 'npx playwright test -g "Lesson 13 Homework"'
// add the parameter: '--headed' to see the browser
// add the parameter: '--debug' to execute in debug mode
// after execution view html report with command: 'npx playwright show-report'
// fill in the missing code, element to test has the same name as the test step
// use soft assertions everywhere with comments like the example below
test(`Lesson 13 Homework`, async ({ page }) => {
  await test.step('Navigate to Automation Practice page', async () => {
    await page.goto('https://rahulshettyacademy.com/AutomationPractice/');
    await expect.soft(page, 'Verify Page Title').toHaveTitle('Practice Page');
  });
  // create a test step with the name 'Radio Button Example'
  // check radio button #2
  // Verify Radio button #2 is checked
  await test.step('Radio Button Example', async () => {
    await page.locator('label').filter({ hasText: 'Radio2' }).getByRole('radio').click();
    await expect.soft(page.locator('label').filter({ hasText: 'Radio2' }).getByRole('radio'), 'Radio2 should be selected').toBeChecked;
  });
  // create a test step with the name 'Suggession Class Example'
  // fill the input with "Bulgaria"
  // click on the first auto complete suggestion
  // Verify the input value is "Bulgaria"
  await test.step('Suggession Class Example', async () => {
    await page.locator('#autocomplete').fill('Bulgaria');
    await page.locator('.ui-menu-item div').first().click();
    await expect.soft(page.locator('#autocomplete'), 'Correct country is selected').toHaveValue('Bulgaria');
  });

  // create a test step with the name 'Dropdown Example'
  // Verify the selected option is "option2"

  await test.step('Dropdown Example', async () => {
    await page.locator('#dropdown-class-example').selectOption('option2');
    await expect.soft(page.locator('#dropdown-class-example'), 'Correct option is selected').toHaveValue('option2');

  });

  // create a test step with the name 'Checkbox Example'
  // check checkbox #3
  // Verify checkbox #3 is checked

  await test.step('Checkbox Example', async () => {
    await page.locator('#checkBoxOption3').check();
    await expect.soft(page.locator('#checkBoxOption3'),'Correct option is selected').toBeChecked();

  });

  // create a test step with the name 'Element Displayed Example'
  // click on the "Hide" button
  // Verify the input element is now hidden

  await test.step('Element Displayed Example', async () => {
    await page.locator('#hide-textbox').click();
    await expect.soft(page.locator('#displayed-text'), 'Text box is not visible').not.toBeVisible();
  });

  // create a test step with the name 'Mouse Hover Example'
  // hover over the "Mouse Hover" element
  // Verify the "Top" link is now visible

  await test.step('Mouse Hover Example', async () => {
    await page.getByRole('button', { name: 'Mouse Hover' }).hover();
    await expect.soft(page.getByText('Top'), 'Top option is visible').toBeVisible();
    page.pause();
  });
});
