class AccountPage {
  logout() {
    cy.contains('Logout').click();
  }

  deleteAccount() {
    cy.contains('Delete Account').click();
    cy.contains('Account Deleted').should('be.visible');
  }
}
export default AccountPage;
