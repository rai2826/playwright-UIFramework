import{test} from '@playwright/test'
import {v4 as uuidv4} from 'uuid'
import { deliveryDetails as useraddress } from '../data/deliveryDetails'
import { creditCarddetails } from '../data/creditCarddetails'
import { PageManager } from '../page-objects/pageManager'

test("New user full end to end journey",async({page})=>{
   
    //Create an instance of productsPageManager  to call the constructor and and pass the page
    const pm=new PageManager(page)

    await pm.productsPage().visit()
    await pm.productsPage().sortByCheapest()
    await pm.productsPage().addProductsToBasket(3)
    await pm.navigationPage().visitNavigationPage()
    await pm.navigationPage().validateCheckoutCounter("3")
    await pm.checkoutPage().removeCheapestItem()

    await pm.checkoutPage().continueToCheckout()

    await pm.loginPage().register()

    const emailID=uuidv4()
    const email=emailID+"@testmail.com"
    const passWord=uuidv4()
    await pm.registerPage().signup(email,passWord)

    await pm.deliveryPage().filldetails(useraddress)
    await pm.deliveryPage().savedetails()

    await pm.deliveryPage().continuetoPayement()

    await pm.paymentPage().activateDiscount()

    await pm.paymentPage().makePayment(creditCarddetails)


   
})