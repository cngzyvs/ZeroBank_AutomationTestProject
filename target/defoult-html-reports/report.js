$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/accountActivity.feature");
formatter.feature({
  "name": "Account Activity",
  "description": "",
  "keyword": "Feature"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "Go to related page and clicks sign in button",
  "keyword": "Given "
});
formatter.match({
  "location": "com.zerobank.stepDefinitions.LodinStepDefs.go_to_related_page_and_clicks_sign_in_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The user enters valis user name \"username\" and password \"password\"",
  "keyword": "When "
});
formatter.match({
  "location": "com.zerobank.stepDefinitions.LodinStepDefs.the_user_enters_valis_user_name_and_password(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The user navigates back",
  "keyword": "And "
});
formatter.match({
  "location": "com.zerobank.stepDefinitions.LodinStepDefs.the_user_navigates_back()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The user clicks more services button",
  "keyword": "And "
});
formatter.match({
  "location": "com.zerobank.stepDefinitions.LodinStepDefs.theUserClicksMoreServicesButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The user clicks Account Summary link",
  "keyword": "And "
});
formatter.match({
  "location": "com.zerobank.stepDefinitions.AccountSummaryStepDefs.theUserClicksAccountSummaryLink()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The user clicks Account Activity tab",
  "keyword": "And "
});
formatter.match({
  "location": "com.zerobank.stepDefinitions.AccoutActivity_StepDefs.theUserClicksAccountActivityTab()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Account Activity Verifications",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@wip"
    }
  ]
});
formatter.step({
  "name": "The page title should be \"Zero - Account Activity\"",
  "keyword": "Then "
});
formatter.match({
  "location": "com.zerobank.stepDefinitions.AccountSummaryStepDefs.thePageTitleShouldBe(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The account menu\u0027s default choice should be \"Savings\"",
  "keyword": "Then "
});
formatter.match({
  "location": "com.zerobank.stepDefinitions.AccoutActivity_StepDefs.theAccountMenuSDefaultChoiceShouldBe(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The account menu\u0027s selections should be below list",
  "rows": [
    {},
    {},
    {},
    {},
    {}
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "com.zerobank.stepDefinitions.AccoutActivity_StepDefs.theAccountMenuSSelectionsShouldBeBelowList(java.util.List\u003cjava.lang.String\u003e)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The transactions table\u0027s heahs should be visible",
  "keyword": "Then "
});
formatter.match({
  "location": "com.zerobank.stepDefinitions.AccoutActivity_StepDefs.theTransactionsTableSHeahsShouldBeVisible()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.uri("file:src/test/resources/features/accountSummary.feature");
formatter.feature({
  "name": "Account Summary Page Tests",
  "description": "",
  "keyword": "Feature"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "Go to related page and clicks sign in button",
  "keyword": "Given "
});
formatter.match({
  "location": "com.zerobank.stepDefinitions.LodinStepDefs.go_to_related_page_and_clicks_sign_in_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The user enters valis user name \"username\" and password \"password\"",
  "keyword": "When "
});
formatter.match({
  "location": "com.zerobank.stepDefinitions.LodinStepDefs.the_user_enters_valis_user_name_and_password(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The user navigates back",
  "keyword": "And "
});
formatter.match({
  "location": "com.zerobank.stepDefinitions.LodinStepDefs.the_user_navigates_back()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The user clicks more services button",
  "keyword": "And "
});
formatter.match({
  "location": "com.zerobank.stepDefinitions.LodinStepDefs.theUserClicksMoreServicesButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The user clicks Account Summary link",
  "keyword": "And "
});
formatter.match({
  "location": "com.zerobank.stepDefinitions.AccountSummaryStepDefs.theUserClicksAccountSummaryLink()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Account summary title and page subtitles assertion",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@wip"
    }
  ]
});
formatter.step({
  "name": "The page title should be \"Zero - Account Summary\"",
  "keyword": "Then "
});
formatter.match({
  "location": "com.zerobank.stepDefinitions.AccountSummaryStepDefs.thePageTitleShouldBe(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The actual page subtitles should be equal below list",
  "rows": [
    {},
    {},
    {},
    {}
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "com.zerobank.stepDefinitions.AccountSummaryStepDefs.theActualPageSubtitlesShouldBeEqualBelowList(java.util.List\u003cjava.lang.String\u003e)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The Credits Accounts subheads should be visible",
  "keyword": "Then "
});
formatter.match({
  "location": "com.zerobank.stepDefinitions.AccountSummaryStepDefs.theCreditsAccountsSubheadsShouldBeVisible()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.uri("file:src/test/resources/features/payBills.feature");
formatter.feature({
  "name": "Pay Bills",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "Pay Bill Page Missing Data Tests",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@wip"
    }
  ]
});
formatter.step({
  "name": "The user fills the form with missing data \"\u003cpayee\u003e\" \"\u003caccountType\u003e\" \"\u003camount\u003e\" \"\u003cdate\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "The user should be able to see warning message \"\u003cmessage\u003e\" \"\u003cstatus\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "status",
        "payee",
        "accountType",
        "date",
        "message",
        "amount"
      ]
    },
    {
      "cells": [
        "true",
        "Bank of America",
        "Savings",
        "01012022",
        "Lütfen bu alanı doldurun.",
        ""
      ]
    },
    {
      "cells": [
        "",
        "Apple",
        "Loan",
        "",
        "Lütfen bu alanı doldurun.",
        "10000"
      ]
    }
  ]
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "Go to related page and clicks sign in button",
  "keyword": "Given "
});
formatter.match({
  "location": "com.zerobank.stepDefinitions.LodinStepDefs.go_to_related_page_and_clicks_sign_in_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The user enters valis user name \"username\" and password \"password\"",
  "keyword": "When "
});
formatter.match({
  "location": "com.zerobank.stepDefinitions.LodinStepDefs.the_user_enters_valis_user_name_and_password(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The user navigates back",
  "keyword": "And "
});
formatter.match({
  "location": "com.zerobank.stepDefinitions.LodinStepDefs.the_user_navigates_back()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The user clicks more services button",
  "keyword": "And "
});
formatter.match({
  "location": "com.zerobank.stepDefinitions.LodinStepDefs.theUserClicksMoreServicesButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The user clicks Account Summary link",
  "keyword": "And "
});
formatter.match({
  "location": "com.zerobank.stepDefinitions.AccountSummaryStepDefs.theUserClicksAccountSummaryLink()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The user clicks Pay Bills tab",
  "keyword": "And "
});
formatter.match({
  "location": "com.zerobank.stepDefinitions.PayBillsStepDefs.theUserClicksPayBillsTab()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Pay Bill Page Missing Data Tests",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@wip"
    }
  ]
});
formatter.step({
  "name": "The user fills the form with missing data \"Bank of America\" \"Savings\" \"\" \"01012022\"",
  "keyword": "When "
});
formatter.match({
  "location": "com.zerobank.stepDefinitions.PayBillsStepDefs.theUserFillsTheFormWithMissingData(java.lang.String,java.lang.String,java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The user should be able to see warning message \"Lütfen bu alanı doldurun.\" \"true\"",
  "keyword": "Then "
});
formatter.match({
  "location": "com.zerobank.stepDefinitions.PayBillsStepDefs.theUserShouldBeAbleToSeeWarningMessage(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "Go to related page and clicks sign in button",
  "keyword": "Given "
});
formatter.match({
  "location": "com.zerobank.stepDefinitions.LodinStepDefs.go_to_related_page_and_clicks_sign_in_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The user enters valis user name \"username\" and password \"password\"",
  "keyword": "When "
});
formatter.match({
  "location": "com.zerobank.stepDefinitions.LodinStepDefs.the_user_enters_valis_user_name_and_password(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The user navigates back",
  "keyword": "And "
});
formatter.match({
  "location": "com.zerobank.stepDefinitions.LodinStepDefs.the_user_navigates_back()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The user clicks more services button",
  "keyword": "And "
});
formatter.match({
  "location": "com.zerobank.stepDefinitions.LodinStepDefs.theUserClicksMoreServicesButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The user clicks Account Summary link",
  "keyword": "And "
});
formatter.match({
  "location": "com.zerobank.stepDefinitions.AccountSummaryStepDefs.theUserClicksAccountSummaryLink()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The user clicks Pay Bills tab",
  "keyword": "And "
});
formatter.match({
  "location": "com.zerobank.stepDefinitions.PayBillsStepDefs.theUserClicksPayBillsTab()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Pay Bill Page Missing Data Tests",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@wip"
    }
  ]
});
formatter.step({
  "name": "The user fills the form with missing data \"Apple\" \"Loan\" \"10000\" \"\"",
  "keyword": "When "
});
formatter.match({
  "location": "com.zerobank.stepDefinitions.PayBillsStepDefs.theUserFillsTheFormWithMissingData(java.lang.String,java.lang.String,java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The user should be able to see warning message \"Lütfen bu alanı doldurun.\" \"\"",
  "keyword": "Then "
});
formatter.match({
  "location": "com.zerobank.stepDefinitions.PayBillsStepDefs.theUserShouldBeAbleToSeeWarningMessage(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Pay Bill Page Charachter variations Tests",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@wip"
    }
  ]
});
formatter.step({
  "name": "The user fills the form with invalid data \"\u003cpayee\u003e\" \"\u003caccountType\u003e\" \"\u003camount\u003e\" \"\u003cdate\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "The user should not be able to see success message \"\u003cstatus\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "name": "The user should be able to see warning message \"\u003cstatus\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "payee",
        "accountType",
        "date",
        "amount",
        "status"
      ]
    },
    {
      "cells": [
        "Bank of America",
        "Savings",
        "01012022",
        "abc",
        "true"
      ]
    },
    {
      "cells": [
        "Bank of America",
        "Savings",
        "01012022",
        "\\]*",
        "true"
      ]
    },
    {
      "cells": [
        "Bank of America",
        "Savings",
        "abc",
        "123",
        "false"
      ]
    }
  ]
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "Go to related page and clicks sign in button",
  "keyword": "Given "
});
formatter.match({
  "location": "com.zerobank.stepDefinitions.LodinStepDefs.go_to_related_page_and_clicks_sign_in_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The user enters valis user name \"username\" and password \"password\"",
  "keyword": "When "
});
formatter.match({
  "location": "com.zerobank.stepDefinitions.LodinStepDefs.the_user_enters_valis_user_name_and_password(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The user navigates back",
  "keyword": "And "
});
formatter.match({
  "location": "com.zerobank.stepDefinitions.LodinStepDefs.the_user_navigates_back()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The user clicks more services button",
  "keyword": "And "
});
formatter.match({
  "location": "com.zerobank.stepDefinitions.LodinStepDefs.theUserClicksMoreServicesButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The user clicks Account Summary link",
  "keyword": "And "
});
formatter.match({
  "location": "com.zerobank.stepDefinitions.AccountSummaryStepDefs.theUserClicksAccountSummaryLink()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The user clicks Pay Bills tab",
  "keyword": "And "
});
formatter.match({
  "location": "com.zerobank.stepDefinitions.PayBillsStepDefs.theUserClicksPayBillsTab()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Pay Bill Page Charachter variations Tests",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@wip"
    }
  ]
});
formatter.step({
  "name": "The user fills the form with invalid data \"Bank of America\" \"Savings\" \"abc\" \"01012022\"",
  "keyword": "When "
});
formatter.match({
  "location": "com.zerobank.stepDefinitions.PayBillsStepDefs.theUserFillsTheFormWithInvalidData(java.lang.String,java.lang.String,java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The user should not be able to see success message \"true\"",
  "keyword": "Then "
});
formatter.match({
  "location": "com.zerobank.stepDefinitions.PayBillsStepDefs.theUserShouldNotBeAbleToSeeSuccessMessage(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The user should be able to see warning message \"true\"",
  "keyword": "Then "
});
formatter.match({
  "location": "com.zerobank.stepDefinitions.PayBillsStepDefs.theUserShouldBeAbleToSeeWarningMessage(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "Go to related page and clicks sign in button",
  "keyword": "Given "
});
formatter.match({
  "location": "com.zerobank.stepDefinitions.LodinStepDefs.go_to_related_page_and_clicks_sign_in_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The user enters valis user name \"username\" and password \"password\"",
  "keyword": "When "
});
formatter.match({
  "location": "com.zerobank.stepDefinitions.LodinStepDefs.the_user_enters_valis_user_name_and_password(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The user navigates back",
  "keyword": "And "
});
formatter.match({
  "location": "com.zerobank.stepDefinitions.LodinStepDefs.the_user_navigates_back()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The user clicks more services button",
  "keyword": "And "
});
formatter.match({
  "location": "com.zerobank.stepDefinitions.LodinStepDefs.theUserClicksMoreServicesButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The user clicks Account Summary link",
  "keyword": "And "
});
formatter.match({
  "location": "com.zerobank.stepDefinitions.AccountSummaryStepDefs.theUserClicksAccountSummaryLink()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The user clicks Pay Bills tab",
  "keyword": "And "
});
formatter.match({
  "location": "com.zerobank.stepDefinitions.PayBillsStepDefs.theUserClicksPayBillsTab()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Pay Bill Page Charachter variations Tests",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@wip"
    }
  ]
});
formatter.step({
  "name": "The user fills the form with invalid data \"Bank of America\" \"Savings\" \"\\]*\" \"01012022\"",
  "keyword": "When "
});
formatter.match({
  "location": "com.zerobank.stepDefinitions.PayBillsStepDefs.theUserFillsTheFormWithInvalidData(java.lang.String,java.lang.String,java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The user should not be able to see success message \"true\"",
  "keyword": "Then "
});
formatter.match({
  "location": "com.zerobank.stepDefinitions.PayBillsStepDefs.theUserShouldNotBeAbleToSeeSuccessMessage(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The user should be able to see warning message \"true\"",
  "keyword": "Then "
});
formatter.match({
  "location": "com.zerobank.stepDefinitions.PayBillsStepDefs.theUserShouldBeAbleToSeeWarningMessage(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "Go to related page and clicks sign in button",
  "keyword": "Given "
});
formatter.match({
  "location": "com.zerobank.stepDefinitions.LodinStepDefs.go_to_related_page_and_clicks_sign_in_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The user enters valis user name \"username\" and password \"password\"",
  "keyword": "When "
});
formatter.match({
  "location": "com.zerobank.stepDefinitions.LodinStepDefs.the_user_enters_valis_user_name_and_password(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The user navigates back",
  "keyword": "And "
});
formatter.match({
  "location": "com.zerobank.stepDefinitions.LodinStepDefs.the_user_navigates_back()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The user clicks more services button",
  "keyword": "And "
});
formatter.match({
  "location": "com.zerobank.stepDefinitions.LodinStepDefs.theUserClicksMoreServicesButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The user clicks Account Summary link",
  "keyword": "And "
});
formatter.match({
  "location": "com.zerobank.stepDefinitions.AccountSummaryStepDefs.theUserClicksAccountSummaryLink()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The user clicks Pay Bills tab",
  "keyword": "And "
});
formatter.match({
  "location": "com.zerobank.stepDefinitions.PayBillsStepDefs.theUserClicksPayBillsTab()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Pay Bill Page Charachter variations Tests",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@wip"
    }
  ]
});
formatter.step({
  "name": "The user fills the form with invalid data \"Bank of America\" \"Savings\" \"123\" \"abc\"",
  "keyword": "When "
});
formatter.match({
  "location": "com.zerobank.stepDefinitions.PayBillsStepDefs.theUserFillsTheFormWithInvalidData(java.lang.String,java.lang.String,java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The user should not be able to see success message \"false\"",
  "keyword": "Then "
});
formatter.match({
  "location": "com.zerobank.stepDefinitions.PayBillsStepDefs.theUserShouldNotBeAbleToSeeSuccessMessage(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The user should be able to see warning message \"false\"",
  "keyword": "Then "
});
formatter.match({
  "location": "com.zerobank.stepDefinitions.PayBillsStepDefs.theUserShouldBeAbleToSeeWarningMessage(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});