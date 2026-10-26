import {webkit} from 'playwright';

const browser = await webkit.launch();
const page = await browser.newPage();
let crashed = false;
page.on('crash', () => { crashed = true; });
try {
  await page.goto('https://www.facebook.com/sharer/sharer.php?u=' + encodeURIComponent('https://example.com/'));
  console.log(`url=${page.url()} title=${await page.title()}`);
  await page.waitForTimeout(8000);
} catch (e) {
  console.log('error: ' + e.message.split('\n')[0]);
}
console.log(`crashed=${crashed} webkit=${browser.version()}`);
await browser.close();
