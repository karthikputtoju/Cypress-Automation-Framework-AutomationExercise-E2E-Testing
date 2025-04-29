// cypress/e2e/step_definitions/confirmation.js
import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given("I am on the payment page", () => {
  cy.visit("https://automationexercise.com");
  cy.fixture('userData.json').then((user) => {
    cy.contains("Signup / Login").click();
    cy.get('[data-qa="login-email"]').type(user.email);
    cy.get('[data-qa="login-password"]').type(user.password);
    cy.get('[data-qa="login-button"]').click();
    cy.contains("Cart").click();
    cy.contains("Proceed To Checkout").click();
    cy.get("textarea[name='message']").type("Deliver ASAP");
    cy.contains("Place Order").click();
  });
});

When("I enter payment details and confirm the order", () => {
  cy.get('[name="name_on_card"]').type("Test User");
  cy.get('[name="card_number"]').type("4111111111111111");
  cy.get('[name="cvc"]').type("123");
  cy.get('[name="expiry_month"]').type("12");
  cy.get('[name="expiry_year"]').type("2026");
  cy.get('#submit').click();
});

Then("I should see the order confirmation message", () => {
  cy.contains("Your order has been placed successfully!").should("be.visible");
});