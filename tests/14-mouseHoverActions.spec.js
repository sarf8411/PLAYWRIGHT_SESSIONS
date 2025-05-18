
const {test, expect} = require ("@playwright/test");

test.skip("Mouse Hover Actions", async({page}) => {

    await page.goto('https://demo.opencart.com/');

//    const desktop =  await page.locator("//a[normalize-space()='Desktops']");

//    const macbook = await page.locator("//a[normalize-space()='Mac (1)']");

const desktops = page.getByRole('link', { name: 'Desktops' });
const mac = page.getByRole('link', { name: 'Mac (1)' });

   await desktops.hover();
   await mac.waitFor({ state: 'visible' });
   await macbook.hover();

})

test.skip("Mouse Right click Actions", async({page}) => {

    await page.goto('https://swisnl.github.io/jQuery-contextMenu/demo.html');

    const button = await page.locator("//span[@class='context-menu-one btn btn-neutral']");

    await button.click({button : 'right'});

    await page.waitForTimeout(5000);
})

test.skip("Mouse double click Actions", async({page}) => {

    await page.goto('https://testautomationpractice.blogspot.com/');

    const copyDoubleClick = await page.locator("//button[normalize-space()='Copy Text']");

    await copyDoubleClick.dblclick();

    const f2 = await page.locator('#field2');

    await expect(f2).toHaveValue('Hello World!')
})

test("Mouse drag and drops", async({page}) => {

    await page.goto('http://www.dhtmlgoodies.com/scripts/drag-drop-custom/demo-drag-drop-3.html');

    const rome = await page.locator('#box6'); //source element

    const italy = await page.locator('#box106'); //target element

    //Approach-1

    // await rome.hover();
    // await page.mouse.down();

    // await italy.hover();
    // await page.mouse.up();

    //Approach-2

    await rome.dragTo(italy);

    await page.waitForTimeout(2000);
})