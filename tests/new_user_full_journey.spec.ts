import{test} from '@playwright/test'
import { ProductPage } from '../page-objects/ProductPage'
import { NavigationPage } from '../page-objects/NavigationPage'
import { CheckoutPage } from '../page-objects/CheckoutPage'

test.only("New user full end to end journey",async({page})=>{
   
    //Create an instance of productsPage  to call the constructor and and pass the page
    const productsPage=new ProductPage(page)
    const navigationPage=new NavigationPage(page)
    const checkoutPage=new CheckoutPage(page)
    
    
    await productsPage.visit()
    await productsPage.sortByCheapest()
    await productsPage.addProductsToBasket(3)
    await navigationPage.visitNavigationPage()
    await navigationPage.validateCheckoutCounter("3")
    await checkoutPage.removeCheapestItem()
    
    
})