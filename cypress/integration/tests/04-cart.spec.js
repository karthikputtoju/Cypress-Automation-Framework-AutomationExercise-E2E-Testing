describe('Checkout Cart FLow', () => {
    before(() => {
        cy.login();
        cy.SelectHome();
        cy.SelectProducts();
        cy.addProductToCart()
    });

    it('Should be able to view cart', () => {
      // Check the Cart Items of products selected
        cy.viewcart();

      // Check the Product name, price, quantity, and total price
        cy.CartProductDetails();
    });
});
