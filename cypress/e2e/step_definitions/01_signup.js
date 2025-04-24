// signup.js
import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given("I open the website", () => {
  cy.visit("/");
});

When("I navigate to Signup page", () => {
  cy.contains("Signup / Login").click();
});

When("I enter unique name and email address", () => {
  const email = `user_${Date.now()}@test.com`;
  cy.wrap(email).as("email");
  cy.get("input[data-qa='signup-name']").type("Test User");
  cy.get("input[data-qa='signup-email']").type(email);
});

When("I fill out the signup form with valid data", () => {
  cy.get("button[data-qa='signup-button']").click();
  cy.get("input[id='id_gender1']").check();
  cy.get("#password").type("Test@1234");
  cy.get("#days").select("1");
  cy.get("#months").select("January");
  cy.get("#years").select("2000");
  cy.get("#first_name").type("Test");
  cy.get("#last_name").type("User");
  cy.get("#address1").type("123 Street");
  cy.get("#country").select("India");
  cy.get("#state").type("State");
  cy.get("#city").type("City");
  cy.get("#zipcode").type("123456");
  cy.get("#mobile_number").type("9876543210");
  cy.get("button[data-qa='create-account']").click();
});

Then("My account should be created", () => {
  cy.contains("Account Created!").should("be.visible");
  cy.get("a[data-qa='continue-button']").click();
});

Then("I should be logged in successfully", () => {
  cy.contains("Logged in as").should("contain.text", "Test User");
});

Then("I should see an error message for existing email", () => {
  cy.contains("Email Address already exist!").should("be.visible");
});
