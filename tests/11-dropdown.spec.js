const {test, expect} = require("@playwright/test");

test('Dropdown testing', async({page}) =>{

    await page.goto("https://testautomationpractice.blogspot.com/");

    // await page.locator('#country').selectOption({label: 'India'});//label & visible text

    // await page.waitForTimeout(5000);

    // await page.locator('#country').selectOption('Germany'); // by visible text

    // await page.waitForTimeout(5000);

    // await page.locator('#country').selectOption('usa');//by value

    // await page.waitForTimeout(5000);

    // await page.locator('#country').selectOption({index: 1});

    // await page.waitForTimeout(5000);

    // await page.selectOption("#country", 'Japan');

   // await page.waitForTimeout(5000);

//    const options = await page.locator("#country option");//No. of options in dropdown Approach 1

//    await expect(options).toHaveCount(10);

    // const options1 = await page.$$("#country option");//No. of options in dropdown Approach 2

    // console.log(options1.length);

    // await expect(options1.length).toBe(10);

    //const content = await page.locator("#country").textContent(); //check presence of value in dropdown Approach 1

    //await expect(content.includes('India')).toBeTruthy();

    //console.log(content);

    //check presence of value in dropdown Approach 2

    // const options = await page.$$('#country option');

    // let status = false;

    // for(const option of options)
    // {
    //     console.log(await option.textContent());
    // }

////////Multi Select Drop-down Option selection////////

await page.locator("#colors").selectOption(['Red', 'Yellow', 'Blue']);

await page.waitForTimeout(5000);
 

});

