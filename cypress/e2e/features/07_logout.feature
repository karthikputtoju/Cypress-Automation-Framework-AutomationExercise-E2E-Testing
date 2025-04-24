Feature: Logout Functionality

  Scenario: Logout after successful login
    Given I am logged in
    When I click on Logout
    Then I should be logged out
    And I should be redirected to the login page
