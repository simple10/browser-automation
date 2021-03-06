// https://try-puppeteer.appspot.com/
// https://pptr.dev/#?product=Puppeteer&version=v2.1.1&show=api-pagetypeselector-text-options

const browser = await puppeteer.launch();

const page = await browser.newPage();
await page.goto('http://www.simple10.com/browser-automation/index.html');

await page.type('#input-name',  'John Doe');
await page.type('#input-address',  '123 Westworld Dr.');
await page.$eval('form', form => form.submit());

console.log(await page.content());
await page.screenshot({path: 'screenshot.png'});

await browser.close();
