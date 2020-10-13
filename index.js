const puppeteer = require('puppeteer');

let numofPost = process.argv[2];
(async function () {
    const browser = await puppeteer.launch({ headless: false });
    const page = await browser.newPage();
    await page.goto('https://www.instagram.com/?hl=en', { waitUntil: "networkidle2" });
    await page.type("input[name='username']", "handmade_anxiety_pendant_3", { delay: 100 });
    await page.type("input[name='password']", "bugramert123", { delay: 100 });
    await Promise.all([
        page.waitForNavigation({ waitUntil: "networkidle2" }),
        page.click("button[type='submit']"),
    ]);
    await page.type("input[placeholder='Search']", "handmade_anxiety_pendant_2");
    await page.waitForSelector(".drKGC .fuqBx a", { visible: true });
    await Promise.all([
        page.waitForNavigation({ waitUntil: "networkidle2" }),
        page.click(".drKGC .fuqBx a"),
    ]);
    // ._9AhH0
    await page.waitForSelector("._9AhH0", { visible: true });

    await Promise.all([
        page.waitForNavigation({ waitUntil: "networkidle2" }),
        page.click("._9AhH0"),
    ]);
    let i = 0;
    do {
        await page.waitForSelector(".fr66n button");
        await page.click(".fr66n button");
        await Promise.all([
            page.waitForNavigation({ waitUntil: "networkidle2" }),
            page.click("._65Bje.coreSpriteRightPaginationArrow"),
        ]);
        i++;
    } while (i < numofPost) { }
})();