import { expect, Locator, Page } from "@playwright/test";

export class MainPage {
  readonly page: Page;
  readonly heading: Locator;
  readonly subHeading: Locator;

  constructor(page: Page) {
    this.page = page;
    this.heading = page.getByRole("heading", {
      name: "Find your spirit animal",
    });
    this.subHeading = page.getByText("The animal friendly clothing");
  }


  async navigateToMainPage() {
    await this.page.goto(
      "https://ilarionhalushka.github.io/jekyll-ecommerce-demo/"
    );
  }


  async verifyMainPageOpened() {
    await expect(this.heading).toBeVisible();
    await expect(this.subHeading).toBeVisible();
  }

  async scrollToFooter() {
    await this.page.evaluate(() =>
      window.scrollTo(0, document.body.scrollHeight)
    );
  }
}
