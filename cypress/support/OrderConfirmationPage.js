class OrderConfirmationPage {
  confirmSuccess() {
    cy.contains('Order Confirmed').should('be.visible');
  }

  downloadInvoice() {
    cy.contains('Download Invoice').click();
  }
}
export default OrderConfirmationPage;
