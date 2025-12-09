import { test } from "@playwright/test";
import { DefaultDeserializer } from "v8";

test("Prvni challenge", async ({ page }) => {

    await page.goto("https://automationteststore.com/");
    await page.locator("#username").fill("playwright_jaro24");
    await page.locator("#password").fill("Playwright!2024");
    await page.locator('[type="submit"]').click();
    await page.locator("#Projects").click();
    

});

