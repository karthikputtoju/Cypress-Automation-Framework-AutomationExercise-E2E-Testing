describe('User Logout Test', () => {
    before(() => {
      // Visit home and login with existing user (from signup step)
      cy.login();
    });
  
    it('should logout the user successfully', () => {
      cy.contains('Logout').click();
  
      // Validate the user is redirected to login page
      cy.url().should('include', '/login');
      cy.contains('Signup / Login').should('be.visible');
    });
  });
  