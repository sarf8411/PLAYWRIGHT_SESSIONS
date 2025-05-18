const {test, expect} = require('@playwright/test');

test('Date Picker testing', async ({page}) => {

    await page.goto('https://testautomationpractice.blogspot.com/')

   await page.fill("#datepicker", '05/17/2025');

    //await page.waitForTimeout(3000);


    //await page.locator("#txtDate").fill('15/05/2025');

        await page.waitForTimeout(5000);
})