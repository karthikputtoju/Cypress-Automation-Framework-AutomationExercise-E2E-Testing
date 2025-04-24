Feature: Order Checkout Process

  Scenario: Checkout the cart and place order
    Given I have products in my cart
    When I proceed to checkout
    And I enter payment details
    And I confirm the order
    Then The order should be placed successfully
