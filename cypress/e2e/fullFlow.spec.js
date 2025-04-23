import SignUpPage from '../support/pages/SignUpPage';
import LoginPage from '../support/pages/LoginPage';
import ProductPage from '../support/pages/ProductPage';
import CartPage from '../support/pages/CartPage';
import CheckoutPage from '../support/pages/CheckoutPage';
import PaymentPage from '../support/pages/PaymentPage';
import OrderConfirmationPage from '../support/pages/OrderConfirmationPage';
import AccountPage from '../support/pages/AccountPage';

describe('Complete Purchase Flow', () => {
  const signUpPage = new SignUpPage();
  const loginPage = new LoginPage();
  const productPage = new ProductPage();
  const cartPage = new CartPage();
  const checkoutPage = new CheckoutPage();
  const paymentPage = new PaymentPage();
  const orderConfirmationPage = new OrderConfirmationPage();
  const accountPage = new AccountPage();

  before(() => {
    cy.fixture('user').as('userData');
  });

  it('should complete the full user journey', function () {
    // 1. Sign Up
    signUpPage.visit();
    signUpPage.fillSignUpForm(this.userData.user);

    // 2. Login
    loginPage.login(Cypress.env('login_email'), Cypress.env('login_password'));

    // 3. Add product to cart
    productPage.visit();
    productPage.addProductToCart('Cool T-shirt');

    // 4. Proceed to checkout
    cartPage.visit();
    cartPage.proceedToCheckout();

    // 5. Fill checkout details
    checkoutPage.fillAddressDetails(this.userData.address);

    // 6. Payment
    paymentPage.fillPaymentInfo(this.userData.card);

    // 7. Confirm order
    orderConfirmationPage.confirmSuccess();
    orderConfirmationPage.downloadInvoice();

    // 8. Logout & Delete
    accountPage.logout();
    accountPage.deleteAccount();
  });
});

