import {expect, test} from '@playwright/test'

test("navigating to test app",async({page})=>{

await page.goto("/",{waitUntil:"domcontentloaded"})
//await page.pause()





})