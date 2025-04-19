describe('User Logout Test', () => {
    before(() => {
      // Visit home and login with existing user (from signup step)
      cy.login();
    });
  
    it('should logout the user successfully', () => {
      cy.logout();
    });
  });
  