const{test, expect} = require('@playwright/test')

test('Test Locator', async({page}) => {

    await page.goto("https://naveenautomationlabs.com/opencart/index.php?route=account/register");

   // await page.fill('#input-firstname', "Sarf");

    //await fname.fill('Sarfaraj');

    //await page.locator('#input-firstname').fill("Hello");
    await page.locator('id=input-firstname').fill("Hello...!!!");
    await page.locator('id=input-lastname').fill("Sarfaraj");

    //const logo = page.locator('.img-responsive');
    const logo = page.locator("//img[@title='naveenopencart']");

    const logoExist = await logo.isEnabled();

    console.log(logoExist);

    const registerText = page.locator('text=Register Account');
    const textExist = await registerText.isEnabled();
    console.log(textExist);

    const continueBtn = page.locator('text=Continue');
    const BtnExists = await continueBtn.isEnabled();
    console.log(BtnExists);


    const forgotText = page.locator("//a[normalize-space()='Forgotten Password']");
    // const textForgotton = await forgotText.isEnabled();
    // console.log(textForgotton);

    await forgotText.click();


    //await new Promise(() => {});

})