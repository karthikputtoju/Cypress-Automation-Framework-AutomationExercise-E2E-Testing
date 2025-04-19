describe('User Logout Test', () => {
    before(() => {
      // Visit home and login with existing user (from signup step)
      cy.visit('/');
      cy.contains('Signup / Login').click();
  
      const user = Cypress.env('newUser');
      if (!user) {
        throw new Error('User not found in Cypress.env. Run signup.spec.js first.');
      }
  
      cy.get('[data-qa="login-email"]').type(user.email);
      cy.get('[data-qa="login-password"]').type(user.password);
      cy.get('[data-qa="login-button"]').click();
  
      cy.contains('Logged in as').should('contain', user.name.split(' ')[0]);
    });
  
    it('should logout the user successfully', () => {
      cy.contains('Logout').click();
  
      // Validate the user is redirected to login page
      cy.url().should('include', '/login');
      cy.contains('Signup / Login').should('be.visible');
    });
  });
  