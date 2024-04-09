import { test, expect, devices } from "@playwright/test";
import { config as dotenvConfig } from "dotenv";
dotenvConfig();
import loginData from "../src/testdata/login";
import address from "../src/testdata/address";
import BrowserHelper from "../src/helpers/browser.helper";
const main = process.env.URL || "";
const login = loginData.email || "";
const password = loginData.password || "";
const browserHelper = new BrowserHelper();

test.describe("Проверка главной страницы на наличие ошибок Cannot find и содержания тэга pre", () => {
  test.describe.configure({ timeout: 90000 });

  test.beforeAll(`Подготовка окружения`,async ({ browser }) => {
    const context = await browser.newContext({
      viewport: {
        width: 1920,
        height: 1080,
      },
    });
    const page = await context.newPage();
    //await browserHelper.browserClean(page);
    return { page };
  });

  for (const { cityName, url } of address) {
    test(`Оформление самовывоза в ${cityName} @orders_sanity_test @mobile`, async ({
      page,
    }) => {
      await page.goto(`${main}${url}`, { waitUntil: "domcontentloaded" });
      const button = await page.waitForSelector(
        '//button[contains(., "Нет, другой")]'
      );
      if (button && (await button.isEnabled())) {
        await button.click();
        await page
          .locator("div")
          .filter({ hasText: `${cityName}` })
          .click();
        await page
          .waitForSelector('[role="link"][name="Выбрать"]')
          .then((link) => link.click());
      }
      await page.getByRole("searchbox").click();
      await page.getByRole("searchbox").fill("алмагель");
      await page.locator("#search-app").getByRole("button").nth(2).click();
      await page.locator(".listing-card__buy").first().click();
      await page.getByLabel("Закрыть").click();
      await page.getByRole("link", { name: "Корзина" }).click();
      await page.getByRole("button", { name: "+" }).click();
      await page.getByRole("link", { name: "Перейти к оформлению" }).click();
      await page
        .getByRole("button", { name: "Войти по почте или телефону" })
        .click();
      await page.locator('[data-test-id="buttonSignViaMail"]').click();
      await page
        .locator("label")
        .filter({
          hasText:
            "Соглашаюсь с политикой конфиденциальности, пользовательским соглашением и правил",
        })
        .locator("span")
        .click();
      await page
        .locator("label")
        .filter({
          hasText:
            "Предоставляю согласие на получение рекламных новостей, акций и персональных пред",
        })
        .locator("span")
        .click();
      await page.locator('input[name="email"]').click();
      await page.locator('input[name="password"]').fill(login);
      await page.locator('input[name="password"]').fill(password);
      await page.locator('[data-test-id="buttonLogin"]').click();
      await page.getByRole("button", { name: "Изменить аптеку" }).click();
      await page.getByRole("tab", { name: "Список" }).click();
      await page.locator("button:nth-child(5)").first().click();
      await page
        .getByLabel("Наличными или банковской картой при получении")
        .locator("#undefinedID")
        .check();
      await page.getByLabel("Заберёт другой человек").check();
      await page.getByLabel("Телефон").click();
      await page.getByLabel("Телефон").fill("733333333333");
      await page.getByLabel("ФИО").click();
      await page.getByLabel("ФИО").fill("Test");
      await page.getByRole("button", { name: "Оформить" }).click();
      await page.getByRole("link", { name: "Личный кабинет" }).click();
      await page.getByRole("link", { name: "Ваши заказы" }).click();
      await page.getByRole("link", { name: "N*" }).click();
      await page.getByRole("heading", { name: "№" }).click();
      await page.getByRole("link", { name: "Отменить заказ" }).click();
      await page
        .getByRole("textbox", { name: "Выберите причину отмены" })
        .click();
      await page.getByText("Не устроила дата доставки / дата выдачи").click();
      await page.getByRole("button", { name: "Отменить заказ" }).click();
      await page.getByRole("heading", { name: "Заказ отменён" }).click();
    });
  }
});
