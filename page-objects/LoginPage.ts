import { Locator, Page } from "@playwright/test";

export class LoginPage{

    readonly page: Page
    readonly emailinputText: Locator
    readonly passwordinputText: Locator
    readonly loginButton: Locator
    readonly registerButton: Locator


    constructor(page: Page){

        this.page=page
        this.registerButton=page.getByRole('button',{name:"Register"})

    }

    register=async ()=>{
        await this.registerButton.waitFor()
        await this.registerButton.click()
        await this.page.waitForURL(/\/signup/)


    }
}