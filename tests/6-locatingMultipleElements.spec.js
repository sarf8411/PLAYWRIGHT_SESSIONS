const {test, expect, chromium} = require('@playwright/test');

test("Testing Multiple Locator elements", async({page}) =>{

    const browser = await chromium.launch({headless: false});

    await page.goto("https://demoblaze.com/index.html");

    //capturing the all links from the Home page
    const links = await page.$$("a");

    // // //console.log(link);

    for(const link of links){

    const linkText = await link.textContent();
    console.log(linkText);

    }

    //capturing the all product names from the Home page

    await page.waitForSelector("//div[@id='tbodyid']//div//h4/a");

    const products = await page.$$("//div[@id='tbodyid']//div//h4/a");

    for(const product of products ){

        const productText = await product.textContent();
        console.log(productText);
    }



});
