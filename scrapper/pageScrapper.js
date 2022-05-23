const scraperObject = {
  url: "https://www.urbandictionary.com",

  async scraper(browser) {
    let page = await browser.newPage();
    console.log(`Navigating to ${this.url}`);
    await page.goto(this.url);

    await page.waitForSelector(".meaning");
    let wordOfTheDay = await page.evaluate(() => {
      let word = document.querySelector(".word").textContent;
      let meaning = document.querySelector(".meaning").textContent;
      let usage = document.querySelector(".example").textContent;

      return {
        word,
        meaning,
        usage,
      };
    });
    console.log(wordOfTheDay);
  },
};

module.exports = scraperObject;
