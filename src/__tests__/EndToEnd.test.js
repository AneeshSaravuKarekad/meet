import puppeteer from 'puppeteer';

describe('show/hide an event details', () => {
  let browser;
  let page;

  jest.setTimeout(30000);
  beforeAll(async () => {
    browser = await puppeteer.launch({
      headless: true,
      slowMo: 250,
      ignoreDefaultArgs: ['--disable-extensions'],
    });
    page = await browser.newPage();
    await page.goto('http://localhost:3000/');
    await page.waitForSelector('.event');
  });

  afterAll(async () => {
    browser.close();
  });

  test('An event element is collapsed by default', async () => {
    const eventDetails = await page.$('.event .event__Details');
    expect(eventDetails).toBeNull();
  });

  test('User can expand an event to see its details', async () => {
    await page.click('.event .btn-show-hide');

    const eventDetails = await page.$('.event .event__Details');
    expect(eventDetails).toBeDefined();
  });

  test('User can collapse an event to hide its details', async () => {
    await page.click('.event .btn-show-hide');
    const eventDetails = await page.$('.event .event__Details');
    expect(eventDetails).toBeNull();
  });
});

describe('Filter events by city', () => {
  let browser;
  let page;

  jest.setTimeout(30000);
  beforeAll(async () => {
    browser = await puppeteer.launch({
      headless: false,
      slowMo: 250,
      ignoreDefaultArgs: ['--disable-extensions'],
    });
    page = await browser.newPage();
    await page.goto('http://localhost:3000/');
    await page.waitForSelector('.event');
  });

  afterAll(async () => {
    browser.close();
  });

  test('show suggestions when typing', async () => {
    await page.type('.city', 'Berlin');
    const suggestion = await page.$('.suggestions');

    expect(suggestion).toBeDefined();
  });

  test('display 1 event when filtering berlin', async () => {
    const allSuggestions = await page.$('.suggestions li');
    await allSuggestions.click();

    const events = await page.$('.event');

    expect(events).not.toBeNull();
  });
});
