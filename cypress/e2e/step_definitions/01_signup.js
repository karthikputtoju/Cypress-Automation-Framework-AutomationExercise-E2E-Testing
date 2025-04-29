// cypress/e2e/step_definitions/signup.js
import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import { faker } from '@faker-js/faker';

const user = {
  name: faker.person.firstName(),
  email: faker.internet.email(),
  password: faker.internet.password({ length: 10 })
};

Given("I open the website", () => {
  cy.visit("https://automationexercise.com");
});

When("I navigate to Signup page", () => {
  cy.contains("Signup / Login").click();
});

When("I enter unique name and email address", () => {
  cy.get('[data-qa="signup-name"]').type(user.name);
  cy.get('[data-qa="signup-email"]').type(user.email);
  cy.get('[data-qa="signup-button"]').click();
});

When("I fill out the signup form with valid data", () => {
  cy.get('#id_gender1').check();
  cy.get('#password').type(user.password);
  cy.get('#days').select('1');
  cy.get('#months').select('January');
  cy.get('#years').select('2000');
  cy.get('#first_name').type(user.name);
  cy.get('#last_name').type('Test');
  cy.get('#address1').type('123 Cypress Street');
  cy.get('#state').type('TestState');
  cy.get('#city').type('TestCity');
  cy.get('#zipcode').type('12345');
  cy.get('#mobile_number').type('9999999999');
  cy.get('[data-qa="create-account"]').click();

  // Save user data to file for later login
  cy.writeFile('cypress/fixtures/userData.json', user);
});

Then("My account should be created", () => {
  cy.contains('Account Created!').should('be.visible');
  cy.get('[data-qa="continue-button"]').click();
});

Then("I should be logged in successfully", () => {
  cy.contains(`Logged in as ${user.name}`).should('be.visible');
});
