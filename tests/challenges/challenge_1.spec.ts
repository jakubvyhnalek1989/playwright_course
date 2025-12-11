import { test } from "@playwright/test";
import { DefaultDeserializer } from "v8";

// Vytvoř nový test ve složce: tests, který:
// Otevře: http://www.tredgate.com/eshop/
// Otevře iPhone
// Klikne na přidání iPhone do košíku
// Otevře košík
// Odebere iphone

test("Prvni challenge", async ({ page }) => {
  await page.goto("http://www.tredgate.com/eshop/");
  await page.locator('[title="iPhone"]').click();
  await page.locator("#button-cart").click();
  await page.locator("#cart-total").click();
  await page.locator('[title="Remove"]').click();
});
