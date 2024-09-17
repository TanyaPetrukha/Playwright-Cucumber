import { setWorldConstructor, IWorldOptions } from "@cucumber/cucumber";
import { Browser, BrowserContext, Page, chromium } from "@playwright/test";

export class ExampleWorld {
  browser!: Browser;
  browserContext!: BrowserContext;
  page!: Page;

  constructor(options: IWorldOptions) {
    Object.assign(this, options);
  }

  async openBrowser() {
    this.browser = await chromium.launch();
    this.browserContext = await this.browser.newContext();
    this.page = await this.browserContext.newPage();
  }

  async closeBrowser() {
    await this.page.close();
    await this.browserContext.close();
    await this.browser.close();
  }
}

setWorldConstructor(ExampleWorld);
