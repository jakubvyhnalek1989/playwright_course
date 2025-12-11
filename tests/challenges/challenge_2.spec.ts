import { test } from "@playwright/test";

// Vytvoř novou složku v tests: challenges
// Vytvoř nový test soubor: automationteststore_actions_challenge.spec.ts
// Vytvoř nový test: E2E registration
// Otevři  https://automationteststore.com/
// Otevři registrační stránku
// Registruj nového uživatele

test("Druhá challenge", async ({ page }) => {
  await page.goto("https://automationteststore.com/");
  await page.locator("#customer_menu_top").click();
  await page.locator('[title="Continue"]').click();
});
