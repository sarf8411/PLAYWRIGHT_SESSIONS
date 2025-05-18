const { test, expect } = require("@playwright/test");

test("Home Page", async ({ page }) => {
  await page.goto("https://www.demoblaze.com/index.html");

  const pageTitle = await page.title();

  console.log("Title of the page is: ", pageTitle);

  await expect(page).toHaveTitle("STORE");

  const pageURL = await page.url();
  console.log("URL of the page is: ", pageURL);

  await expect(page).toHaveURL("https://www.demoblaze.com/index.html");

  await page.close();
});
