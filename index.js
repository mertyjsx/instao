const puppeteer = require('puppeteer');

const express = require("express");
const axios = require("axios");
const cors=require("cors")
const app = express();
app.use(cors());
app.use(express.json());
const port = process.env.PORT || 4000;

app.listen(port, () => {
    setTimeout(() => {
      //User.deleteMany().then(e=>console.log(e))
      //pullUsers("necklacesofficial",' ig_did=1B6DD261-B5CD-4B9C-BD54-F92D2F1A381E; mid=Xy1jHAALAAFGGg1b9oim18euAcN6; fbm_124024574287414=base_domain=.instagram.com; datr=7CxEXygCWAWwj8_G6630yIUB; rur=RVA; ig_gdpr_signup=%7B%22count%22%3A2%2C%22timestamp%22%3A1601977913136%7D; ig_nrcb=1; fbsr_124024574287414=7IdbY9o0sgYpCl-DfM7ks2DfpHxY7RohWZ0kKPl4geM.eyJ1c2VyX2lkIjoiMTI1NzY2NzQwMCIsImNvZGUiOiJBUUIyTnFpTG9kcGVhQnJwVVBOVE5mNldSOWVTNWc2V2FjRFF4VWFKYmR6TWw0ZGJDWTM5S2NGQ2RGeFNYeEVzdDhmcmtJV0taM3hDdXo3eE9MSDBRMFFXbnFxMm1reGlyVkZQbFhvYlUwa1RVZjdaWEFKNElrdWZsSVdjNmFCM19jRVBiQkloVUotdGQ5eUJiZ2hiY2Y1WnJhbEpRdEhWcmQ3SFZBZEJEWXBXbXFyaHdMX3AzTkU2Y0JmSGhHRkRJZHdIeVVsVHpFNzBQOXE0M2dlY3A0Vmh1ZHNMdXN0QmNfYkFSUDBQQzBZTzI4YThQbmNINEhfMXo5eVlQOS1zNXhvSmJkUE9CZ0NKZzZNRklzMkV6NGNaTTFTbHVMSU5BWVBiMG5ZcDFidmgxSHFtYWVfbk1kM2MwZE5XOEFIVEJWSSIsIm9hdXRoX3Rva2VuIjoiRUFBQnd6TGl4bmpZQkFKNG4xV0JaQVR0SjZBa1RaQmhkdmtKUUFuNjF1STJFelRZRlRsYkYwNjZYQmg3d1BGak91ZHZDZUhHZUJaQURJVHRqa1pBUTBNb2FjS1Q0Q2R4RHdMcTdUZ3JrQXdoVE5YTjVYSWlIZ0xuTUVJSDlIMDVlMnNYbVE2MnRlY2tYZzBQY2xMU1Byek9kRXJiclRaQ0dNR3NRU3BBaVFWZ1pEWkQiLCJhbGdvcml0aG0iOiJITUFDLVNIQTI1NiIsImlzc3VlZF9hdCI6MTYwMjA3NTM0NH0; csrftoken=Cf4JWvECIhzt77OrBomorhnVB3PaNFmZ; ds_user_id=43227602058; sessionid=43227602058%3A3lVzpvs27FhC3f%3A2; shbid=6407; shbts=1602083711.6219184; urlgen="{\"78.190.56.63\": 47331\054 \"46.155.41.28\": 15897}:1kQXpC:w3XnmEgyr9JHQ1SBNA7GlclWx2M"')
      //Run().then((response)=>follow())
    }, 2000);
    console.log(`Example app listening at http://localhost:${port}`);
  });
  


  app.get("/follow", async (req, res) => {
    console.log("burası follow");
    res.send("bakalım")
  Run()
  })




let numofPost = process.argv[2];
async function Run() {
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
}