import { config as dotenvConfig } from "dotenv";
dotenvConfig();
import { test, expect } from "@playwright/test";
import ErrorsPage from "../src/pages/errors/errors.page";
import bitrixData from "../src/testdata/bitrix.data";
import { Page } from '@playwright/test';
import BrowserHelper from '../src/helpers/browser.helper';
const main = process.env.URL;

async function testPage(url: string, page: Page) {
  await page.goto(`${main}${url}`, { waitUntil: "load" });
  const errorsPage = new ErrorsPage(page);
  try {
    await errorsPage.checkAllErrors();
  } catch (error) {
    console.error(error);
  }
}

test.describe("Проверка страницы на наличие ошибок Cannot find и содержания тэга pre", () => {
  test.describe.configure({ timeout: 90000 });

  test.beforeAll(async ({ browser }) => {
    const context = await browser.newContext({
      viewport: {
        width: 1920,
        height: 1080,
      },
    });
    const page = await context.newPage();
    const browserHelper = new BrowserHelper();
    await browserHelper.browserClean(page);
    return { page };
  });

  for (const { testName, url } of bitrixData) {
    test(`${testName}@bitrixerrors`, async ({ page }) => {
      await page.goto(`${main}`);
      await expect(page.title()).resolves.toContain("Интернет-аптека");
      await testPage(url, page);
    });
  }
});
