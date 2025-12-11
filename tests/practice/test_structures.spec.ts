import { test, expect } from "@playwright/test";

test.describe("PM Tool Login tests", () => {
    
    test.beforeEach(async ({ page }) => {

        console.log("Befor each check");
        await page.goto("https://tredgate.com/pmtool");

            });

    test.beforeAll(() => {console.log("Běžím před prvním testem");
  });

  test.afterEach(async ({ page }) => {
    console.log("Běžím po každém testu (většinou uklízím)");
  });

  test.afterAll(async ({ browser }) => {
    console.log("Běžím po posledním testu.");

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

