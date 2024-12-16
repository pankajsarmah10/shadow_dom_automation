const { chromium } = require("playwright");

(async () => {
  const browser = await chromium.launch({ headless: false });
  const page = await browser.newPage();

  await page.goto("https://shop.polymer-project.org/");

  // Access the Shadow DOM directly
  const shadowElement = await page
    .locator("shop-app")
    .evaluateHandle((el) => el.shadowRoot);
  const innerElement = await shadowElement.$("shop-home");

  console.log(await innerElement.isVisible()); // Should return true

  await browser.close();
})();
