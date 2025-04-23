class CartPage {
  visit() {
    cy.visit('/view_cart');
  }

  proceedToCheckout() {
    cy.contains('Proceed To Checkout').click();
  }
}
export default CartPage;
