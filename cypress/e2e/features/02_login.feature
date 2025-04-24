Feature: User Login

  Scenario: Login with valid credentials
    Given I open the website
    When I navigate to Login page
    And I enter valid email and password
    Then I should be logged in successfully

  Scenario: Login with invalid credentials
    Given I open the website
    When I navigate to Login page
    And I enter invalid email or password
    Then I should see an error message
