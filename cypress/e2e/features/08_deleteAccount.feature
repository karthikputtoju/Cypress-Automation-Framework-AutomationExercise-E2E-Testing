Feature: Delete User Account

  Scenario: Delete the user account after usage
    Given I am logged in
    When I click on Delete Account
    And I confirm deletion
    Then My account should be deleted
    And I should see a confirmation message
