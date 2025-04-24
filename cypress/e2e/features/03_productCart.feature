Feature: Product Cart Operations

  Scenario: Add products to cart
    Given I am logged in
    When I navigate to the Products page
    And I add products to the cart
    Then The products should be added successfully

  Scenario: View cart contents
    Given I have added products to the cart
    When I view the cart
    Then I should see the added products with details

  Scenario: Remove product from cart
    Given I have added products to the cart
    When I remove a product from the cart
    Then The cart should be updated accordingly
