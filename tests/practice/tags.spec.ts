import { test, expect } from "@playwright/test";

test.describe("PM Tool Login tests, without tags", () => {

        test.beforeEach(async ({ page }) => {

        console.log("Befor each check");
        await page.goto("https://tredgate.com/pmtool");

            });
  
    test("Successful login", async ({ page }) => {

        await page.locator("#username").fill("playwright_jaro24");
        await page.locator("#password").fill("Playwright!2024");
        await page.locator('[type="submit"]').click();
        await expect(page.locator("#welcome-page-header")).toBeVisible();

   });

    test("Failed login", async ({ page }) => {

        await page.locator("#username").fill("dsfsdfdsfdsf");
        await page.locator("#password").fill("Playwright!2024");
        await page.locator('[type="submit"]').click();
        await expect(page.locator("#welcome-page-header")).not.toBeVisible();
    
    });

        test.skip("Skipped test", async ({ page }) => {

        await page.locator("#username").fill("playwright_jaro24");
        await page.locator("#password").fill("Playwright!2024");
        await page.locator('[type="submit"]').click();
        await expect(page.locator("#welcome-page-header")).toBeVisible();

   });
  
       test("Run only this", async ({ page }) => {

        await page.locator("#username").fill("playwright_jaro24");
        await page.locator("#password").fill("Playwright!2024");
        await page.locator('[type="submit"]').click();
        await expect(page.locator("#welcome-page-header")).toBeVisible();

   });

}),

test.describe("PM Tool Login tests, with tags", {tag: "@tagged"}, () => {

        test.beforeEach(async ({ page }) => {

        console.log("Befor each check");
        await page.goto("https://tredgate.com/pmtool");

            });
  
    test("Successful login", async ({ page }) => {

        await page.locator("#username").fill("playwright_jaro24");
        await page.locator("#password").fill("Playwright!2024");
        await page.locator('[type="submit"]').click();
        await expect(page.locator("#welcome-page-header")).toBeVisible();

   });

    test("Failed login", async ({ page }) => {

        await page.locator("#username").fill("dsfsdfdsfdsf");
        await page.locator("#password").fill("Playwright!2024");
        await page.locator('[type="submit"]').click();
        await expect(page.locator("#welcome-page-header")).not.toBeVisible();
    
    });

        test.skip("Skipped test", async ({ page }) => {

        await page.locator("#username").fill("playwright_jaro24");
        await page.locator("#password").fill("Playwright!2024");
        await page.locator('[type="submit"]').click();
        await expect(page.locator("#welcome-page-header")).toBeVisible();

   });
  
       test("Run only this", async ({ page }) => {

        await page.locator("#username").fill("playwright_jaro24");
        await page.locator("#password").fill("Playwright!2024");
        await page.locator('[type="submit"]').click();
        await expect(page.locator("#welcome-page-header")).toBeVisible();

   });

})

