import { test } from '@playwright/test';
import { PracticePage } from '../Homework-13/practicePage';

test(`Lesson 13 Homework - POM Version`, async ({ page }) => {
  const practicePage = new PracticePage(page);

  await test.step('Navigate to Automation Practice page', async () => {
    await practicePage.goto();
    await practicePage.verifyPageTitle();
  });

  await test.step('Radio Button Example', async () => {
    await practicePage.selectRadioButton2();
  });

  await test.step('Suggession Class Example', async () => {
    await practicePage.fillSuggestionInput('Bulgaria');
  });

  await test.step('Dropdown Example', async () => {
    await practicePage.selectDropdownOption2();
  });

  await test.step('Checkbox Example', async () => {
    await practicePage.checkCheckbox3();
  });

  await test.step('Element Displayed Example', async () => {
    await practicePage.hideElement();
  });

  await test.step('Mouse Hover Example', async () => {
    await practicePage.hoverMouse();
  });
});
