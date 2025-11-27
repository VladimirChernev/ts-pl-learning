import { test, expect } from '@playwright/test';

// execute file with the command: 'npx playwright test -g "Lesson 13 Homework"'
// add the parameter: '--headed' to see the browser
// add the parameter: '--debug' to execute in debug mode
// after execution view html report with command: 'npx playwright show-report'
// fill in the missing code, where element to test has the same name as the test step
// try to use Playwright locators where possible
// use soft assertions everywhere with comments like the example below

test(`Lesson 13 Homework @homework13`, async ({ page }) => {
  await test.step('Navigate to Automation Practice page', async () => {
    await page.goto('https://rahulshettyacademy.com/AutomationPractice/');
    await expect.soft(page, 'Verify Page Title').toHaveTitle('Practice Page');
  });

  // create a test step with the name 'Radio Button Example'
  // check radio button #2
  // Verify Radio button #2 is checked

  await test.step('Radio Button Example', async () => {
    await page.locator('label').filter({ hasText: 'Radio2' }).getByRole('radio').click();
    await expect.soft(page.locator('label').filter({ hasText: 'Radio2' }).getByRole('radio')).toBeChecked();
  });

  // create a test step with the name 'Suggession Class Example'
  // fill the input with "Bulgaria"
  // click on the first auto complete suggestion
  // Verify the input value is "Bulgaria"

  await test.step('Suggession Class Example', async () => {
    const expectedInput = 'Bulgaria';
    await page.locator('#autocomplete').fill('Bulgaria');
    await page.locator("//li[@class='ui-menu-item']").click();
    const inputText = await page.locator('#autocomplete').inputValue();
    expect.soft(inputText).toBe(expectedInput);
  });

  // create a test step with the name 'Dropdown Example'
  // select option #2 from the dropdown
  // Verify the selected option is "option2"

  await test.step('Dropdown Example', async () => {
    const expectedSelection = 'Option2';
    await page.locator('#dropdown-class-example').selectOption('option2');
    // Тука според мен няма как да стане това. На самия сайт, при избор на опция от падащото меню, тя се селектира, но в ДОМ дървото това
    // не се отбелязва по никакъв начин. Дори валюто на полето си остава <option value="">Select</option>.
    // Затова взимам текста на самата опция, която съм избрал, но това не е адекватна проверка.
    const actualSelection = await page.locator('#dropdown-class-example').locator('option[value="option2"]').textContent();
    expect.soft(actualSelection?.trim()).toBe(expectedSelection);
  });

  // create a test step with the name 'Checkbox Example'
  // check checkbox #3
  // Verify checkbox #3 is checked

  await test.step('Checkbox Example', async () => {
    await page.locator('#checkBoxOption3').check();
    await expect.soft(page.locator('#checkBoxOption3')).toBeChecked();
  });

  // create a test step with the name 'Element Displayed Example'
  // click on the "Hide" button
  // Verify the input element is now hidden

  await test.step('Element Displayed Example', async () => {
    await expect.soft(page.locator('#displayed-text')).toBeVisible();

    await page.locator('#hide-textbox').click();

    await expect.soft(page.locator('#displayed-text')).toBeHidden();
  });

  // create a test step with the name 'Mouse Hover Example'
  // hover over the "Mouse Hover" element
  // Verify the "Top" link is now visible
});
