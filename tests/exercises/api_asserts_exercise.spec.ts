// tests/
// api_asserts.spec.ts

import { expect, test } from "@playwright/test";

/*
Cvičení (⌛8:00):
Ve složce exercises vytvořte nový test soubor:  api_asserts_exercise.spec.ts
Vytvořte volání API v playwright na https://tegb-backend-877a0b063d29.herokuapp.com/train
Metoda: PATCH (request.patch)
Otestujte, že timestamp je text (string), id = 1
*/

test("api_asserts_exercise.spec.ts", async ({ request }) => {
  const response = await request.patch(
    "https://tegb-backend-877a0b063d29.herokuapp.com/train"
  );

const responseBody = await response.json();

expect(typeof responseBody.timestamp).toEqual("string");
expect(responseBody.id, "Id is a Number").toEqual(1);
});











test("Assert Response Status 200", async ({ request }) => {
  const response = await request.get(
    "https://tegb-backend-877a0b063d29.herokuapp.com/train"
  );
  expect(response.status(), "Response Status is 200").toBe(200);
});

test("Assert Header Content-Type", async ({ request }) => {
  const response = await request.get(
    "https://tegb-backend-877a0b063d29.herokuapp.com/eshop/1234"
  );
  const headers = response.headers();
  const contentType = headers["content-type"];
  expect(contentType, "Response Header Content-Type have Value").toEqual(
    "application/json; charset=utf-8"
  );
});

test("Assert Response Body", async ({ request }) => {
  const response = await request.get(
    "https://tegb-backend-877a0b063d29.herokuapp.com/eshop/55"
  );
  const responseBody = await response.json();
  // * Kontrola, že body obsahuje property (klíč)
  expect(responseBody, "Response Body have Property createdAt").toHaveProperty(
    "createdAt"
  );

  // * Kontrola, že userId je číslo
  expect(typeof responseBody.userId, "body.userId is a Number").toBe("number");

  // * Kontrola hodnoty dat
  expect(responseBody.email, "body.email have Value").toBe(
    "Rex_Bashirian@example.org"
  );
});
