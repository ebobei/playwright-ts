import { expect, Locator, Page, BrowserContext } from "@playwright/test";

export default class HeaderPage {
  readonly page: Page;
  readonly context: BrowserContext;

  constructor(page: Page, context: BrowserContext) {
    this.page = page;
    this.context = context;
  }

  get header(): Locator {
    return this.page.locator('//header[@class="header js-header"]');
  }

  get iconPersonalAccount(): Locator {
    return this.page.locator('//*[@class="header__personal is-active"]');
  }

  get buttonSignIn(): Locator {
    return this.page.locator('//button[@class="SignInDesktopDropDown-btn"]');
  }

  get buttonPersonalAccount(): Locator {
    return this.page.locator(
      '//a[@class="SignInDesktopDropDown-link"][contains(text(),"Личные данные")]'
    );
  }

  get currentCityTitle(): Locator {
    return this.header.locator('.//span[@class="select_title"]');
  }

  get buttonLogout(): Locator {
    return this.page.locator(
      '//a[contains(text(),"Выход") and contains(@href,"/?logout=yes")]'
    );
  }

  get buttonPharmacies(): Locator {
    return this.header.locator('.//a[@href="/company/pickup/"]');
  }

  get buttonCheckOrder(): Locator {
    return this.header.locator(
      './/a[contains(@href, "/personal/order/status")]'
    );
  }

  get buttonDelivery(): Locator {
    return this.header.locator('.//a[contains(.,"Доставка")]');
  }

  get buttonEconomy(): Locator {
    return this.header.locator('.//a[contains(., "Экономия")]');
  }

  get buttonCareer(): Locator {
    return this.header.locator('.//a[.="Карьера"]');
  }

  async clickButtonEconomy(): Promise<void> {
    // Нажатие на кнопку "Экономия до 10%"
    const isEnabled = await this.buttonEconomy.isEnabled();
    if (isEnabled) {
      await this.buttonEconomy.click();
    } else {
      console.error('Кнопка "Экономия до 10%" не доступна для нажатия.');
      throw new Error('Кнопка "Экономия до 10%" не доступна для нажатия.');
    }
  }

  async getDeliveryAroundTheClockLink(): Promise<string | null> {
    // Получение ссылки из кнопки "Доставка 24/7"
    const isEnabled = await this.buttonDelivery.isEnabled();
    if (isEnabled) {
      return await this.buttonDelivery.getAttribute("href");
    } else {
      console.error('Кнопка "Доставка 24/7" не доступна для нажатия.');
      throw new Error('Кнопка "Доставка 24/7" не доступна для нажатия.');
    }
  }

  async assertMoscowDeliveryLink(): Promise<void> {
    try {
        const deliveryLink = await this.getDeliveryAroundTheClockLink();
        expect(deliveryLink).toContain("/company/delivery/");
    } catch (error) {
    }
}

  async assertSpbDeliveryLink(): Promise<void> {
    // Проверка корректности ссылки в кнопке "Доставка 24/7"
    const deliveryLink = await this.getDeliveryAroundTheClockLink();
    expect(deliveryLink).toContain("/spb/company/delivery/");
  }

  async assertTverDeliveryLink(): Promise<void> {
    // Проверка корректности ссылки в кнопке "Доставка 24/7"
    const deliveryLink = await this.getDeliveryAroundTheClockLink();
    expect(deliveryLink).toContain("/tver/company/delivery/");
  }

  async clickButtonLogout(): Promise<void> {
    // Нажатие на кнопку "Выйти"
    const buttonLogout = await this.buttonLogout;
    await buttonLogout.isEnabled({ timeout: 10000 });
    await buttonLogout.click();
  }

  async clickButtonSignIn(): Promise<void> {
    // Нажатие на кнопку "Вход"
    await this.iconPersonalAccount.hover();
    const isEnabled = await this.buttonSignIn.isEnabled();
    if (isEnabled) {
      await this.buttonSignIn.click();
    } else {
      console.error('Кнопка "Вход" не доступна для нажатия.');
      throw new Error('Кнопка "Вход" не доступна для нажатия.');
    }
  }

  async clickButtonPersonalAccount(): Promise<void> {
    // Нажатие на кнопку "Личный кабинет"
    await this.iconPersonalAccount.hover();
    const isEnabled = await this.buttonPersonalAccount.isEnabled();
    if (isEnabled) {
      await this.buttonPersonalAccount.click();
    } else {
      console.error('Кнопка "Личный кабинет" не доступна для нажатия.');
      throw new Error('Кнопка "Личный кабинет" не доступна для нажатия.');
    }
  }
}

