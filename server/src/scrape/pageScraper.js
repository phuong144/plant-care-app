const scraperObject = {
  async scraper(browser, plantName) {
    plantName = plantName.replaceAll(' ', '+');
    let page = await browser.newPage();
    let url = `https://plantcaretoday.com/?s=${plantName}+care`;
    console.log(`Navigating to ${url}...`);
    // Navigate to the selected page
    await page.goto(url);
    // Wait for the required DOM to be rendered
    await page.waitForSelector('.site-content');
    // Get the link to the plant care site
    let dataUrl = await page.$$eval('main > article', links => {
      // Make sure the scraped link includes the string 'care'
      links = links.filter(link => link.querySelector('header > h2 > a').textContent.toLowerCase().includes('care'))
      // Extract the links from the data
      links = links.map(el => el.querySelector('header > h2 > a').href)
      return links[0];
    });

    return dataUrl;

    /*
    // Loop through each of those links, open a new page instance and get the relevant data from them
    let pagePromise = (link) => new Promise(async(resolve, reject) => {
      let dataObj = {};
      let newPage = await browser.newPage();
      await newPage.goto(link);
      dataObj['bookTitle'] = await newPage.$eval('.product_main > h1', text => text.textContent);
      dataObj['bookPrice'] = await newPage.$eval('.price_color', text => text.textContent);
      dataObj['noAvailable'] = await newPage.$eval('.instock.availability', text => {
        // Strip new line and tab spaces
        text = text.textContent.replace(/(\r\n\t|\n|\r|\t)/gm, "");
        // Get the number of stock available
        let regexp = /^.*\((.*)\).*$/i;
        let stockAvailable = regexp.exec(text)[1].split(' ')[0];
        return stockAvailable;
      });
      dataObj['imageUrl'] = await newPage.$eval('#product_gallery img', img => img.src);
      dataObj['bookDescription'] = await newPage.$eval('#product_description', div => div.nextSibling.nextSibling.textContent);
      dataObj['upc'] = await newPage.$eval('.table.table-striped > tbody > tr > td', table => table.textContent);
      resolve(dataObj);
      await newPage.close();
    });

    for(link in urls){
      let currentPageData = await pagePromise(urls[link]);
      // scrapedData.push(currentPageData);
      console.log(currentPageData);
    }
    */
  }
}

module.exports = scraperObject;