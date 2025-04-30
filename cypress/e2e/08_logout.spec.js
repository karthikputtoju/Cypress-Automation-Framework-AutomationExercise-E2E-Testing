describe('User Logout', () => {
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
  
    it('Test scenario - should logout the user successfully', () => {
      cy.visit('Base URL'); // Replace with the actual base URL
      cy.url().should('include', 'automationexercise.com'); // Verify the URL
      cy.contains('Logout').click(); // Click on the 'Logout' link
    });
  });
  