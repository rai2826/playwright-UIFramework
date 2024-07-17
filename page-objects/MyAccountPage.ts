import { Page } from "@playwright/test";

export class MyAccountPage{
    readonly page : Page

    constructor(page: Page){

        this.page=page
    }

    visit=async()=>{
        await this.page.goto("/my-account")
        await this.page.pause()
    }

}