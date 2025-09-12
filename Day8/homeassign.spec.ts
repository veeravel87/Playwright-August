import test, { expect } from '@playwright/test'

test("Home Assignment-Handling Frame using locator", async ({ page }) => {

    page.on('dialog', alertType => {

        const type = alertType.type()
        console.log(type)
        const msg = alertType.message()
        console.log(msg)
        alertType.accept()


    })
    await page.goto("https://www.w3schools.com/js/tryit.asp?filename=tryjs_confirm")



    await page.frameLocator("//iframe[@id='iframeResult']").locator("//button[text()='Try it']").click()

    // await page.waitForTimeout(5000)
    await expect(page.frameLocator("//iframe[@id='iframeResult']").locator("//p[@id='demo']")).toContainText("OK")





}
)

test.only("Home Assignment-Handling Frame using index", async ({ page }) => {

    page.on('dialog', alertType => {

        const type = alertType.type()
        console.log(type)
        const msg = alertType.message()
        console.log(msg)
        alertType.accept()


    })
    await page.goto("https://www.w3schools.com/js/tryit.asp?filename=tryjs_confirm")


    const frameCount = page.frames()
    console.log(frameCount)

    const frame = frameCount[1]
    await frame.locator("//button[text()='Try it']").click()
    console.log(await frame.locator("//p[@id='demo']").innerText())
    await expect(frame.locator("//p[@id='demo']")).toContainText("OK")





}
)