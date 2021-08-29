const puppeteer = require("puppeteer");

async function scrape(url) {
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();
  await page.goto(url);
  await page.waitForSelector("span [title='Ronaldi']");
  const target = await page.$("span [title='Ronaldi']");
  await target.click();
  const inp = await page.$(
    "#main > footer > div._2BU3P.tm2tP.copyable-area > div._1SEwr > div > div.p3_M1 > div > div._13NKt.copyable-text.selectable-text"
  );

  for (let i = 0; i < 1000; i++) {
    await inp.type("O QUE REALMENTE A PROGRAMAÇÃO DA PRA FAZER UM ROBO QUE MANDA MENSAGENS AUTOMATICAS");
    await page.keyboard.press("Enter");
  }
}

scrape("https://web.whatsapp.com");


//copy selector