const { Builder, By, Key, until } = require('selenium-webdriver');

(async function example() {
  let driver = await new Builder().forBrowser('chrome').build();
  var result = [];
  try {
    await driver.get('http://www.pvc-mashini.com/%D0%B3%D0%B0%D0%BB%D0%B5%D1%80%D0%B8%D1%98%D0%B0/');
    var pages = await getLocalizedUrls(driver);
    
    for (page of pages) {
      var pageObject = {};
      pageObject.language = page.language;
      pageObject.detailsTabName = "Technical Details",
      pageObject.descriptionTabName = "Description",
      pageObject.machines = [];
      let pageDriver = await new Builder().forBrowser('chrome').build();

      await pageDriver.get(page.url);
      var urlWebElements = await pageDriver.findElements(By.className('portfoliolink'));
      for (let element of urlWebElements) {
        pageObject.machines.push(await processPage(await element.getAttribute("href")));
      }

      await pageDriver.quit();
      result.push(pageObject);
    }
  } finally {
    await driver.quit();
    console.log(JSON.stringify(result));
  }
})();

getLocalizedUrls = async function (driver) {
  var pages = [];
  var imageElements = await driver.findElements(By.css("#nav-main a img"));
  for (imageElement of imageElements) {
    var aElement = imageElement.findElement(By.xpath(".."));
    pages.push({ url: await aElement.getAttribute("href"), language: await imageElement.getAttribute("title") });
  }

  return pages;
}

processPage = async function (url) {
  var item = {};
  let driver = await new Builder().forBrowser('chrome').build();

  await driver.get(url);
  item.title = await parseTitle(driver);
  item.imageUrl = await parseImageUrl(driver);
  item.decription = await parseDescription(driver);
  item.technicalDetails = await parseTechnicalDetails(driver);

  await driver.quit();

  return item;
}

parseDescription = async function (driver) {
  var descriptionDetails = [];
  var detailElements = await driver.findElements(By.css(".entry-content li"));
  for (detailElement of detailElements) {
    descriptionDetails.push({ detail: await detailElement.getText() });
  }

  return descriptionDetails;
}

parseTechnicalDetails = async function (driver) {
  var descriptionDetails = [];
  var trList = await driver.findElements(By.css(".table-responsive tbody tr"));
  for (tr of trList) {
    let tdList = await tr.findElements(By.xpath(".//*"));
    let technicalDetailsElement = {};

    technicalDetailsElement.key = await tdList[0].getText();
    technicalDetailsElement.value = await tdList[1].getText();

    descriptionDetails.push(technicalDetailsElement);
  }

  return descriptionDetails;
}

parseTitle = async function (driver) {
  let titleElement = await driver.findElement(By.css(".entry-title"));
  return await titleElement.getText();
}

parseImageUrl = async function (driver) {
  let imageElement = await driver.findElement(By.css(".portfolio-single-img img"));
  return imageElement.getAttribute("src");
}