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
      let usageExample = document.querySelector(".example").textContent;

      return {
        word,
        meaning,
        usageExample,
      };
    });
    console.log(wordOfTheDay);

    await page.waitForSelector("#term");
    await page.type("#term", "technical debt");
    await page.keyboard.press("Enter");
    await page.waitForNavigation();
    await page.waitForSelector(".meaning");

    let definition = await page.evaluate(() => {
      let word = document.querySelector(".word").textContent;
      let meaning = document.querySelector(".meaning").textContent;
      let usageExample = document.querySelector(".example").textContent;

      return {
        word,
        meaning,
        usageExample,
      };
    });
    console.log(definition);

    await page.waitForSelector('a[href="/random.php"]');
    await page.click('a[href="/random.php"]');
    await page.waitForSelector(".meaning");
    let randomWord = await page.evaluate(() => {
      let word = document.querySelector(".word").textContent;
      let meaning = document.querySelector(".meaning").textContent;
      let usageExample = document.querySelector(".example").textContent;

      return {
        word,
        meaning,
        usageExample,
      };
    });
    console.log(randomWord);
  },
};

module.exports = scraperObject;
