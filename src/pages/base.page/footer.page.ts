import { expect, Locator, Page, BrowserContext } from "@playwright/test";

export default class FooterPage {
  readonly page: Page;
  readonly context: BrowserContext;

  constructor(page: Page, context: BrowserContext) {
    this.page = page;
    this.context = context;
  }
}
