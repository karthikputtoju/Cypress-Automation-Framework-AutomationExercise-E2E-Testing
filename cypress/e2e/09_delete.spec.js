describe('Delete User Account', () => {
  beforeEach(() => {
    cy.fixture('user').then((user) => {
      cy.visit('Base URL'); // Replace with the actual base URL
      cy.url().should('include', 'automationexercise.com'); // Verify the URL
      cy.contains('Signup / Login').click();
      cy.get('[data-qa="login-email"]').type(user.email);
      cy.get('[data-qa="login-password"]').type(user.password);
      cy.get('[data-qa="login-button"]').click();

      cy.contains(`Logged in as ${user.name}`).should('be.visible');
    });
  });
  
    it('Test scenarios - should delete the user account', () => {
      cy.visit('Base URL'); // Replace with the actual base URL
      cy.url().should('include', 'automationexercise.com'); // Verify the URL
      cy.contains('Delete Account').click(); // Click on the 'Delete Account' link
      cy.get('[data-qa="continue-button"]').should('be.visible'); // Verify the 'Continue' button is visible
      cy.get('[data-qa="continue-button"]').click(); // Click on the 'Continue' button
    });
  });
  