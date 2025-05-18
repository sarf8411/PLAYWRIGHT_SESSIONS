const {test, expect} = require ('@playwright/test');

test.skip("Keyboard Actions", async ({page}) =>{

    await page.goto('https://testautomationpractice.blogspot.com/');

    //const searchText = await page.locator("input[placeholder='Search']");

   // await page.keyboard.type("#Wikipedia1_wikipedia-search-input", 'Hello World');
    await page.click('#Wikipedia1_wikipedia-search-input');
    await page.keyboard.type('Playwright');
    await page.keyboard.press('Enter');

    await page.waitForTimeout(3000);

});

test.skip('Keyboard navigation example', async ({ page }) => {
        await page.goto('https://example.com');
      
        await page.click('input[name="email"]');
        await page.keyboard.type('test@example.com');
        await page.keyboard.press('Tab'); // Move to next field
        await page.keyboard.type('123456');
      
        await page.keyboard.press('Enter'); // Submit form

        await page.waitForTimeout(3000);


})

test('Keyboard Actions...', async({page})=>{

    await page.goto('https://gotranscript.com/text-compare');

    const textBox = await page.locator("//textarea[@placeholder='Paste one version of the text here.']");

    await textBox.fill("Welcome to Keyboard Action...............................");

    await page.keyboard.press('Control+A');

    await page.keyboard.press('Control+C');

    await page.keyboard.down('Tab');
    await page.keyboard.up('Tab');

    await page.keyboard.press('Control+V')

    await page.waitForTimeout(5000);

    await page.click("//button[@id='recaptcha']");

    await page.waitForTimeout(5000);





})