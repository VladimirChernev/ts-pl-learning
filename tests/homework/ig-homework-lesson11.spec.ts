// use the code gen tool in VScode Testing tab to generate the following scenario:
// go to https://pragmatic.bg/
// hover on "Курсове"
// click on "Автоматизирано Тестване с Playwright и TypeScript"
// check the name of lecture 12

// afterwords you will have a new file in project/tests folder. Copy its contents into this file and remove the old one.


import { test, expect } from '@playwright/test';

test('Navigate to Pragmatic AT-PT Course', async ({ page }) => {
    await page.goto('https://pragmatic.bg');

  //verify that we are on the right homepage
  const logoLink = page.locator('#logo').getByRole('link', { name: 'Pragmatic LLC' });
  await expect(logoLink).toBeVisible();
  
  //locate the Menu item and hover over
  await page.getByRole('link', { name: 'Курсове', exact: true }).hover();
  await page.waitForTimeout(500);
  await page.locator('#menu-item-9220').click();
 
  //click on the AT-PT page, verify that you are on the right page and extract the text of the 12th lecture
  await page.waitForTimeout(3000)
  const pageHeading = page.locator('h3').getByRole('heading', { name: 'Автоматизирано Тестване с' })
  await expect(pageHeading).toBeVisible
  const courseImage = page.locator('#div.dt-sc-course-image').getByRole('img', { name: 'Автоматизирано Тестване с' })
  await expect(courseImage).toBeVisible
  const lessonListTitle = page.locator('h4.dt-lesson-title').getByRole('heading', { name: 'Lessons' })
  await expect(lessonListTitle).toBeVisible

  const actualLessonTitle = await page.locator('//*[contains(@class,"lesson-title")]').nth(12).textContent();
  console.log(actualLessonTitle)

  });