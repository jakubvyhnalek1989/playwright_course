import { test } from "@playwright/test";
import path from "path";
import { DefaultDeserializer } from "v8";

test("upload a file", async ({ page }) => {
    // open the page
    // get file path
    // turn filechooser listener on
    // click the upload input
    // catch the system upload window and upload the file
    // upload the file

    await page.goto("https://tredgate.com/webtrain/registration.html");  // open the page
    const FilePath = path.resolve(__dirname, "../../assets/upload_file.txt");    // get file path, save in variable
    const filechooserListener = page.waitForEvent("filechooser");  // turn filechooser listener on
    await page.locator("#file-upload").click();  // click the upload input
    const filechooser = await filechooserListener;  // catch the system upload window
    await filechooser.setFiles(FilePath);  // upload the file

    await page.waitForTimeout(1000);  // wait for 1 seconds to see the uploaded file screenshot




});

