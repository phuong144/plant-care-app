const browserObject = require('./browser');
const scraperController = require('./pageController');

async function plantScrapper(plantName) {
  //Start the browser and create a browser instance
  let browserInstance = await browserObject.startBrowser();

  // Pass the browser instance to the scraper controller
  const url = await scraperController(browserInstance, plantName);
  browserInstance.close();
  return url;
}

module.exports = plantScrapper;