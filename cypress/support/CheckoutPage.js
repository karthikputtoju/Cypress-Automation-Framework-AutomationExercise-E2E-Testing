class CheckoutPage {
  fillAddressDetails({ address, city, zip }) {
    cy.get('#address1').type(address);
    cy.get('#city').type(city);
    cy.get('#zip').type(zip);
    cy.get('form').submit();
  }
}
export default CheckoutPage;
