import { Page } from "@playwright/test";
import { ProductPage } from '../page-objects/ProductPage'
import { NavigationPage } from '../page-objects/NavigationPage'
import { CheckoutPage } from '../page-objects/CheckoutPage'
import { LoginPage } from '../page-objects/LoginPage'
import { RegisterPage } from '../page-objects/RegisterPage'
import { DeliveryPage } from '../page-objects/DeliveryPage'
import { PaymentPage } from '../page-objects/PaymentPage'

export class PageManager{

    readonly page: Page
    readonly productpage: ProductPage
    readonly navigationpage: NavigationPage
    readonly checkoutpage: CheckoutPage
    readonly loginpage: LoginPage
    readonly registerpage: RegisterPage
    readonly deliverypage: DeliveryPage
    readonly paymentpage: PaymentPage

    constructor(page:Page){
        this.page=page
        this.productpage=new ProductPage(this.page)
        this.navigationpage=new NavigationPage(this.page)
        this.checkoutpage=new CheckoutPage(this.page)
        this.loginpage=new LoginPage(this.page)
        this.registerpage=new RegisterPage(this.page)
        this.deliverypage=new DeliveryPage(this.page)
        this.paymentpage=new PaymentPage(this.page)

    }


    productsPage(){
        return this.productpage
    }

    navigationPage(){

        return this.navigationpage
    }

    checkoutPage(){

        return this.checkoutpage
    }

    loginPage(){
        return this.loginpage
    }

    registerPage(){
        return this.registerpage
    }

    deliveryPage(){
        return this.deliverypage
    }

    paymentPage(){
        return this.paymentpage
    }

}