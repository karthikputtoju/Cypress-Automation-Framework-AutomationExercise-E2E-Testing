class SignUpPage {
  visit() {
    cy.visit('/signup');
  }

  fillSignUpForm({ name, email, password }) {
    cy.get('#name').type(name);
    cy.get('#email').type(email);
    cy.get('#password').type(password);
    cy.get('form').submit();
  }
}
export default SignUpPage;
