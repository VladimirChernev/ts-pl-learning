import { test, expect } from '@playwright/test';

test('Check name of lecture 12 in Playwright course', async ({ page }) => {
  await page.goto('https://pragmatic.bg/');
  await page.hover('text=Курсове');
  await page.click('text=Автоматизирано Тестване с Playwright и TypeScript');

  
  await page.waitForSelector('h1, h2, .course-title', { timeout: 10000 });
  await page.mouse.wheel(0, 1000);
  await page.waitForTimeout(2000);
  
  const lecture12 = page.locator('text=Основи на тестването с Playwright').first();

  const count = await lecture12.count();
  console.log('Found lecture elements:', count);

  await expect(lecture12).toBeVisible({ timeout: 10000 });

  const lecture12Name = await lecture12.textContent();
  console.log('Lecture 12 name:', lecture12Name);
});
