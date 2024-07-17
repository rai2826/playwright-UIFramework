import { test } from '@playwright/test'
import { MyAccountPage } from '../page-objects/MyAccountPage'
import { getLoginToken } from '../api-calls/getLoginToken.js'

test("my account login using cookies injection",async({page})=>{

    const loginToken=await getLoginToken()
    console.warn({loginToken})
   
    const myaccount=new MyAccountPage(page)
    await myaccount.visit()
})