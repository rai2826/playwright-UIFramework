import {expect, test} from '@playwright/test'

test.skip("navigating to test app",async({page})=>{

await page.goto("/")
//await page.pause()

const firstAddToBasket=page.locator('[data-qa="product-button"]').first()
await firstAddToBasket.waitFor()
await expect(firstAddToBasket).toHaveText("Add to Basket")
await firstAddToBasket.click()
await expect(firstAddToBasket).toHaveText("Remove from Basket")



})