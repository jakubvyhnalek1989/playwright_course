import { test } from "@playwright/test";

test("iframe content control", async ({ page }) => {

    await page.goto("https://tredgate.com/webtrain/web-actions.html");
    await page.frameLocator('[data-testid="test-automation-iframe"]').locator("#name").fill("Kuba");  


    

});

