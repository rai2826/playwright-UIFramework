import{test} from '@playwright/test'
import { ProductPage } from '../page-objects/ProductPage'
import { NavigationPage } from '../page-objects/NavigationPage'
import { CheckoutPage } from '../page-objects/CheckoutPage'
import { LoginPage } from '../page-objects/LoginPage'
import { RegisterPage } from '../page-objects/RegisterPage'
import {v4 as uuidv4} from 'uuid'
import { DeliveryPage } from '../page-objects/DeliveryPage'
import { faker } from '@faker-js/faker'
import { deliveryDetails as useraddress } from '../data/deliveryDetails'
import { PaymentPage } from '../page-objects/PaymentPage'
import { creditCarddetails } from '../data/creditCarddetails'

test("New user full end to end journey",async({page})=>{
   
    //Create an instance of productsPage  to call the constructor and and pass the page
    const productsPage=new ProductPage(page)
    const navigationPage=new NavigationPage(page)
    const checkoutPage=new CheckoutPage(page)
    const loginPage=new LoginPage(page)
    const registerPage=new RegisterPage(page)
    const deliveryPage=new DeliveryPage(page)
    const paymentpage=new PaymentPage(page)
    
    
    await productsPage.visit()
    await productsPage.sortByCheapest()
    await productsPage.addProductsToBasket(3)
    await navigationPage.visitNavigationPage()
    await navigationPage.validateCheckoutCounter("3")
    await checkoutPage.removeCheapestItem()

    await checkoutPage.continueToCheckout()

    await loginPage.register()

    const emailID=uuidv4()
    const email=emailID+"@testmail.com"
    const passWord=uuidv4()
    await registerPage.signup(email,passWord)

    //Moved to deliveryDetails.ts in data folder
    //const firstname=faker.person.firstName()
    //const lastname=faker.person.lastName()
    //const street=faker.location.street()
   // const postcode=faker.location.zipCode()
    //const city=faker.location.city()
    //const country=faker.location.country()

    await deliveryPage.filldetails(useraddress)
    await deliveryPage.savedetails()

    await deliveryPage.continuetoPayement()

    await paymentpage.activateDiscount()

    await paymentpage.makePayment(creditCarddetails)


   
})