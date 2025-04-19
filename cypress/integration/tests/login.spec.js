describe('Login with existing user', () => {
    before(function () {
      // Load user data from fixture
      cy.fixture('user').as('user');
    });
  
    it('should login with existing user credentials', function () {
      cy.visit('/');
      cy.contains('Signup / Login').click();
  
      cy.get('[data-qa="login-email"]').type(this.user.email);
      cy.get('[data-qa="login-password"]').type(this.user.password);
      cy.get('[data-qa="login-button"]').click();
  
      // Verify login
      cy.contains('Logged in as').should('contain', this.user.name.split(' ')[0]);
    });
  });
  