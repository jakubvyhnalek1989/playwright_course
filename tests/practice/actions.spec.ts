import { test } from "@playwright/test";
import { DefaultDeserializer } from "v8";

test("fill and press", async ({ page }) => {

    await page.goto("https://tredgate.com/pmtool");
    const usernameInput = page.locator("#username"); 
    await usernameInput.fill("Start");
    await usernameInput.fill("End");
    await usernameInput.pressSequentially("Kde to bude?"); //stiskne jednotlivé klávesy
    await usernameInput.clear(); //vymaže hodnotu pole
    await usernameInput.pressSequentially("Pomalý text", { delay: 500 });



});

test("select_dropdown", async ({ page }) => {

    await page.goto("https://tredgate.com/webtrain/registration.html");
    await page.locator("#gender").selectOption("female");    //výběr z droplistu vykresleného prohlížečem - výběr podle value z kodu
    await page.locator("#gender").selectOption( { label: "Male" } );    //výběr z droplistu vykresleného prohlížečem - výběr podle stringu

});    

test("select_radioButton", async ({ page }) => {

    await page.goto("https://tredgate.com/webtrain/registration.html");
    await page.locator("#contact-email").check();    //zaškrtne radio button
    await page.locator("#contact-phone").check();    //zaškrtne radio button

    await page.locator("#interests-sports").check();    //zaškrtne checkbox
    await page.locator("#interests-music").check();    //zaškrtne checkbox
    await page.locator("#interests-travel").check();    //zaškrtne checkbox
    await page.locator("#interests-reading").check();    //zaškrtne checkbox
    await page.locator("#interests-sports").uncheck();    //odškrtne checkbox

});    

test("select_date", async ({ page }) => {

    await page.goto("https://tredgate.com/webtrain/registration.html");
    await page.locator("#date-of-birth").fill("1989-05-09"); //iso8601 YYYY-MM-DD - přizpůsobí se lokálnímu nastavení formátu browseru, pokud jde o defaultní datepicker
    

});   

test("mouse_hover", async ({ page }) => {

    await page.goto("https://tredgate.com/webtrain/web-actions.html");
    await page.locator("#hover-box").hover();  //přesune myš na element

    await page.waitForTimeout(1000);  //počká 1 sekundu, aby bylo vidět hover efekt
        

});   