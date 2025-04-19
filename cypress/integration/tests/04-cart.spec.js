describe('Checkout Cart FLow', () => {
    before(() => {
        cy.login();
        cy.SelectHome();
        cy.SelectProducts();
        cy.AddToCart();
    });

    it('Should be able to view cart', () => {
        cy.viewcart();
    }