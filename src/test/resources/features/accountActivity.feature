

Feature: Account Activity

  Background:
    Given Go to related page and clicks sign in button
    When The user enters valis user name "username" and password "password"
    And The user navigates back
    And The user clicks more services button
    And The user clicks Account Summary link
    And The user clicks Account Activity tab

@wip
  Scenario: Account Activity Verifications
    Then The page title should be "Zero - Account Activity"
    Then The account menu's default choice should be "Savings"
    Then The account menu's selections should be below list
      | Savings    |
      | Checking    |
      | Loan        |
      | Credit Card |
      | Brokerage   |
    Then The transactions table's heahs should be visible