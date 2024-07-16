import {Locator, Page, expect} from '@playwright/test'

export class CheckoutPage{
    readonly page: Page
    readonly basketCard: Locator
    readonly basketItemPrice: Locator
    readonly removeBasketButton: Locator
    readonly continuetocheckoutButton: Locator

    constructor(page: Page){

        this.page=page
        this.basketCard=page.locator('[data-qa="basket-card"]')
        this.basketItemPrice=page.locator('[data-qa="basket-item-price"]')
        this.removeBasketButton=page.getByRole('button',{name:"Remove from basket"})
        this.continuetocheckoutButton=page.getByRole('button',{name:"Continue to Checkout"})

    }


    removeCheapestItem= async()=>{

        await this.basketCard.first().waitFor()
        const itemsBeforeRemoval= await this.basketCard.count()
        await this.basketItemPrice.first().waitFor()

        const allpricesText=await this.basketItemPrice.allInnerTexts()

        const justNumbers=allpricesText.map((element)=>{
            const withoutDollar=element.replace("$","")
            return parseInt(withoutDollar,10)

        })

        const smallestprice=Math.min(...justNumbers)
        const smallestproceIndex=justNumbers.indexOf(smallestprice)
        await this.removeBasketButton.nth(smallestproceIndex).waitFor()
        await this.removeBasketButton.nth(smallestproceIndex).click()
        await expect(this.basketCard).toHaveCount(itemsBeforeRemoval-1)

     

    }

    continueToCheckout= async()=>{

        await this.continuetocheckoutButton.waitFor()
        await this.continuetocheckoutButton.click()
        await this.page.waitForURL(/\/login/)
    }
}