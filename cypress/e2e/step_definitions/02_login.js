// cypress/e2e/step_definitions/login.js
import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

let user;

Given("I open the website", () => {
  cy.visit("https://automationexercise.com");
});

When("I navigate to Login page", () => {
  cy.contains("Signup / Login").click();
});

When("I enter valid email and password", () => {
  cy.fixture('userData.json').then((userData) => {
    user = userData;
    cy.get('[data-qa="login-email"]').type(user.email);
    cy.get('[data-qa="login-password"]').type(user.password);
    cy.get('[data-qa="login-button"]').click();
  });
});

Then("I should be logged in successfully", () => {
  cy.contains(`Logged in as ${user.name}`).should('be.visible');
});

When("I enter invalid email or password", () => {
  cy.get('[data-qa="login-email"]').type("invalid@example.com");
  cy.get('[data-qa="login-password"]').type("wrongpass");
  cy.get('[data-qa="login-button"]').click();
});

Then("I should see an error message", () => {
  cy.contains("Your email or password is incorrect!").should('be.visible');
});
