const {test, expect} = require ("@playwright/test");

test("Soft Assertions", async ({page}) => {


    await page.goto('https://demoblaze.com/index.html');
    
    //Hard Assertions

    // await expect(page).toHaveTitle('STORE12');
    // await expect(page).toHaveURL('https://demoblaze.com/index.html');
    // await expect(page.locator('#nava')).toBeVisible();

    //Soft Assertions

    await expect.soft(page).toHaveTitle('STORE12');
    await expect.soft(page).toHaveURL('https://demoblaze.com/index.html');
    await expect.soft(page.locator('#nava')).toBeVisible();

    // const allframes = await page.frames();

    // console.log("No of frames:", allframes.length);



})