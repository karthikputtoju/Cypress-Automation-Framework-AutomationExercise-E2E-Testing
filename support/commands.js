// cypress/support/commands.js
import { faker } from '@faker-js/faker';


Cypress.Commands.add('generateUser', () => {
    const user = {
        name: faker.person.firstName(),
        email: faker.internet.email(),
        password: faker.internet.password(8),
    };
    cy.writeFile('cypress/fixtures/user.json', user); // Save user to fixture
});


Cypress.Commands.add('CreateUser', () => {
    cy.readFile('cypress/fixtures/user.json').then((user) => {
        cy.visit('Base URL'); // Replace with the actual base URL
        cy.url().should('include', 'automationexercise.com'); // Verify the URL
        cy.contains('Signup / Login').click();

        cy.get('[data-qa="signup-name"]').type(user.name);
        cy.get('[data-qa="signup-email"]').type(user.email);
        cy.get('[data-qa="signup-button"]').click();

        cy.get('#id_gender1').check(); // Select Mr.
        cy.get('[data-qa="name"]').should('be.visible');
        cy.get('[data-qa="name"]').should('have.value', user.name);
        cy.get('[data-qa="email"]').should('have.value', user.email);
        cy.get('[data-qa="password"]').type(user.password);
        cy.get('[data-qa="days"]').select('1').should('have.value', '1');
        cy.get('[data-qa="months"]').select('January').should('have.value', '1');
        cy.get('[data-qa="years"]').select('1990').should('have.value', '1990');
        cy.get('#newsletter').check();
        cy.get('#optin').check();

        cy.contains('Address Information').should('be.visible');
        cy.get('[data-qa="first_name"]').type(user.name);
        cy.get('[data-qa="last_name"]').type(user.name);
        cy.get('[data-qa="company"]').type('Test Company');
        cy.get('[data-qa="address"]').type('123 Test St');
        cy.get('[data-qa="address2"]').type('Apt 4B');
        cy.get('[data-qa="country"]').select('United States').should('have.value', 'United States');
        cy.get('[data-qa="state"]').type('California');
        cy.get('[data-qa="city"]').type('Los Angeles');
        cy.get('[data-qa="zipcode"]').type('90001');
        cy.get('[data-qa="mobile_number"]').type('1234567890');
        cy.get('[data-qa="create-account"]').click();
        cy.contains('Account Created!').should('be.visible');

        cy.get('[data-qa="continue-button"]').click();
        cy.contains('Logged in as').should('be.visible');
        cy.contains(`Logged in as ${user.name}`).should('be.visible');
    });
});

Cypress.Commands.add('loginWithFixtureUser', () => {
    cy.readFile('cypress/fixtures/user.json').then((user) => {
        cy.visit('Base URL'); // Replace with the actual base URL
        cy.url().should('include', 'automationexercise.com'); // Verify the URL
        cy.contains('Signup / Login').click();
        cy.get('[data-qa="login-email"]').type(user.email);
        cy.get('[data-qa="login-password"]').type(user.password);
        cy.get('[data-qa="login-button"]').click();

        cy.contains(`Logged in as ${user.name}`).should('be.visible');
    });
});



Cypress.Commands.add('goToCart', () => {
    cy.contains('Cart').click();
    cy.url().should('include', '/view_cart');
});

Cypress.Commands.add('proceedToCheckoutFromCart', () => {
    cy.goToCart();
    cy.contains('Proceed To Checkout').click();
    cy.contains('Review Your Order').should('be.visible');
});

Cypress.Commands.add('placeOrder', (comment) => {
    cy.proceedToCheckoutFromCart();
    cy.get('textarea[name="message"]').type(comment);
    cy.contains('Place Order').click();
    cy.url().should('include', '/payment');
}
);

Cypress.Commands.add('addProductToCart', (productName) => {
    cy.visit('https://automationexercise.com/products');
    cy.contains(productName).click();
    cy.get('.btn.btn-success.btn-lg').click();
    cy.get('.modal-footer .btn.btn-default').click(); // Close the modal
});

Cypress.Commands.add('confirmProductAdded', (productName) => {
    cy.get('.modal-body').should('contain', productName); // Check if the modal contains the product name
    cy.get('.modal-footer .btn.btn-default').click(); // Close the modal
});

Cypress.Commands.add('ProceedToCheckout', () => {
    cy.get('.btn.btn-success').click(); // Click on the "Proceed to Checkout" button
    cy.url().should('include', '/view_cart'); // Verify that the URL includes '/view_cart'
}
);

Cypress.Commands.add('DownloadInvoice', () => {
    cy.get('.btn.btn-default').click(); // Click on the "Download Invoice" button

    // Wait for the file to download, and ensure it's downloaded to the correct folder.
    cy.wait(2000); // Optional: wait for the download to complete

    const downloadPath = 'cypress/downloads/invoice.pdf';
    cy.readFile(downloadPath).should('exist'); // Verify the file exists
});


Cypress.Commands.add('Logout', () => {
    cy.get('.fa.fa-user').click(); // Click on the user icon
    cy.contains('Logout').click(); // Click on the logout button
    cy.url().should('include', '/login'); // Verify that the URL includes '/login'
});

Cypress.Commands.add('deleteAccount', () => {
    cy.get('.fa.fa-user').click(); // Click on the user icon
    cy.contains('Delete Account').click(); // Click on the delete account button
    cy.url().should('include', '/delete_account'); // Verify that the URL includes '/delete_account'
});

Cypress.Commands.add('confirmAccountDeletion', () => {
    cy.get('.btn.btn-danger').click(); // Click on the confirm deletion button
    cy.url().should('include', '/deleted'); // Verify that the URL includes '/deleted'
});



