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

  await test.step('Radio Button Example', async () => {
    // check radio button #2
    await page.locator('input[value="radio2"]').check();

    // Verify Radio button #2 is checked
    await expect(page.locator('input[value="radio2"]')).toBeChecked();
  });

  await test.step('Suggession Class Example', async () => {
    // fill the input with "Bulgaria"
    await page.getByPlaceholder('Type to Select Countries').fill('Bulgaria');

    // click on the first auto complete suggestion
    await page.locator('.ui-menu-item').click();

    // Verify the input value is "Bulgaria"
    await expect.soft(page.getByPlaceholder('Type to Select Countries')).toHaveValue('Bulgaria');
  });

  await test.step('Dropdown Example', async () => {
    // select option #2 from the dropdown
    await page.locator('#dropdown-class-example').selectOption('option2');

    // Verify the selected option is "option2"
    await expect.soft(page.locator('#dropdown-class-example')).toHaveValue('option2');
  });

  await test.step('Checkbox Example', async () => {
    // check checkbox #3
    await page.locator('#checkBoxOption3').check();

    // Verify checkbox #3 is checked
    await expect.soft(page.locator('#checkBoxOption3')).toBeChecked();
  });

  await test.step('Element Displayed Example', async () => {
    // click on the "Hide" button
    await page.locator('#hide-textbox').click();

    // Verify the input element is now hidden
    await expect.soft(page.locator('#displayed-text')).toBeHidden();
  });

  await test.step('Mouse Hover Example', async () => {
    // hover over the "Mouse Hover" element
    await page.locator('#mousehover').hover();

    // Verify the "Top" link is now visible
    await expect.soft(page.locator('a[href="#top"]')).toBeVisible();
  });
});
