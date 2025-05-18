const { test, expect } = require ("@playwright/test");

test("Assertion Testing", async ({page}) => {

    await page.goto("https://demo.nopcommerce.com/register");


    await expect(page).toHaveURL('https://demo.nopcommerce.com/register');

    await expect(page).toHaveTitle('nopCommerce demo store. Register');

    const logoExist = await page.locator('.header-logo');

    await expect(logoExist).toBeVisible();

    const searchStoreBox = await page.locator('#small-searchterms'); /*xpath = //input[@id='small-searchterms']*/

    await expect(searchStoreBox).toBeEnabled();

    const radioButton = await page.locator("//input[@id='gender-male']");

    await radioButton.click();

    await expect(radioButton).toBeChecked();

    const newsLetterCheckbox = await page.locator('#Newsletter');

    await expect(newsLetterCheckbox).toBeChecked();

    const registerButton = await page.locator('#register-button');

    await expect(registerButton).toHaveAttribute('type', 'submit');

    const registerText = await page.locator(".page-title h1");

    await expect(registerText).toHaveText('Register');

    await expect(registerText).toContainText('Regis');

    const emailField = await page.locator('#Email');

    await emailField.fill("test.123@gmail.com");

    await expect(emailField).toHaveValue("test.123@gmail.com");

   // const monthOptions = await page.locator("select[placeholder='Month'] option");

   // await expect(monthOptions).toHaveCount(13);
   

})