const pageScraper = require('./pageScraper');
async function scrapeAll(browserInstance, plantName) {
  let browser;
  try {
    browser = await browserInstance;
    return await pageScraper.scraper(browser, plantName);
  }
  catch (err) {
    console.log("Could not resolve the browser instance => ", err);
  }
}

module.exports = (browserInstance, plantName) => scrapeAll(browserInstance, plantName)