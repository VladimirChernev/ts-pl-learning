import { test, expect } from '@playwright/test';

const SELECTORS = {
  radioButton2: 'input[value="radio2"]',
  autocomplete: '#autocomplete',
  dropdown: '#dropdown-class-example',
  checkbox3: '#checkBoxOption3',
  hideButton: '#hide-textbox',
  displayedText: '#displayed-text',
  mouseHover: '#mousehover',
  topLink: 'a[href="#top"]'
};

// execute file with the command: 'npx playwright test -g "Lesson 13 Homework"'
// add the parameter: '--headed' to see the browser
// add the parameter: '--debug' to execute in debug mode
// after execution view html report with command: 'npx playwright show-report'
// fill in the missing code, element to test has the same name as the test step
// use soft assertions everywhere with comments like the example below
test(`Lesson 13 Homework`, async ({ page }) => {
  await test.step('Navigate to Automation Practice page', async () => {
    await page.goto('https://rahulshettyacademy.com/AutomationPractice/', {
      waitUntil: 'domcontentloaded'
    });
    await expect.soft(page, 'Verify Page Title').toHaveTitle('Practice Page');
  });

  // create a test step with the name 'Radio Button Example'
    // Check radio button #2
    // Verify Radio button #2 is checked
    await test.step('Radio Button Example', async () => {
      const radioButton2 = page.locator(SELECTORS.radioButton2);
      await radioButton2.check();
      await expect.soft(radioButton2, 'Verify Radio button #2 is checked').toBeChecked();
    });

  // create a test step with the name 'Suggession Class Example'
    // Fill the input with "Bulgaria"
    // Click on the first auto complete suggestion
    // Verify the input value is "Bulgaria"
  await test.step('Suggession Class Example', async () => {
    const autocomplete = page.locator(SELECTORS.autocomplete);
    await autocomplete.fill('Bulgaria');
    await expect.soft(autocomplete, 'Verify the input value is "Bulgaria"').toHaveValue('Bulgaria');
  });

  // create a test step with the name 'Dropdown Example'
    // Select option #2 from the dropdown
    // Verify the selected option is "option2"  
  await test.step('Dropdown Example', async () => {
    const dropdown = page.locator(SELECTORS.dropdown);
    await dropdown.selectOption('option2');
    await expect.soft(dropdown, 'Verify the selected option is "option2"').toHaveValue('option2');
  });

  // create a test step with the name 'Checkbox Example'
    // Check checkbox #3
    // Verify checkbox #3 is checked
  await test.step('Checkbox Example', async () => {
    const checkbox3 = page.locator(SELECTORS.checkbox3);
    await checkbox3.check();
    await expect.soft(checkbox3, 'Verify checkbox #3 is checked').toBeChecked();
  });
  

  // create a test step with the name 'Element Displayed Example'
    // Click on the "Hide" button
    // Verify the input element is now hidden
  await test.step('Element Displayed Example', async () => {
    await page.locator(SELECTORS.hideButton).click();
    await expect.soft(page.locator(SELECTORS.displayedText), 'Verify the input element is now hidden').toBeHidden();
  });

  // create a test step with the name 'Mouse Hover Example'
    // Hover over the "Mouse Hover" element
    // Verify the "Top" link is now visible
  await test.step('Mouse Hover Example', async () => {
    await page.locator(SELECTORS.mouseHover).hover();
    // I don't know why the test is failing if i use the locator(SELECTORS.topLink), but it works if i use the locator('a[href="#top"]')
    await expect.soft(page.locator('a[href="#top"]'), 'Verify the "Top" link is now visible').toBeVisible();
  });


 
});
