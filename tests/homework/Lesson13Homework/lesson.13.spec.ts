import { test } from '@playwright/test';
import { StepFactory } from './steps/step.factory';

test(`Lesson 13 Homework`, async ({ page }) => {
  const steps = StepFactory.getPracticeSteps(page);

  await test.step('Navigate to Automation Practice page', async () => {
    await steps.navigateToPracticePage();
  });

  await test.step('Radio Button Example', async () => {
    await steps.radioButtonExample();
  });

  await test.step('Suggession Class Example', async () => {
    await steps.suggessionClassExample();
  });

  await test.step('Dropdown Example', async () => {
    await steps.dropdownExample();
  });

  await test.step('Checkbox Example', async () => {
    await steps.checkboxExample();
  });

  await test.step('Element Displayed Example', async () => {
    await steps.elementDisplayedExample();
  });

  await test.step('Mouse Hover Example', async () => {
    await steps.mouseHoverExample();
  });
});