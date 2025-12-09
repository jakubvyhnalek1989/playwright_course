import { test } from "@playwright/test";
import { DefaultDeserializer } from "v8";

test("fill contact form", async ({ page }) => {

    await page.goto("https://tredgate.com/webtrain/contact.html");
    await page.locator("#full-name").fill("Jakub Vyhnálek");
    await page.locator("#email").fill("blabla@bleble.com");
    await page.locator("#contact-date").fill("2025-12-09");
    await page.locator("#role").selectOption("student");
    await page.locator("#comments").fill("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.");
    await page.locator("#newsletter").check();
    await page.locator('[data-testid="button-submit"]').click();

});