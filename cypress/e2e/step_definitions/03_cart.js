// cypress/e2e/step_definitions/cart.js
import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given("I am logged in and on the homepage", () => {
  cy.visit("https://automationexercise.com");
  cy.fixture('userData.json').then((user) => {
    cy.contains("Signup / Login").click();
    cy.get('[data-qa="login-email"]').type(user.email);
    cy.get('[data-qa="login-password"]').type(user.password);
    cy.get('[data-qa="login-button"]').click();
    cy.contains(`Logged in as ${user.name}`).should("be.visible");
  });
});

When("I add a product to the cart", () => {
  cy.contains("Products").click();
  cy.get(".product-overlay").first().invoke("show");
  cy.contains("Add to cart").click({ force: true });
  cy.contains("Continue Shopping").click();
});

Then("The product should be visible in the cart", () => {
  cy.contains("Cart").click();
  cy.get(".cart_description").should("exist");
});