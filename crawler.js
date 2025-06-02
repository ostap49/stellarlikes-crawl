const { launch } = require('puppeteer');

(async () => {
  const browser = await launch({ headless: true });
  const page = await browser.newPage();
  await page.goto('https://stellarlikes.com/buy-tiktok-likes');
  const title = await page.title();
  console.log('Page title:', title);
  await browser.close();
})();
