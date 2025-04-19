describe('Browse Products and Add to Cart', () => {

    before(() => {
      cy.login();
    });

    
  
    it('Add 3rd Women Saree to Cart', () => {
      
      // Navigate to Home
      cy.get('.shop-menu > .nav > :nth-child(1) > a').click();

      // Wait for products to load
      cy.get('.shop-menu > .nav > :nth-child(2) > a').click();
      
      // WOMEN → TOPS
      cy.contains('Women').click(); // Click on Women
      cy.contains('Saree').click(); // Click on Tops
      cy.url().should('include', '/category_products'); // Verify URL contains category_products
      cy.contains('Women - Saree Products').should('be.visible'); // Verify page contains 'Saree'

      // Hover 3rd product (Saree)
      cy.get('.features_items .product-image-wrapper').eq(2).trigger('mouseover');
      cy.wait(500); // Wait for hover effect to take place
      cy.get('.features_items .product-image-wrapper').eq(2).find('.add-to-cart').click({ multiple: true });

      // Continue Shopping
      cy.contains('Continue Shopping').click();
    });
 });