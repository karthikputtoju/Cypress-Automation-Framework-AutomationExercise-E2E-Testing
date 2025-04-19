import { faker } from '@faker-js/faker';

Cypress.Commands.add('createNewUser', () => {
  const newUser = {
    name: faker.person.fullName(),
    email: faker.internet.email(),
    password: faker.internet.password(),
    address: faker.location.streetAddress(),
    city: faker.location.city(),
    state: faker.location.state(),
    zip: faker.location.zipCode(),
    mobile: faker.phone.number('+91##########'),
  };

  // Store the user object in Cypress environment for future use
  Cypress.env('newUser', newUser);

  // Go to site and start signup
  cy.visit('/');
  cy.contains('Signup / Login').click();

  // Fill name and email in the signup form
  cy.get('[data-qa="signup-name"]').type(newUser.name);
  cy.get('[data-qa="signup-email"]').type(newUser.email);
  cy.get('[data-qa="signup-button"]').click();

  // Complete the signup form
  cy.get('#id_gender1').check(); // Gender
  cy.get('#password').type(newUser.password);
  cy.get('#days').select('10');
  cy.get('#months').select('June');
  cy.get('#years').select('1995');

  cy.get('#first_name').type(newUser.name.split(' ')[0]);
  cy.get('#last_name').type(newUser.name.split(' ')[1] || 'Test');
  cy.get('#address1').type(newUser.address);
  cy.get('#state').type(newUser.state);
  cy.get('#city').type(newUser.city);
  cy.get('#zipcode').type(newUser.zip);
  cy.get('#mobile_number').type(newUser.mobile);

  // Submit form
  cy.get('[data-qa="create-account"]').click();

  // Assert account is created
  cy.contains('Account Created!').should('be.visible');

  cy.writeFile('cypress/fixtures/user.json', newUser);

});


Cypress.Commands.add('login', () => {
    cy.fixture('user').then((user) => {
      cy.visit('/');
      cy.contains('Signup / Login').click();
      cy.get('[data-qa="login-email"]').type(user.email);
      cy.get('[data-qa="login-password"]').type(user.password);
      cy.get('[data-qa="login-button"]').click();
      cy.contains('Logged in as').should('contain', user.name.split(' ')[0]);
    });
  });

  