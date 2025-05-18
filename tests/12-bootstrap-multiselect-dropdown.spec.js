const {test, expect} = require("@playwright/test");

test('Dropdown testing', async({page}) =>{

    await page.goto("https://www.jquery-az.com/boots/demo.php?ex=63.0_2");

    await page.locator('.multiselect').click();

    // const options = await page.locator('ul > li label input'); //1st option

    // await expect(options).toHaveCount(11);

    // const options = await page.$$('ul > li label input'); //2nd option

    // await expect(options.length).toBe(11);

    const options = await page.$$('ul > li label'); //3rd option

    for(let e of options)
    {
        const value = await e.textContent();
        console.log("Values is:", value);
    }

});