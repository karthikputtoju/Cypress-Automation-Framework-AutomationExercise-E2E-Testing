class LoginPage {
  visit() {
    cy.visit('/login');
  }

  login(email, password) {
    cy.get('#email').type(email);
    cy.get('#password').type(password);
    cy.get('button[type="submit"]').click();
  }
}
export default LoginPage;
