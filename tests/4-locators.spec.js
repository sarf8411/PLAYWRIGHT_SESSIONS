import { test, expect } from "@playwright/test";

//const { test, expect } = require("@playwright/test");

test("Home Page", async ({ page }) => {
  await page.goto("https://www.demoblaze.com/index.html");

  await page.locator("id=login2").click();

  //await login.click();

  await page.fill("#loginusername", "sarf.8411@gmail.com");

  await page.fill("#loginpassword", "Ambition@786");

  await page.click("[onclick='logIn()']");

  //await page.waitForTimeout(5000);

  const logoutLink = page.locator("#logout2");

  await expect(logoutLink).toBeVisible();

  //console.log(loginBtn);

  //await expect(page.title()).toBe('STORE')

  const title = await page.title();
  expect(title).toBe('STORE');

  await expect(page).toHaveTitle('STORE');




  await page.close();

  //await new Promise(() => {});

});
