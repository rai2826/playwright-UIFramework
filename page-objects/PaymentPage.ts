import { expect, Locator, Page } from "@playwright/test";

export class PaymentPage{
    readonly page: Page
    readonly discountcode: Locator
    readonly discountcodeinputbox: Locator
    readonly submitdiscountbutton: Locator
    readonly discountmessagetext: Locator
    readonly totalprice: Locator
    readonly discountprice: Locator
    readonly ccOwnerName: Locator
    readonly ccNumber: Locator
    readonly ccValidity: Locator
    readonly ccCVC: Locator
    readonly payButton:Locator


    constructor(page:Page){

        this.page=page
        this.discountcode=page.frameLocator('[data-qa="active-discount-container"]').locator('[data-qa="discount-code"]')
        this.discountcodeinputbox=page.getByPlaceholder("Discount code")
        this.submitdiscountbutton=page.getByRole("button",{name:"Submit discount"})
        this.discountmessagetext=page.locator('[data-qa="discount-active-message"]')
        this.totalprice=page.locator('[data-qa="total-value"]')
        this.discountprice=page.locator('[data-qa="total-with-discount-value"]')
        this.ccOwnerName=page.getByPlaceholder("Credit card owner")
        this.ccNumber=page.getByPlaceholder("Credit card number")
        this.ccValidity=page.getByPlaceholder("Valid until")
        this.ccCVC=page.getByPlaceholder("Credit card CVC")
        this.payButton=page.getByRole("button",{name:"Pay"})

    }

    activateDiscount=async()=>{

        await this.discountcode.waitFor()

       const dcode= await this.discountcode.innerText()

       //Option 1 using fill()
       await this.discountcodeinputbox.fill(dcode)
       await expect (this.discountcodeinputbox).toHaveValue(dcode)

       //Option 2 using slow typing
       //await this.discountcodeinputbox.focus()
       //await this.discountcodeinputbox.pressSequentially(dcode,{delay:1000})
       
       expect(await this.discountmessagetext.isHidden())
       await this.submitdiscountbutton.waitFor()
       await this.submitdiscountbutton.click()

       await this.discountmessagetext.waitFor()
        expect(await this.discountmessagetext.innerText()).toBe("Discount activated!")

        const tprice=await this.totalprice.innerText()
        const dprice=await this.discountprice.innerText()


        //Remove $ value from the total price and discount price
        const numbertprice=parseInt(tprice.replace("$",''))
        const numberdprice=parseInt(dprice.replace("$",''))

        //Validate that discount value is less than the total value
        expect(numberdprice).toBeLessThan(numbertprice)

        

    }

    makePayment=async(creditcarddetails: { CCOwnerName: string; CCNumber: string; validuntil: string; ccCVV: string; })=>{
     
        await this.ccOwnerName.fill(creditcarddetails.CCOwnerName)
        await this.ccNumber.fill(creditcarddetails.CCNumber)
        await this.ccValidity.fill(creditcarddetails.validuntil)
        await this.ccCVC.fill(creditcarddetails.ccCVV)
        await this.payButton.waitFor()
        await this.payButton.click()
        await this.page.waitForURL(`${process.env.URL}thank-you`)

    }


}