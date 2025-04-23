class PaymentPage {
  fillPaymentInfo({ name, number, cvc, expiry }) {
    cy.get('#name-on-card').type(name);
    cy.get('#card-number').type(number);
    cy.get('#cvc').type(cvc);
    cy.get('#expiry-date').type(expiry);
    cy.contains('Pay').click();
  }
}
export default PaymentPage;
