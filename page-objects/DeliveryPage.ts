import { expect, Locator, Page } from "@playwright/test";
import exp from "constants";

export class DeliveryPage{

    readonly page: Page
    readonly firstName: Locator
    readonly lastName: Locator
    readonly street: Locator
    readonly postcode: Locator
    readonly city: Locator
    readonly country: Locator
    readonly saveaddressbutton: Locator
    readonly savedaddresscontainer:Locator
    readonly savedaddressfirstname:Locator
    readonly savedaddresslastname:Locator
    readonly savedaddressstreet: Locator
    readonly savedaddresscity: Locator
    readonly savedaddresscountry: Locator
    readonly continuetopaymentbutton: Locator



    constructor(page:Page){

        this.page=page
        this.firstName=page.getByPlaceholder("First name")
        this.lastName=page.getByPlaceholder("Last name")
        this.street=page.getByPlaceholder("Street")
        this.postcode=page.getByPlaceholder("Post code")
        this.city=page.getByPlaceholder("City")
        this.country=page.locator('[data-qa="country-dropdown"]')
        this.saveaddressbutton=page.locator('[data-qa="save-address-button"]')
        this.savedaddresscontainer=page.locator('[data-qa="saved-address-container"]')
        this.savedaddressfirstname=page.locator('[data-qa="saved-address-container"]').locator('[data-qa="saved-address-firstName"]')
        this.savedaddresslastname=page.locator('[data-qa="saved-address-container"]').locator('[data-qa="saved-address-lastName"]')
        this.savedaddressstreet=page.locator('[data-qa="saved-address-container"]').locator('[data-qa="saved-address-street"]')
        this.savedaddresscity=page.locator('[data-qa="saved-address-container"]').locator('[data-qa="saved-address-city"]')
        this.savedaddresscountry=page.locator('[data-qa="saved-address-container"]').locator('[data-qa="saved-address-country"]')
        this.continuetopaymentbutton=page.getByRole('button',{name:"Continue to payment"})





    }

    filldetails=async(useraddress)=>{
        await this.firstName.waitFor()
        await this.firstName.fill(useraddress.firstname)
        await this.lastName.fill(useraddress.lastname)
        await this.street.fill(useraddress.street)
        await this.postcode.fill(useraddress.postcode)
        await this.city.fill(useraddress.city)
        await this.country.selectOption(useraddress.country)

    }

    savedetails=async()=>{
        const addresscountbeforesaving=await this.savedaddresscontainer.count()
        await this.saveaddressbutton.waitFor()
        await this.saveaddressbutton.click()

        await expect(this.savedaddresscontainer).toHaveCount(addresscountbeforesaving+1)

        await this.savedaddressfirstname.first().waitFor()
        expect(await this.savedaddressfirstname.first().innerText()).toBe(await this.firstName.inputValue())

        await this.savedaddresslastname.first().waitFor()
        expect(await this.savedaddresslastname.first().innerText()).toBe(await this.lastName.inputValue())

        await this.savedaddressstreet.first().waitFor()
        expect(await this.savedaddressstreet.first().innerText()).toBe(await this.street.inputValue())

        await this.savedaddresscity.first().waitFor()
        expect(await this.savedaddresscity.first().innerText()).toBe(await this.city.inputValue())

        

    }

    continuetoPayement=async()=>{

        await this.continuetopaymentbutton.waitFor()
        await this.continuetopaymentbutton.click()
        await this.page.waitForURL(/\/payment/)


    }
}