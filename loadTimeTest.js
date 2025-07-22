// load-time.js
const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage();

  const start = Date.now();
  await page.goto('https://www.esprit.tn', { waitUntil: 'load' });
  const loadTime = Date.now() - start;

  console.log(`Page loaded in ${loadTime}ms`);

  await browser.close();
})();
