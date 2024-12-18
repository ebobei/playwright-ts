import { Locator, Page } from "@playwright/test";

export default class ErrorsPage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  get cannotFindErrorsCollection(): Locator {
    return this.page.locator('//*[contains(., "Cannot find")]');
  }

  get errorMessagesCollection(): Locator {
    return this.page.locator('//*[contains(., "ошибка")]');
  }

  get preTagsCollection(): Locator {
    return this.page.locator("//pre");
  }

  async checkCannotFindErrors(): Promise<void> {
    const errors = await this.cannotFindErrorsCollection.count();
    if (errors > 0) {
      throw new Error("На странице содержатся ошибки вида Cannot Find!");
    }
  }

  async СheckCannotFindErrors(): Promise<void> {
    const errors = await this.cannotFindErrorsCollection.count();
    if (errors > 0) {
      throw new Error("На странице содержатся ошибки вида Cannot Find!");
    }
  }

  async checkErrorMessages(): Promise<void> {
    const messages = await this.errorMessagesCollection.count();
    if (messages > 0) {
      throw new Error("На странице присутствует слово 'ошибка'!");
    }
  }

  async checkPreTags(): Promise<void> {
    const tags = await this.preTagsCollection.count();
    if (tags > 0) {
      throw new Error("В DOM древе присутствует тэг pre!");
    }
  }

  async checkAllErrors() {
    await this.checkCannotFindErrors();
    await this.checkErrorMessages();
    await this.checkPreTags();
  }
}