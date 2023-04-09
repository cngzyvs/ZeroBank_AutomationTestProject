

Feature: Login

  Scenario: Login with valid credential

    Given Go to related page and clicks sign in button
    When The user enters valis user name "username" and password "password"
    And The user navigates back
    Then The user should be logged in


  Scenario Outline: Login with invalid credential
    Given Go to related page and clicks sign in button
    When The user tries to log in with invalid credential "<userName>" "<password>" and clicks the sign in button
    Then The user shouldn't be logged in instead should see warning message "<message>"
    Examples:
      | userName | password | message                          |
      | userName | password | Login and/or password are wrong. |
      | username | pasSword | Login and/or password are wrong. |
      |          | password | Login and/or password are wrong. |
      | username |          | Login and/or password are wrong. |

