import{test} from '../Base/BaseFixture.ts'
import {v4 as uuidv4} from 'uuid'
import { deliveryDetails as useraddress } from '../data/deliveryDetails'
import { creditCarddetails } from '../data/creditCarddetails'


test("New user full end to end journey",async({page,pagemanager})=>{


    await pagemanager.productsPage().visit()
    await pagemanager.productsPage().sortByCheapest()
    await pagemanager.productsPage().addProductsToBasket(3)
    await pagemanager.navigationPage().visitNavigationPage()
    await pagemanager.navigationPage().validateCheckoutCounter("3")
    await pagemanager.checkoutPage().removeCheapestItem()

    await pagemanager.checkoutPage().continueToCheckout()

    await pagemanager.loginPage().register()

    const emailID=uuidv4()
    const email=emailID+"@testmail.com"
    const passWord=uuidv4()
    await pagemanager.registerPage().signup(email,passWord)

    await pagemanager.deliveryPage().filldetails(useraddress)
    await pagemanager.deliveryPage().savedetails()

    await pagemanager.deliveryPage().continuetoPayement()

    await pagemanager.paymentPage().activateDiscount()

    await pagemanager.paymentPage().makePayment(creditCarddetails)


   
})