import { Given, When, Then } from "@cucumber/cucumber";
import { MainPage } from "../project/pages/MainPage";
import { PaymentComponent } from "../project/components/PaymentComponent";
import { CartComponent } from "../project/components/CartComponent";

Given("User navigates to main page", async function () {
  const mainPage = new MainPage(this.page);
  await mainPage.navigateToMainPage();
});

Given("User adds T-shirt to cart", { timeout: 10000 }, async function () {
  const cart = new CartComponent(this.page);
  await cart.addToCart('Sacha the Deer');
});

Given("User changes T-shirt parameters", { timeout: 10000 }, async function () {
  const cart = new CartComponent(this.page);
  await cart.incrementQuantity();
  await cart.checkout();
});

Given("User fills a billing form", async function () {
  const paymentForm = new PaymentComponent(this.page);
  await paymentForm.fillBillingForm(
    "Joe Fournier",
    "Fournier@jourr.apide",
    "Holly Trail",
    "555",
    "Bracey",
    "United States",
    "Alabama",
    "23927"
  );
});

When("User submits the billing form", async function () {
  const paymentForm = new PaymentComponent(this.page);
  await paymentForm.submitBillingForm();
});

Then("Card details form is opened", async function () {
  const paymentForm = new PaymentComponent(this.page);
  await paymentForm.inputCardNumber.waitFor({ state: "visible" });
});

When("User fills card details", async function () {
  const paymentForm = new PaymentComponent(this.page);
  await paymentForm.fillCardDetails("4242 4242 4242 42424", "08/26", "123");
  await paymentForm.submitCardDetailsForm();
});

Then("Order is created", async function () {
  const paymentForm = new PaymentComponent(this.page);
  await paymentForm.verifyOrderSuccessMessage();
});
