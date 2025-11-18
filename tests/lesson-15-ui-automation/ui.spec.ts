import { test, expect } from '@playwright/test';

test(`Login with valid creds`, { tag: ['@ui'] }, async ({ page }) => {
  await page.goto('https://st2016.inv.bg/');
  await expect(page).toHaveTitle('Вход - QA Ground');

  await page.locator('#loginusername').fill('karamfilovs@gmail.com');
  await page.locator('#loginpassword').fill('111111');
  await expect(page.getByRole('radio', { name: 'Български'})).toBeChecked();

  await page.locator('#loginsubmit').click();
  await expect(page).toHaveTitle('Система за фактуриране - QA Ground');
});

test(`Login with wrong creds`, { tag: ['@ui'] }, async ({ page }) => {
  await page.goto('https://st2016.inv.bg/');
  await expect(page).toHaveTitle('Вход - QA Ground');

  await page.locator('#loginusername').fill('karamfilovs@gmail.com');
  await page.locator('#loginpassword').fill('wrongPassword');
  await expect(page.getByRole('radio', { name: 'Български' })).toBeChecked();

  await page.locator('#loginsubmit').click();
  await expect(page).toHaveTitle('Вход - QA Ground');
  await expect(page.locator(`#error`)).toContainText('Грешно потребителско име или парола. Моля, опитайте отново.');
});

test(`Login with blank creds`, { tag: ['@ui'] }, async ({ page }) => {
  await page.goto('https://st2016.inv.bg/');
  await expect(page).toHaveTitle('Вход - QA Ground');

  await page.locator('#loginusername').fill('');
  await page.locator('#loginpassword').fill('');
  await expect(page.getByRole('radio', { name: 'Български' })).toBeChecked();

  await page.locator('#loginsubmit').click();
  await expect(page).toHaveTitle('Вход - QA Ground');
  await expect(page.locator(`#error`)).toContainText('Моля, попълнете вашия email');
});

test(`Login & Logout`, { tag: ['@ui'] }, async ({ page }) => {
  await page.goto('https://st2016.inv.bg/');
  await expect(page).toHaveTitle('Вход - QA Ground');

  await page.locator('#loginusername').fill('karamfilovs@gmail.com');
  await page.locator('#loginpassword').fill('111111');
  await expect(page.getByRole('radio', { name: 'Български' })).toBeChecked();

//  await page.locator('#loginsubmit').click();
  await page.getByRole('button', { name: 'Вход' }).click();
  await expect(page).toHaveTitle('Система за фактуриране - QA Ground');

  await page.locator(`#userpanel`).click();
  await page.getByRole('link', { name: 'Изход' }).click();
  await expect(page).toHaveTitle('Вход - QA Ground');
  await expect(page.locator(`#okmsg`)).toContainText(`Вие излязохте от акаунта си.`);
});