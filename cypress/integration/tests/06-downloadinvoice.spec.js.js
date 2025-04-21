describe('Payment and Invoice Download Test', () => {
    before(() => {
        // Visit home and login with existing user (from signup step)
        cy.login();
        cy.SelectHome();
        cy.SelectProducts();
        cy.addProductToCart();
        cy.viewcart();
        cy.CartProductDetails();
        cy.PlaceOrder();
    });

    it('should make a payment successfully', () => {
        // Navigate to payment page
        cy.payment();

    it('should download the invoice successfully', () => {
        cy.downloadInvoice();
    });
});