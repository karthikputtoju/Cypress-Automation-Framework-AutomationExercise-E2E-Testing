Feature: Download Invoice

  Scenario: Download the invoice for placed order
    Given I have placed an order
    When I click on Download Invoice
    Then The invoice should be downloaded successfully
