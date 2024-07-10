import { Locator, Page, expect } from "@playwright/test"

export class ProductPage{
 readonly page: Page
 readonly addButton: Locator
 

    constructor(page: Page){
     this.page=page
     this.addButton=page.locator('[data-qa="product-button"]')
     
    }

    visit=async()=>{
        await this.page.goto("/")
    }

    addProductsToBasket=async (index: number)=>{
       

        for(let i=0;i<index;i++){
            await this.addButton.nth(i).waitFor()
            expect(this.addButton.nth(i)).toHaveText("Add to Basket")
            await this.addButton.nth(i).click()
            expect(this.addButton.nth(i)).toHaveText("Remove from Basket")

        }
        

    }

    
}