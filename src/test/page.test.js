import puppeteer from 'puppeteer';

let browser;

let page;

describe('page test', () => {
	beforeEach (async () => {
		browser = await puppeteer.launch({ headless: false });
		page = await browser.newPage();
	});
	afterEach (() => {
		browser.close();
	});
	test('page test',async () => {
		await page.goto('http://localhost:8080/#/');
		await page.click(".about");
		const url = await page.url();

		expect(url).toBe('http://localhost:8080/#/about');
	});
});
