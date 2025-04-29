// cypress/e2e/step_definitions/checkout.js
import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given("I have a product in my cart and I am logged in", () => {
  cy.visit("https://automationexercise.com");
  cy.fixture('userData.json').then((user) => {
    cy.contains("Signup / Login").click();
    cy.get('[data-qa="login-email"]').type(user.email);
    cy.get('[data-qa="login-password"]').type(user.password);
    cy.get('[data-qa="login-button"]').click();
    cy.contains(`Logged in as ${user.name}`).should("be.visible");
    cy.contains("Cart").click();
  });
});

When("I proceed to checkout", () => {
  cy.contains("Proceed To Checkout").click();
});

Then("I should see the address and order review sections", () => {
  cy.contains("Address Details").should("be.visible");
  cy.contains("Review Your Order").should("be.visible");
});

When("I enter a comment and place the order", () => {
  cy.get("textarea[name='message']").type("Please deliver this ASAP.");
  cy.contains("Place Order").click();
});

Then("I should see the payment page", () => {
  cy.url().should("include", "/payment");
  cy.get(".payment-information").should("exist");
});