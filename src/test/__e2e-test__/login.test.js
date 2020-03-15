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
		await page.focus('.account input');
		await page.keyboard.type('test01');
		await await page.waitFor(2000);
		await page.focus('.password input');
		await page.keyboard.type('123qwe');
		await await page.waitFor(2000);
		await page.click('.submit-button');

		await page.waitFor(2000);
		const url = await page.url();

		expect(url).toBe('http://localhost:8080/#/home');
	}, 30000);
});