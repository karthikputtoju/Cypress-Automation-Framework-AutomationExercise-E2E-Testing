Feature: User Signup

  Scenario: Successful signup with valid information
    Given I open the website
    When I navigate to Signup page
    And I enter unique name and email address
    And I fill out the signup form with valid data
    Then My account should be created
    And I should be logged in successfully

  Scenario: Signup with existing email
    Given I open the website
    When I navigate to Signup page
    And I enter a name and an existing email address
    Then I should see an error message for existing email
