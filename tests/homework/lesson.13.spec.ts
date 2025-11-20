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
    const radio2 = page.locator('input[value="radio2"]');
    await radio2.check();
    await expect(radio2).toBeChecked();
  });

  // create a test step with the name 'Suggession Class Example'
  // fill the input with "Bulgaria"
  // click on the first auto complete suggestion
  // Verify the input value is "Bulgaria"
  await test.step('Suggession Class Example', async () => {
    const fillText = page.locator('#autocomplete');
    await fillText.fill('Bulgaria');
    await page.locator('.ui-menu-item-wrapper').first().click();
    await expect(fillText).toHaveValue('Bulgaria');
  });

  // create a test step with the name 'Dropdown Example'
  // select option #2 from the dropdown
  // Verify the selected option is "option2"
  await test.step('Dropdown Example', async () => {
    const dropdownText = page.locator('#dropdown-class-example');
    await dropdownText.selectOption('option2');
    await expect(dropdownText).toHaveValue('option2');
  });

  // create a test step with the name 'Checkbox Example'
  // check checkbox #3
  // Verify checkbox #3 is checked
  await test.step('Checkbox Example', async () => {
    const checkbox3 = page.locator('#checkBoxOption3');
    await checkbox3.check();
    await expect(checkbox3).toBeChecked();
  });

  // create a test step with the name 'Element Displayed Example'
  // click on the "Hide" button
  // Verify the input element is now hidden
  await test.step('Element Displayed Example', async () => {
    const butHide = page.locator('#hide-textbox');
    const inputBox = page.locator('#displayed-text');
    await butHide.click();
    await expect(inputBox).toBeHidden();
  });

  // create a test step with the name 'Mouse Hover Example'
  // hover over the "Mouse Hover" element
  // Verify the "Top" link is now visible
  await test.step('Mouse Hover Example', async () => {
    const hoverButton = page.getByRole('button', { name: 'Mouse Hover' });
    await hoverButton.hover();
    const linkTop = page.getByRole('link', {name: 'Top'});
    await expect(linkTop).toBeVisible();
  });
});
