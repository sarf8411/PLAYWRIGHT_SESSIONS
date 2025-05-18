import { test, expect, chromium } from '@playwright/test';

test('test', async ({ page }) => {

  const browser = await chromium.launch({headless: false})
  await page.goto('https://demoblaze.com/');
  await page.getByRole('link', { name: 'Log in' }).click();
  await page.locator('#loginusername').click();
  await page.locator('#loginusername').fill('pavanol');
  await page.locator('#loginpassword').click();
  await page.locator('#loginpassword').fill('test@123');
  await page.getByRole('button', { name: 'Log in' }).click();
  await page.getByRole('link', { name: 'Laptops' }).click();
  await page.locator('.card > a').first().click();
  //await page.getByText('Product descriptionSony is so').click();
  //await page.getByRole('heading', { name: '$790 *includes tax' }).click();
  page.once('dialog', dialog => {
    console.log(`Dialog message: ${dialog.message()}`);
    dialog.dismiss().catch(() => {});
  });
  await page.getByRole('link', { name: 'Add to cart' }).click();
  await page.getByRole('link', { name: 'Log out' }).click();
  await page.getByRole('link', { name: 'Log in' }).click();
  await page.locator('#loginusername').click();
  await page.locator('#loginusername').fill('acv');
  await page.locator('#loginpassword').click();
  await page.locator('#loginpassword').fill('dsf');
//   page.once('dialog', dialog => {
//     console.log(`Dialog message: ${dialog.message()}`);
//     dialog.dismiss().catch(() => {});
//   });

page.on('dialog', async (dialog) => {
    console.log('Dialog message:', dialog.message());
    await dialog.accept();  // or dialog.dismiss();
  });

  await page.getByRole('button', { name: 'Log in' }).click();
  await page.getByLabel('Log in').getByText('Close').click();
});     