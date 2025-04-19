import { faker } from '@faker-js/faker';

Cypress.Commands.add('createNewUser', () => {
  const newUser = {
    name: faker.person.fullName(),
    email: faker.internet.email(),
    password: faker.internet.password(),
    address: faker.location.streetAddress(),
    city: faker.location.city(),
    state: faker.location.state(),
    zip: faker.location.zipCode(),
    mobile: faker.phone.number('+91##########'),
  };

  // Store the user object in Cypress environment for future use
  Cypress.env('newUser', newUser);

  // Go to site and start signup
  cy.visit('/');
  cy.contains('Signup / Login').click();

  // Fill name and email in the signup form
  cy.get('[data-qa="signup-name"]').type(newUser.name);
  cy.get('[data-qa="signup-email"]').type(newUser.email);
  cy.get('[data-qa="signup-button"]').click();

  // Complete the signup form
  cy.get('#id_gender1').check(); // Gender
  cy.get('#password').type(newUser.password);
  cy.get('#days').select('10');
  cy.get('#months').select('June');
  cy.get('#years').select('1995');

  cy.get('#first_name').type(newUser.name.split(' ')[0]);
  cy.get('#last_name').type(newUser.name.split(' ')[1] || 'Test');
  cy.get('#address1').type(newUser.address);
  cy.get('#state').type(newUser.state);
  cy.get('#city').type(newUser.city);
  cy.get('#zipcode').type(newUser.zip);
  cy.get('#mobile_number').type(newUser.mobile);

  // Submit form
  cy.get('[data-qa="create-account"]').click();

  // Assert account is created
  cy.contains('Account Created!').should('be.visible');

  cy.writeFile('cypress/fixtures/user.json', newUser);

});


Cypress.Commands.add('login', () => {
    cy.fixture('user').then((user) => {
      cy.visit('/');
      cy.contains('Signup / Login').click();
      cy.get('[data-qa="login-email"]').type(user.email);
      cy.get('[data-qa="login-password"]').type(user.password);
      cy.get('[data-qa="login-button"]').click();
      cy.contains('Logged in as').should('contain', user.name.split(' ')[0]);
    });
});


Cypress.Commands.add('SelectHome', () => {
        cy.get('.shop-menu > .nav > :nth-child(1) > a').click();
    });

Cypress.Commands.add('SelectProducts', () => {
    cy.fixture('user').then((user) => {
        cy.visit('/');
        cy.get('.shop-menu > .nav > :nth-child(2) > a').click();
        cy.url().should('include', '/products');
        cy.contains('Products').should('be.visible');
        cy.get('.features_items').should('be.visible');
        cy.get('.features_items .product-image-wrapper').should('have.length.greaterThan', 0);
        cy.get('.features_items .product-image-wrapper .choose').should('be.visible');
        cy.get('.features_items .product-image-wrapper .choose .nav').should('be.visible');
        cy.get('.features_items .product-image-wrapper .choose .nav').contains('View Product').should('be.visible');
    });
});

Cypress.Commands.add('addProductToCart', () => {
    cy.fixture('user').then((user) => {
        cy.visit('/');
        cy.get('.shop-menu > .nav > :nth-child(2) > a').click();
        cy.url().should('include', '/products');
        cy.contains('Products').should('be.visible');
        // WOMEN → TOPS
        cy.contains('Women').click(); // Click on Women
        cy.contains('Saree').click(); // Click on Tops
        cy.url().should('include', '/category_products'); // Verify URL contains category_products
        cy.contains('Women - Saree Products').should('be.visible'); // Verify page contains 'Saree'
        // Hover 3rd product (Saree)
        cy.get('.features_items .product-image-wrapper').eq(2).trigger('mouseover');
        cy.wait(500); // Wait for hover effect to take place
        cy.get('.features_items .product-image-wrapper .choose .nav').eq(2).click(); // Click on 'View Product' to add cart
        cy.get(':nth-child(5) > .btn').click(); // Click on 'Add to cart'
        cy.get('.modal-content').should('be.visible'); // Verify modal content is visible
        cy.get('.modal-content').contains('Continue Shopping').should('be.visible'); // Verify continue shopping button
        cy.contains('Continue Shopping').click();
    });
});

