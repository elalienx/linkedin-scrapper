// Node modules
import puppeteer from "puppeteer";

export default async function scrapBootcamp(url) {
  const selector = "h1";
  const mode = { headless: "new" };
  const browser = await puppeteer.launch(mode);
  const page = await browser.newPage();

  await page.goto(url);
  await page.waitForSelector(selector); // Wait for the content to load

  // Extract and print the text of article titles
  const title = await page.$eval(selector, (item) => item.textContent);
  const image = await page.$eval(".hero img", (item) => item.src);
  const skills = await page.$$eval(".item-skill .label", (elements) =>
    elements.map((element) => element.innerHTML)
  );

  await browser.close();
  

  return {
    title: title,
    profile_picture: image,
    skills: [...skills],
  };
}
