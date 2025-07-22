const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();
  try {
    await page.goto('https://www.esprit.tn', { waitUntil: 'load', timeout: 60000 });
    const start = Date.now();
    await page.click('a'); // attention au sélecteur, peut-être trop générique
    const latency = Date.now() - start;
    console.log(`Interaction latency: ${latency}ms`);
  } catch (err) {
    console.error('Erreur pendant la navigation ou interaction:', err);
  } finally {
    await browser.close();
  }
})();
