const { Builder, By, Key, until } = require('selenium-webdriver');

(async function example() {
  let driver = await new Builder().forBrowser('chrome').build();
  try {
    await driver.get('http://www.pvc-mashini.com/catalog/');
    var urlWebElements = await driver.findElements(By.className('portfoliolink'));
    // for(let element of urlWebElements) {
    processPage(await urlWebElements[0].getAttribute("href"));
    // }
  } finally {
    await driver.quit();
  }
})();

processPage = async function (url) {
  let driver = await new Builder().forBrowser('chrome').build();

  await driver.get(url);
  let decrtiption = await parseDescription(driver);
  let techDetails = await parseTechnicalDetails(driver);

  await driver.quit();
  console.log(JSON.stringify(decrtiption, null, '  '));
  console.log(JSON.stringify(techDetails, null, '  '));
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
