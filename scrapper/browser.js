const puppeteer = require("puppeteer");

async function startBrowser() {
  let browser;

  try {
    console.log("Opening Browser....");
    browser = await puppeteer.launch({
      headless: true,
      ignoreHTTPSErrors: true,
    });
  } catch (err) {
    console.log("Could not create a browser instance => : ", err);
  }

  return browser;
}

module.exports = {
  startBrowser,
};