Cypress.Commands.add('ViewProductCart', () => {
    cy.fixture('user').then((user) => {
        cy.visit('/');
        cy.get('.shop-menu > .nav > :nth-child(2) > a').click();
        cy.url().should('include', '/products');
        cy.contains('Products').should('be.visible');
        cy.get('.features_items .product-image-wrapper').eq(2).trigger('mouseover');
        cy.wait(500); // Wait for hover effect to take place
        cy.get('.features_items .product-image-wrapper .choose .nav').eq(2).click(); // Click on 'View Product'
        cy.url().should('include', '/product_details');
        cy.contains('Product Details').should('be.visible');
        cy.get('.product-information').should('be.visible');
        cy.get('.product-information .product-name').should('be.visible');
        cy.get('.product-information .product-name').contains('Saree').should('be.visible');
        cy.get('.product-information .product-price').should('be.visible');
        cy.get('.product-information .product-price').contains('Rs. 5000').should('be.visible');
        cy.get('.product-information .product-quantity').should('be.visible');
        cy.get('.product-information .product-quantity').contains('Quantity').should('be.visible');
        cy.get('.product-information .product-quantity').contains('In Stock').should('be.visible');
        cy.get('.product-information .product-description').should('be.visible');
        cy.get('.product-information .product-description').contains('This is a product description').should('be.visible');
        cy.get('.product-information .product-add-to-cart').should('be.visible');
        cy.get('.product-information .product-add-to-cart').contains('Add to cart').should('be.visible');
        cy.get('.product-information .product-add-to-cart').click();
        cy.url().should('include', '/cart');
        cy.contains('Product added').should('be.visible');
        });
        });

Cypress.Commands.add('viewcart', () => {
    cy.fixture('user').then((user) => {
        cy.visit('/');
        cy.contains('Cart').click();
        cy.url().should('include', '/view_cart');
        cy.contains('Cart').should('be.visible');
        }); 
});

Cypress.Commands.add('deleteProduct', () => {
    cy.fixture('user').then((user) => {
        cy.visit('/');
        cy.contains('Cart').click();
        cy.url().should('include', '/view_cart');
        cy.get('[data-qa="delete-product"]').click();
        cy.get('.modal-body').should('be.visible');
        cy.get('.modal-body').contains('Product removed').should('be.visible');
    });
});

Cypress.Commands.add('checkout', () => {
    cy.fixture('user').then((user) => {
        cy.visit('/');
        cy.contains('Checkout').click();
        cy.url().should('include', '/checkout');
        cy.contains('Checkout').should('be.visible');
        cy.get('#billing-name').type(user.name);
        cy.get('#billing-address').type(user.address);
        cy.get('#billing-email').type(user.email);
        cy.get('#billing-phone').type(user.phone);
        cy.get('#billing-city').type(user.city);
        cy.get('#billing-state').type(user.state);
        cy.get('#billing-postalcode').type(user.postalcode);
        cy.get('#billing-country').select('United States');
        cy.get('#billing-zip').type(user.zip);
        cy.get('#billing-cardnumber').type(user.cardnumber);
        cy.get('#billing-expiry').type(user.expiry);
        cy.get('#billing-cvv').type(user.cvv);
        cy.get('#billing-submit').click();
        cy.url().should('include', '/order_confirmation');
        cy.contains('Order confirmed').should('be.visible');
    });
});

Cypress.Commands.add('downloadInvoice', () => {
    cy.fixture('user').then((user) => {
        cy.visit('/');
        cy.contains('Download Invoice').click();
        cy.url().should('include', '/download_invoice');
        cy.contains('Invoice').should('be.visible');
        cy.get('#invoice-download').click();
        cy.url().should('include', '/invoice.pdf');
        cy.get('#invoice-download').should('have.attr', 'download');
        cy.get('#invoice-download').should('have.attr', 'href').and('include', '/invoice.pdf');
    });
});

Cypress.Commands.add('logout', () => {
    cy.contains('Logout').click();
    cy.url().should('include', '/login');
    cy.contains('Signup / Login').should('be.visible');
});