import { test } from '@playwright/test';

test ('Location Example', async ({page}) => {
    await page.goto("https://st2016.inv.bg/login");

    await page.pause();

    //find by ID
    // await page.locator('#loginusername').fill('Username');

    //find by Xpath
    // await page.locator('//*[@id="loginusername"]').fill('Username');
    
    //find by Attribute - Name 
    // await page.locator('[name="email"]').fill('Username'); //CSS
    // await page.locator('//*[@name="email"]').fill('Username'); //Xpath

    //find by Attribute - tabindex
    // await page.locator('[tabindex="1"]').fill('Username'); // CSS
    // await page.locator('//*[@tabindex="1"]').fill('Username'); //Xpath

    // find by Class
    // await page.locator('.login-form.selenium-login-form').locator('[name="email"]').fill('Username');
    
    // find by Text
    // await page.locator('text="Забравеба парола?"').click(); //CSS
    // await page.locator('//*[contains(text(), Забравеба парола?")]').click(); // Xpath
    
    // combination example
    // await page.locator('.operator').filter({hasText: 'Чат с оператор'}).click();
    
    /*
    Playwright Build locators
    */
    
    // await page.pause();
    //Get By Role
    // await page.getByRole('button', {name: 'Вход'}).click();

    //find by Text
    // await page.getByText('запомни входа на този компютър').click();

    // find by Label
    // await page.getByLabel('EN').click();

    //find by test id
    // await page.getByTestId('CheckBox test').click();
    
    // find by Placeholder
    // await page.getByPlaceholder('Search IMDb').fill('Predator');

    //find by Title
    // await page.getByTitle('English - Wikipedia - The Free Encycyclopedia').click();
    
    // find by Alt text
    // await page.getByAltText('Get Certified').click();

    /*
    Working with multiple elements
    */

    // count all elements found by locator
    await page.pause();
    console.log(await page.locator('//*[contains(@class, "selenium"').count());

    ///find first in a list of locators
    await page.locator('//*[contains(@class, "selenium")]').first().click();

});