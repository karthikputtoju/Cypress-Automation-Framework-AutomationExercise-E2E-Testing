describe('Checkout order the product', () => {
    before(() => {
        cy.login();
        cy.SelectHome();
        cy.SelectProducts();
        cy.addProductToCart();
        cy.viewcart();
        cy.CartProductDetails();
    });
    it('Checkout order the product', () => {
        cy.fixture('user').then((user) => {
        
        // Click on 'Proceed To Checkout' button
        cy.PlaceOrder();
 
        });
    });
});