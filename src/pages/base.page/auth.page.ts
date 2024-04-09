import { Page, Locator } from "playwright";
import loginData from "../../testdata/login";

export default class AuthPage {
  private page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  getFieldEmail(): Locator {
    return this.page.locator('//input[@name="email"]');
  }

  getFieldPhone(): Locator {
    return this.page.locator('//input[@name="phone"]');
  }

  getFieldPassword(): Locator {
    return this.page.locator('//input[@name="password"]');
  }

  getButtonLogin(): Locator {
    return this.page.locator('//button[@data-test-id="buttonLogin"]');
  }

  getCheckboxPolicy(): Locator {
    return this.page.locator(
      '//label[@for="policyCheckbox"]//span[contains(@class, "signin-popup__checkmark")]'
    );
  }

  getButtonSignInViaEmail(): Locator {
    return this.page.locator('//button[.="Войти по почте"]');
  }

  getButtonSignInViaEmailOrPhone(): Locator {
    return this.page.locator(
      '//*[@type="button" and contains (., "Войти по почте или телефону")]'
    );
  }

  getLoginFormTitle(): Locator {
    return this.page.locator('//span[@id="exampleModalLabel"]');
  }

  getButtonRemindPassword(): Locator {
    return this.page.locator('//button[contains(., "Восстановить пароль")]');
  }

  getRemindPasswordPopupTitle(): Locator {
    return this.page.locator('//span[@class="modal-title"]');
  }

  getFieldEmailForRecovery(): Locator {
    return this.page.locator('//input[@type="email"]');
  }

  getButtonSend(): Locator {
    return this.page.locator('//button[.="Восстановить пароль"]');
  }

  getButtonConfirmRecovery(): Locator {
    return this.page.locator(
      '//div[@class="modal-body modal-data"]//button[@type="submit"]'
    );
  }

  getSuccessfulRecoveryText(): Locator {
    return this.page.locator(
      '//span[contains(@class, "recovery-success-message")]'
    );
  }

  getButtonGetSms(): Locator {
    return this.page.locator('//*[text()="Получить код по СМС"]');
  }

  getSmsCodeInput(): Locator {
    return this.page.locator('//*[@aria-label="Цифра из смс кода 1"]');
  }

  getAuthorizationForm(): Locator {
    return this.page.locator('//div[@class="modal-content"]');
  }

  getCompanyPolicy(): Locator {
    return this.page.locator(
      '//*[@href="/company/policy/" and @rel="noopener noreferrer"]'
    );
  }

  getCompanyContract(): Locator {
    return this.page.locator(
      '//*[@href="/company/contract/" and @rel="noopener noreferrer"]'
    );
  }

  getLoyaltyRules(): Locator {
    return this.page.locator(
      '//*[@href="/loyalty/rules/" and @rel="noopener noreferrer"]'
    );
  }

  getSoglasieNaRassylku(): Locator {
    return this.page.locator(
      '//*[@href="/landing/soglasie_na_rassylku/" and @rel="noopener noreferrer"]'
    );
  }

  async checkCompanyPolicy() {
    const companyPolicy = this.getCompanyPolicy();
    await companyPolicy.waitFor({ state: "attached", timeout: 15000 });
  }

  async checkCompanyContract() {
    const companyContract = this.getCompanyContract();
    await companyContract.waitFor({ state: "attached", timeout: 15000 });
  }

  async checkLoyaltyRules() {
    const loyaltyRules = this.getLoyaltyRules();
    await loyaltyRules.waitFor({ state: "attached", timeout: 15000 });
  }

  async checkSoglasieNaRassylku() {
    const soglasieNaRassylku = this.getSoglasieNaRassylku();
    await soglasieNaRassylku.waitFor({ state: "attached", timeout: 15000 });
  }

  async checkRemindPasswordPopupTitle() {
    const remindPasswordTitle =
      await this.getRemindPasswordPopupTitle().textContent();
    if (remindPasswordTitle !== "Восстановить пароль") {
      throw new Error(
        "Некорректный заголовок окна ввода E-Mail для восстановления пароля!"
      );
    }
  }

  async inputUserEmailForRecovery() {
    const fieldEmailForRecovery = this.getFieldEmailForRecovery();
    await fieldEmailForRecovery.waitFor({ state: "attached", timeout: 15000 });
    if (!loginData.email) {
      throw new Error("Email для восстановления пароля не определен.");
    }
    await fieldEmailForRecovery.fill(loginData.email);
  }

  async clickButtonSend() {
    const buttonSend = this.getButtonSend();
    await buttonSend.waitFor({ state: "attached", timeout: 15000 });
    await buttonSend.click();
  }

