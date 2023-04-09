package com.zerobank.stepDefinitions;

import com.zerobank.pages.LoginPage;
import com.zerobank.utilities.ConfigurationReader;
import com.zerobank.utilities.Driver;
import io.cucumber.java.en.And;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import org.junit.Assert;
import org.junit.Test;

public class LodinStepDefs {

    LoginPage loginPage = new LoginPage();

    @Given("Go to related page and clicks sign in button")
    public void go_to_related_page_and_clicks_sign_in_button() {

        Driver.get().get(ConfigurationReader.get("url"));
//        loginPage.signinButton.click();
    }

    @When("The user enters valis user name {string} and password {string}")
    public void the_user_enters_valis_user_name_and_password(String username, String password) {
        loginPage.login(username,password);

//        loginPage.userLoginBox.sendKeys(username);
//        loginPage.userPasswordBox.sendKeys(password);
//        loginPage.innerSignInButton.click();
    }

    @When("The user navigates back")
    public void the_user_navigates_back() {
        Driver.get().navigate().back();
    }


    @Then("The user should be logged in")
    public void the_user_should_be_logged_in() {
        String expectedText = "username";
        String actualText = loginPage.usernameText.getText();
        Assert.assertEquals(expectedText, actualText);
        System.out.println(actualText);
    }

    @When("The user tries to log in with invalid credential {string} {string} and clicks the sign in button")
    public void theUserTriesToLogInWithInvalidCredentialAndClicksTheSignInButton(String userName, String password) {
    loginPage.login(userName,password);
    }

    @Then("The user shouldn't be logged in instead should see warning message {string}")
    public void theUserShouldnTBeLoggedInInsteadShouldSeeWarningMessage(String message) {
     loginPage.loginWithoutValidCredentialsAssertion(message);
    }

    @And("The user clicks more services button")
    public void theUserClicksMoreServicesButton() {
        loginPage.onlineBankinkButton.click();
    }


}
