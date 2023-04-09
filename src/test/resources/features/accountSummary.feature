

Feature: Account Summary Page Tests

  Background:
    Given Go to related page and clicks sign in button
    When The user enters valis user name "username" and password "password"
    And The user navigates back
    And The user clicks more services button
    And The user clicks Account Summary link

@wip
  Scenario: Account summary title and page subtitles assertion

    Then The page title should be "Zero - Account Summary"
    Then The actual page subtitles should be equal below list
      | Cash Accounts       |
      | Investment Accounts |
      | Credit Accounts     |
      | Loan Accounts       |
Then The Credits Accounts subheads should be visible