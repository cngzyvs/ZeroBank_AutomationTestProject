package com.zerobank.stepDefinitions;

import com.zerobank.pages.PayBillsPage;
import com.zerobank.utilities.BrowserUtils;
import io.cucumber.java.en.And;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import org.junit.Assert;

public class PayBillsStepDefs {

    PayBillsPage payBillsPage = new PayBillsPage();

    @And("The user clicks Pay Bills tab")
    public void theUserClicksPayBillsTab() {
        payBillsPage.payBillsTab.click();
    }


    @When("The user enters required payment inputs {string} {string} {string} {string}")
    public void theUserEntersRequiredPaymentInputs(String payee, String accountType, String amount, String date) {
        payBillsPage.fillPaymentKnowledge(payee,accountType,amount,date);
        payBillsPage.payButton.click();
        System.out.println(payBillsPage.amountBox.getAttribute("validationMessage"));
    }

    @Then("Verify the successful payment with success message {string}")
    public void verifyTheSuccessfulPaymentWithSuccessMessage(String paymentMessage) {
        payBillsPage.verifySuccessPayment(paymentMessage);
    }


    @When("The user fills the form with missing data {string} {string} {string} {string}")
    public void theUserFillsTheFormWithMissingData(String payee, String accountType, String amount, String date) {
        payBillsPage.fillPaymentKnowledge(payee,accountType,amount,date);
        payBillsPage.payButton.click();
    }

    @Then("The user should be able to see warning message {string} {string}")
    public void theUserShouldBeAbleToSeeWarningMessage(String message, String status) {
        if (status.equalsIgnoreCase("true")){
            Assert.assertEquals(message,payBillsPage.amountBox.getAttribute("validationMessage"));}
        else
            Assert.assertEquals(message,payBillsPage.dateBox.getAttribute("validationMessage"));

    }


    @Then("The user should not be able to see success message {string}")
    public void theUserShouldNotBeAbleToSeeSuccessMessage(String status) {
        if (status.equalsIgnoreCase("true"))
        Assert.assertTrue(payBillsPage.paymentSuccessMessage.getText().equalsIgnoreCase("The payment was successfully submitted."));
    }

    @When("The user fills the form with invalid data {string} {string} {string} {string}")
    public void theUserFillsTheFormWithInvalidData(String payee, String accountType, String amount, String date) {
        payBillsPage.fillPaymentKnowledge(payee,accountType,amount,date);
        payBillsPage.payButton.click();
    }

    @Then("The user should be able to see warning message {string}")
    public void theUserShouldBeAbleToSeeWarningMessage(String status) {
        if (status.equalsIgnoreCase("false")){
            Assert.assertTrue(payBillsPage.dateBox.getAttribute("validationMessage").equalsIgnoreCase("Lütfen bu alanı doldurun."));
        }
    }
}
