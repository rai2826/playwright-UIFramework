import { Locator, Page, expect } from "@playwright/test"

export class NavigationPage{
    readonly page: Page
    readonly basketCounter: Locator
    readonly checkoutLink: Locator

    constructor(page: Page){
    this.page=page
    this.basketCounter=page.locator('[data-qa="header-basket-count"]')
    this.checkoutLink=page.getByRole('link',{name:"Checkout"})
    }


    validateCheckoutCounter=async(index:string)=>{

        expect(this.basketCounter).toHaveText(index)

    }

    visitNavigationPage=async()=>{
        await this.checkoutLink.waitFor()
        await this.checkoutLink.click()
    }
}