import { expect, test } from "@playwright/test";

test("validation test", async ({ page }) => {
 await page.goto("https://tredgate.com/pmtool");

await expect(page.locator("#username")).toBeVisible();
await expect(page.locator("#password")).toBeVisible();

await page.locator('[type="submit"]').click();

await expect.soft(page.locator("#username-error"), "Empty username").not.toBeVisible();
await expect.soft(page.locator("#password-error"), "Empty password").not.toBeVisible();


});