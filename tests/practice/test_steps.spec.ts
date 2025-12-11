import { test, expect } from "@playwright/test";

    test("Test steps", async ({ page }) => {

        await test.step("Go to PM Tool login page", async () => {
            await page.goto("https://tredgate.com/pmtool");
            await page.locator("#username").fill("playwright_jaro24");
            await page.locator("#password").fill("Playwright!2024");
            await page.locator('[type="submit"]').click();
        });

   });

