const browserObject = require("./scrapper/browser");
const scraperController = require("./scrapper/pageController");


let browserInstance = browserObject.startBrowser()

scraperController(browserInstance)