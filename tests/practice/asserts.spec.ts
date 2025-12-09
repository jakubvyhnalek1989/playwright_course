import { expect, test } from "@playwright/test";

test("toContainText", async ({ page }) => {
  await page.goto("https://tredgate.com/pmtool");
  await page.locator("#username").fill("playwright_jaro24");
  await page.locator("#password").fill("Playwright!2024");
  await page.locator('[type="submit"]').click();

  await expect(
    page.locator("#welcome-page-header"),
    "Uvítací hlavička"
  ).toContainText("Vítej v testovací aplikaci Tredgate Project"); //ověří, že element obsahuje text, dá locatoru custom name, ať to v logu poznám
});

test("toHaveText", async ({ page }) => {
  await page.goto("https://tredgate.com/pmtool");
  await page.locator("#username").fill("playwright_jaro24");
  await page.locator("#password").fill("Playwright!2024");
  await page.locator('[type="submit"]').click();

  await expect(
    page.locator("#welcome-page-header"),
    "Uvítací hlavička"
  ).toHaveText("Vítej v testovací aplikaci Tredgate Project"); //ověří, že element přesně odpovídá celému textu, dá locatoru custom name, ať to v logu poznám
});

test("toBeVisible", async ({ page }) => {
  await page.goto("https://tredgate.com/pmtool");

  await expect(
    page.locator('[title="TEG Project Management"]'),
    "Logo nad loginem"
  ).toBeVisible(); //ověří, že element je viditelný, dá locatoru custom name, ať to v logu poznám
});

test("toHaveValue", async ({ page }) => {
  await page.goto("https://tredgate.com/pmtool");

  await page.locator("#username").fill("playwright_jaro24");
  await expect(page.locator("#username"), "Username input").toHaveValue(
    "playwright_jaro24"
  ); //ověří, že input má hodnotu, dá locatoru custom name, ať to v logu poznám
});

