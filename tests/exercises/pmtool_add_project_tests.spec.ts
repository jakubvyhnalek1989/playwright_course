import { test, expect } from "@playwright/test";
import { DefaultDeserializer } from "v8";

test("addProjectTest", async ({ page }) => {
  await page.goto("https://tredgate.com/pmtool");
  await page.locator("#username").fill("playwright_jaro24");
  await page.locator("#password").fill("Playwright!2024");
  await page.locator('[type="submit"]').click();
  await page.locator("#Projects").click();

  await expect(
    page.locator(".table-scrollable table"),
    "Čekáme na tabulku"
  ).toBeVisible();

  await page.locator('[test_id="Add Project"]').click();

  await expect(
    page.locator('div[data-testid="Name"]'),
    "Input field"
  ).toBeVisible(); //ověří, že element je viditelný, dá locatoru custom name, ať to v logu poznám
  await expect(page.locator('button[type="submit"]'), "Save button").toHaveText(
    "Save"
  ); //ověří, že element přesně odpovídá celému textu, dá locatoru custom name, ať to v logu poznám
});
