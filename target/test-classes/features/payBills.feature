
Feature: Pay Bills

  Background:
    Given Go to related page and clicks sign in button
    When The user enters valis user name "username" and password "password"
    And The user navigates back
    And The user clicks more services button
    And The user clicks Account Summary link
    And The user clicks Pay Bills tab


  Scenario: Pay Bills Page Tests
    Then The page title should be "Zero - Pay Bills"
    When The user enters required payment inputs "Sprint" "Loan" "1000" "12122012"
    Then Verify the successful payment with success message "The payment was successfully submitted."

@wip
  Scenario Outline: Pay Bill Page Missing Data Tests
    When The user fills the form with missing data "<payee>" "<accountType>" "<amount>" "<date>"
    Then The user should be able to see warning message "<message>" "<status>"

    Examples:
      | status | payee           | accountType | date     | message                   | amount |
      | true   | Bank of America | Savings     | 01012022 | Lütfen bu alanı doldurun. |        |
      |        | Apple           | Loan        |          | Lütfen bu alanı doldurun. | 10000  |

@wip
  Scenario Outline: Pay Bill Page Charachter variations Tests
    When The user fills the form with invalid data "<payee>" "<accountType>" "<amount>" "<date>"
    Then The user should not be able to see success message "<status>"
    Then The user should be able to see warning message "<status>"
    Examples:
      | payee           | accountType | date     | amount | status |
      | Bank of America | Savings     | 01012022 | abc    | true   |
      | Bank of America | Savings     | 01012022 | \]*    | true   |
      | Bank of America | Savings     | abc      | 123    | false  |




