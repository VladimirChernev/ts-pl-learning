
// use the code gen tool in VScode Testing tab to generate the following scenario:
// go to https://pragmatic.bg/
// hover on "Курсове"
// click on "Автоматизирано Тестване с Playwright и TypeScript"
// check the name of lecture 12

// afterwords you will have a new file in project/tests folder. Copy its contents into this file and remove the old one.

import { test, expect } from '@playwright/test';

test('Check lecture 12 name in Playwright course', async ({ page }) => {
  
  await page.goto('https://pragmatic.bg/');
  await page.getByRole('link', { name: 'Курсове' }).hover();
  await page.locator('#menu-item-9220 > a').click();
  await page.waitForLoadState('networkidle');
  const lecture12h2 = page.locator('li article.dt_lessons').nth(11).locator('h2');
  await expect(lecture12h2).toBeVisible();
  const lecture12Name = await lecture12h2.textContent();
  
  console.log('Lecture 12 name:', lecture12Name?.trim());
  
 
});