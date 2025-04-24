Feature: Order Confirmation

  Scenario: Verify order confirmation message
    Given I have placed an order
    Then I should see a confirmation message
    And My order details should be visible