  async checkSuccessfulRecoveryText() {
    const successfulRecoveryText = this.getSuccessfulRecoveryText();
    await successfulRecoveryText.waitFor({ state: "attached", timeout: 15000 });
    const text = await successfulRecoveryText.textContent();
    if (!text || !text.includes("Мы отправили ссылку для смены пароля")) {
      throw new Error(
        "Некорректный текст окна уведомления об отправке ссылки для восстановления пароля!"
      );
    }
  }

  async clickButtonConfirmRecovery() {
    await this.getButtonConfirmRecovery().click();
  }

  async clickButtonRemindPassword() {
    const buttonRemindPassword = this.getButtonRemindPassword();
    await buttonRemindPassword.waitFor({ state: "attached", timeout: 15000 });
    await buttonRemindPassword.click();
  }

  async checkLoginTitle() {
    const loginFormTitle = this.getLoginFormTitle();
    await loginFormTitle.waitFor({ state: "attached", timeout: 15000 });
  }

  async inputLoginEmail(email: string) {
    const fieldEmail = this.getFieldEmail();
    await fieldEmail.waitFor({ state: "attached", timeout: 15000 });
    await fieldEmail.fill(email);
  }

  async inputLoginPhoneNumber(phone: string) {
    const fieldPhone = this.getFieldPhone();
    await fieldPhone.waitFor({ state: "attached", timeout: 15000 });
    await fieldPhone.click();
    const phoneArr = phone.split("").slice(1);
    for (const num of phoneArr) {
      await fieldPhone.fill(num);
    }
  }

  async inputPassword(password: string) {
    const fieldPassword = this.getFieldPassword();
    await fieldPassword.waitFor({ state: "attached", timeout: 15000 });
    await fieldPassword.fill(password);
  }

  async selectCheckboxPolicy() {
    const checkboxPolicy = this.getCheckboxPolicy();
    await checkboxPolicy.waitFor({ state: "attached", timeout: 15000 });
    await this.page.evaluate((checkbox) => checkbox.click(), checkboxPolicy);
  }

  async checkButtonLoginIsNotClickable() {
    const buttonLogin = this.getButtonLogin();
    const isClickable = await buttonLogin.isEnabled();
    if (isClickable) {
      throw new Error(
        "Кнопка 'Войти' доступна для клика, хотя не должна быть!"
      );
    }
  }

  async tryToReloadBrowser() {
    const buttonSignInViaEmail = this.getButtonSignInViaEmail();
    const isDisplayed = await buttonSignInViaEmail.isVisible();
    if (isDisplayed) {
      await this.page.reload();
    }
  }

  async clickButtonLogin() {
    const buttonLogin = this.getButtonLogin();
    await buttonLogin.waitFor({ state: "attached", timeout: 5000 });
    await buttonLogin.click();
  }

  async clickButtonSignInViaEmail() {
    await this.tryToClickButtonSignInViaEmailOrPhone();
    const buttonSignInViaEmail = this.getButtonSignInViaEmail();
    await buttonSignInViaEmail.waitFor({ state: "attached", timeout: 15000 });
    await buttonSignInViaEmail.click();
  }

  async tryToClickButtonSignInViaEmailOrPhone() {
    const buttonSignInViaEmailOrPhone = this.getButtonSignInViaEmailOrPhone();
    try {
      await buttonSignInViaEmailOrPhone.waitFor({
        state: "attached",
        timeout: 15000,
      });
      await buttonSignInViaEmailOrPhone.click();
    } catch (error) {}
  }

  async clickButtonGetSms() {
    const buttonGetSms = this.getButtonGetSms();
    await buttonGetSms.waitFor({ state: "attached", timeout: 15000 });
    await buttonGetSms.click();
  }

  async inputSmsCode(smsCode: string) {
    const smsCodeInput = this.getSmsCodeInput();
    await smsCodeInput.waitFor({ state: "attached", timeout: 15000 });
    await smsCodeInput.scrollIntoViewIfNeeded();
    await this.page.waitForFunction(
      () =>
        !document
          .querySelector('[aria-label="Цифра из смс кода 1"]')
          ?.classList.contains("filled"),
      { timeout: 15000 }
    );
    await smsCodeInput.fill(smsCode);
  }

  async inputCorrectSmsCode(smsCode: string) {
    await this.inputSmsCode(smsCode);
    const smsCodeInput = this.getSmsCodeInput();
    await smsCodeInput.waitFor({ state: "detached", timeout: 15000 });
  }

  async inputIncorrectSmsCode() {
    await this.inputSmsCode("1111");
    const errorText = await this.getAuthorizationForm().textContent();
    if (!errorText || !errorText.includes("Неверный код")) {
      throw new Error(
        "Некорректный текст ошибки при вводе некорректного кода из sms!"
      );
    }
  }
}
