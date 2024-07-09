import { test, expect } from '@playwright/test';
import {faker} from '@faker-js/faker'

test('registration test',async ({page})=>{
    await page.goto("/")
    const randomFirstName=faker.person.firstName();
    const randomLastName=faker.person.lastName();
    const randomEmail=randomFirstName+randomLastName+"@test.com"
    const randomAddress=faker.location.streetAddress();
    const randomCity =faker.location.city();
    const randomZip=faker.location.zipCode();
    const randomLoginName=randomFirstName+"."+randomLastName
    const randomPassword=randomFirstName+"@"+randomLastName
    const randomPasswordconfirmation=randomFirstName+"@"+randomLastName

    let registrationLink=page.getByText("Login or register")
    await registrationLink.click()
    await page.getByRole("button",{name:"continue"}).click()
    await page.locator("#AccountFrm_firstname").fill(randomFirstName)
    await page.locator("#AccountFrm_lastname").fill(randomLastName)
    await page.locator("#AccountFrm_email").fill(randomEmail)
    await page.locator("#AccountFrm_address_1").fill(randomAddress)
    await page.locator("#AccountFrm_city").fill(randomCity)
    await page.locator("#AccountFrm_zone_id").selectOption("3514")
    //await page.getByRole("list",{name:"zone_id"}).selectOption("Anglesey")
    await page.locator("#AccountFrm_postcode").fill(randomZip)
    await page.locator("#AccountFrm_country_id").selectOption("38")
    await page.locator("#AccountFrm_loginname").fill(randomLoginName)
    await page.locator("#AccountFrm_password").fill(randomPassword)
    await page.locator("#AccountFrm_confirm").fill(randomPasswordconfirmation)
    await page.locator("#AccountFrm_newsletter0").check()
    await page.locator("#AccountFrm_agree").check()
    await page.getByRole("button",{name:"Continue"}).click()
    
    
    const successMessage=page.getByText('Your Account Has Been Created!')
   await expect(successMessage).toHaveText('Your Account Has Been Created!')


})

test("login test",async({page})=>{

    await page.goto("/")
    let registrationLink=page.getByText("Login or register")
    await registrationLink.click()
    await page.locator("#loginFrm_loginname").fill("Brook.Davis")
    await page.locator("#loginFrm_password").fill("Brook@Davis")
    await page.getByRole("button",{name:"Login"}).click()

})