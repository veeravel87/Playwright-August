import test, { expect } from '@playwright/test'
import { execPath } from 'process'

test("Handling Frames", async ({ page }) => {
    page.goto("https://leafground.com/frame.xhtml")
    await page.waitForTimeout(4000)
    const frameCount = page.frames()
    console.log(frameCount)
    const frame = frameCount[1]

    await frame.locator("//button[@id='Click']").first().click()
    await page.waitForTimeout(4000)
    console.log(await frame.locator("//button[@id='Click']").innerText())
    await expect(frame.locator("//button[@id='Click']")).toContainText("Hurray! You Clicked Me.")
    const frameNested = frameCount[4]

    await frameNested.locator("//button[@id='Click']").click()
    console.log(await frameNested.locator("//button[@id='Click']").innerText())
    await expect(frameNested.locator("//button[@id='Click']")).toContainText("Hurray! You Clicked Me.")

}
)