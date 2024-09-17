import { Before, After } from "@cucumber/cucumber";
import { ExampleWorld } from "./world";

Before(async function (this: ExampleWorld) {
  await this.openBrowser();
});

After(async function (this: ExampleWorld) {
  await this.closeBrowser();
});
