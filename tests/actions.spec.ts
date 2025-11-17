import { test } from '@playwright/test';

test ('Actions Example', async ({page}) => {
    await page.goto("https://st2016.inv.bg/login");

    //Text input
    // await page.locator('#loginusername').fill('Username');

    //Checkbox and Radio buttons
    // await page.locator('#persistant').check();

    // await page.getByRole('radio', { name: 'English'}).check();

    // Select option from Dropdown
    await page.locator('@selectLanguage').selectOption('Afrikans');

    // Multiple Option Dropdown Selection
    await page.locator('Choose multiple colour').selectOption(['red', 'blue', 'green']);


    // Mouse clicks
        //Generic click
    await page.locator('loginsubmit').click();

        //Double click
    await page.locator('loginsubmit').dblclick();

        // Right Click
    await page.locator('#loginusername').click({ button: 'right'});

        // Shift + Click
    await page.locator('loginsubmit').click({modifiers: ['Shift']});

        // Ctrl + Click
    await page.locator('loginsubmit').click({modifiers: ['ControlOrMeta']});

        // Click at specific position (x=0 and y=0 means top left corner)
    await page.locator('.login-logo-container--login__img').dblclick({position: { x: 0, y: 0}});

    //focus on element
    await page.locator('.selenium-forgoten-page').focus();

    //Hover element -> going to an element to start being visible
    await page.locator('.selenium-forgoten-page').hover();
    await page.getByText('Автоматизирано Тестване с Playwright и TypeScript').click();

    // Drag element
    await page.locator('#newpass2').dragTo(page.locator('#loginusername'));

    // Keyboard inputs
    await page.locator('#loginusername').press('Enter');

});