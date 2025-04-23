class ProductPage {
  visit() {
    cy.visit('/products');
  }

  addProductToCart(productName) {
    // Locate product by name and click "Add to Cart"
    cy.contains(productName).click();
    cy.contains('Add to Cart').click();
  }
}
export default ProductPage;
