import {test, expect} from "@playwright/test";
import { LoginPage } from "../pages/LoginPage";

test("Testing POM", async({page}) => {

    const loginTC = new LoginPage(page);
    await loginTC.gotoLoginPage();

    await loginTC.login('pavanol', 'test@123')
})