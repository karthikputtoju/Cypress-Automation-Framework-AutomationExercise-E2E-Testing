describe('Browse Products and Add to Cart', () => {
    before(() => {
      cy.login();
    });
  
    it('Add 3rd Women Saree to Cart', () => {
      
      // Navigate to Home
      cy.SelectHome();

      // Wait for products to load
      cy.SelectProducts();
      
      // WOMEN → Saree and select the 3rd product added to cart
      cy.addProductToCart();

    });
});