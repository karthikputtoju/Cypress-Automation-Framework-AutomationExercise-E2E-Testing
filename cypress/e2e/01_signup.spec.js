describe('User Signup', () => {
  it('Test scenario - should sign up successfully with generated credentials', () => {
    cy.fixture('user').then((user) => {
      cy.visit('Base URL'); // Replace with the actual base URL
      cy.url().should('include', 'automationexercise.com'); // Verify the URL
      cy.contains('Signup / Login').click();

      cy.get('[data-qa="signup-name"]').type(user.name);
      cy.get('[data-qa="signup-email"]').type(user.email);
      cy.get('[data-qa="signup-button"]').click();

      cy.get('#id_gender1').check(); // Select Mr.
      cy.get('[data-qa="name"]').should('be.visible');
      cy.get('[data-qa="name"]').should('have.value', user.name);
      cy.get('[data-qa="email"]').should('have.value', user.email);
      cy.get('[data-qa="password"]').type(user.password);
      cy.get('[data-qa="days"]').select('1').should('have.value', '1');
      cy.get('[data-qa="months"]').select('January').should('have.value', '1');
      cy.get('[data-qa="years"]').select('1990').should('have.value', '1990');
      cy.get('#newsletter').check();
      cy.get('#optin').check();

      cy.contains('Address Information').should('be.visible');
      cy.get('[data-qa="first_name"]').type(user.name);
      cy.get('[data-qa="last_name"]').type(user.name);
      cy.get('[data-qa="company"]').type('Test Company');
      cy.get('[data-qa="address"]').type('123 Test St');
      cy.get('[data-qa="address2"]').type('Apt 4B');
      cy.get('[data-qa="country"]').select('United States').should('have.value', 'United States');
      cy.get('[data-qa="state"]').type('California');
      cy.get('[data-qa="city"]').type('Los Angeles');
      cy.get('[data-qa="zipcode"]').type('90001');
      cy.get('[data-qa="mobile_number"]').type('1234567890');
      cy.get('[data-qa="create-account"]').click();
      cy.contains('Account Created!').should('be.visible');

      cy.get('[data-qa="continue-button"]').click();
      cy.contains('Logged in as').should('be.visible');
      cy.contains(`Logged in as ${user.name}`).should('be.visible');
    });
  });
});
