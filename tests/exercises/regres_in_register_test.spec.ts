import { expect, test } from "@playwright/test";

test("GET Request with a Header", async ({ request }) => {
await request.post("https://reqres.in/api/register", {
    headers: {
        'Accept-Encoding': 'gzip, deflate, br',
        'x-api-key': "reques-free-v1",
        },
    data: {
        email: "eve.holt@reqres.in",
        password: "pistol",
        },
});
});