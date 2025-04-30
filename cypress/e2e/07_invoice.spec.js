describe('Invoice Download after Order Confirmation', () => {
  beforeEach(() => {
    cy.fixture('user').then((user) => {
      cy.visit('Base URL'); // Replace with the actual base URL
      cy.url().should('include', 'automationexercise.com'); // Verify the URL
      cy.contains('Signup / Login').click();
      cy.get('[data-qa="login-email"]').type(user.email);
      cy.get('[data-qa="login-password"]').type(user.password);
      cy.get('[data-qa="login-button"]').click();

      cy.contains(`Logged in as ${user.name}`).should('be.visible');
    });
  });

  it('should complete order and download invoice', () => {
    cy.visit('Base URL'); // Replace with the actual base URL
    cy.url().should('include', 'automationexercise.com'); // Verify the URL
    cy.contains('Products').click();
    cy.get('.product-image-wrapper').eq(2).click(); // Click on the third saree (index 2)
    cy.get(':nth-child(1) > .panel-heading > .panel-title > a > .badge').click(); // Click on the 'Sarees' category
    cy.get(':nth-child(5) > .product-image-wrapper').click(); // Click on the first saree in the list
    cy.get('.panel-body > ul > :nth-child(3) > a').click(); // Click on the 'Sarees' category
    cy.contains('Women - Saree Products').should('be.visible'); // Verify the 'Sarees' category is displayed
    cy.get('.product-image-wrapper').eq(2).click(); // Click on the third saree (index 2)
    cy.contains('Beautiful Peacock Blue Cotton Linen Saree').should('be.visible');
    cy.get(':nth-child(5) > .product-image-wrapper > .choose > .nav > li > a').click();
    cy.get(':nth-child(5) > .btn').click(); // Click on the 'Add to Cart' button for the selected saree
    cy.get('.modal-content').should('be.visible'); // Verify the modal content is displayed
    cy.get('.modal-footer > .btn').click(); // Click on the 'Continue Shopping' button in the modal

    cy.contains('Cart').click(); // Click on the 'Cart' link in the navigation bar
    cy.contains('Beautiful Peacock Blue Cotton Linen Saree').should('be.visible');
    cy.get('.cart_description > h4').should('be.visible'); // Verify the cart description is visible
    cy.get('.cart_total_price').should('contain', '5000');

    cy.get('.col-sm-6 > .btn').click(); // Click on the 'Proceed to Checkout' button

    cy.url().should('include', '/checkout'); // Verify the URL includes '/checkout'
    cy.contains('Address Details').should('be.visible'); // Verify the 'Address Details' section is visible
    cy.contains('Review Your Order').should('be.visible'); // Verify the 'Review Your Order' section is visible
    cy.get('textarea[name="message"]').type('Please deliver it quickly!'); // Enter a comment in the message box
    cy.contains('Place Order').click();

    cy.get('[data-qa="name-on-card"]').type('Test User');
    cy.get('[data-qa="card-number"]').type('4111111111111111');
    cy.get('[data-qa="cvc"]').type('123');
    cy.get('[data-qa="expiry-month"]').type('12');
    cy.get('[data-qa="expiry-year"]').type('2026');
    cy.get('[data-qa="pay-button"]').click();

    cy.contains('Order Placed!').should('be.visible');

    cy.contains('Download Invoice').should('be.visible'); // Verify the 'Invoice' section is visible
    cy.get('.col-sm-9 > .btn-default').click(); // Click on the 'Download Invoice' button
    cy.wait(2000); // Optional: wait for the download to complete
    const downloadPath = 'cypress/downloads/invoice.txt';
    cy.readFile(downloadPath).should('exist'); // Verify the file exists

    cy.get('[data-qa="continue-button"]').click(); // Click on the 'Continue' button to go back to the home page
  });
});
