const {test, expect} = require('@playwright/test');

test("Upload Single FIles", async({page}) => {

await page.goto('https://testautomationpractice.blogspot.com/');

//await page.waitForSelector("#singleFileInput");
//await page.locator("#singleFileInput").click();

//await page.locator("#singleFileInput").setInputFiles('tests\\Simple_Template1.pdf');
//or
await page.setInputFiles('input[type="file"]', 'tests\\Simple_Template1.pdf');

await page.waitForTimeout(5000);


})

test("Upload Multiple FIles", async({page}) => {

    await page.goto('https://davidwalsh.name/demo/multiple-file-upload.php');
    
      await page.locator('#filesToUpload')
                        .setInputFiles(['tests/Simple_Template1.pdf', 'tests/Simple_Template2.pdf'])
    
    await page.waitForTimeout(3000);
    
    
    })