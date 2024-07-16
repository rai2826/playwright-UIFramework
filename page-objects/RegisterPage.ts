import { Locator, Page } from "@playwright/test";


export class RegisterPage{

    readonly page: Page
    readonly emailText: Locator
    readonly passwordText: Locator
    readonly registerButton: Locator

    constructor(page:Page){
        this.page=page
        this.emailText=page.getByPlaceholder("E-Mail")
        this.passwordText=page.getByPlaceholder("Password")
        this.registerButton=page.getByRole("button",{name:"Register"})

    }

    signup=async(email: string,passWord: string)=>{

        await this.registerButton.waitFor()
        //const emailID=uuidv4()
        //const email=emailID+"@testmail.com"
        //const passWord=uuidv4()
        await this.emailText.fill(email)
        await this.passwordText.fill(passWord)
        await this.registerButton.click()
    }
}