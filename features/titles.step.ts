import { Given, When, Then } from "@cucumber/cucumber";
import { expect } from "@playwright/test";
import { ExampleWorld } from "../world";

Given<ExampleWorld>("url is {string}", async function (this: ExampleWorld, url: string) {
  await this.page.goto(url);
});

When<ExampleWorld>("I open the page", async function (this: ExampleWorld) {
  await this.page.waitForLoadState('load');
});

Then<ExampleWorld>("it should have a {string} title", async function (this: ExampleWorld, expectedTitle: string) {
  const title = await this.page.title();
  expect(title).toBe(expectedTitle);
});
