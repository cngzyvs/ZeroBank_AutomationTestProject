package com.zerobank.stepDefinitions;

import com.zerobank.pages.AccountActivityPage;
import io.cucumber.java.en.And;
import io.cucumber.java.en.Then;
import org.junit.Assert;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

import java.util.List;

public class AccoutActivity_StepDefs {


AccountActivityPage accountActivityPage = new AccountActivityPage();

    @And("The user clicks Account Activity tab")
    public void theUserClicksAccountActivityTab() {
        accountActivityPage.accountActivityTab.click();
    }

    @Then("The account menu's default choice should be {string}")
    public void theAccountMenuSDefaultChoiceShouldBe(String menuDefaultText) {

        accountActivityPage.dropDownMenuVerifications(menuDefaultText);

    }

    @Then("The account menu's selections should be below list")
    public void theAccountMenuSSelectionsShouldBeBelowList(List<String> menuList) {
        accountActivityPage.dropDownMenuVerificarions(menuList);
    }

    @Then("The transactions table's heahs should be visible")
    public void theTransactionsTableSHeahsShouldBeVisible() {
        accountActivityPage.transactionsTableHeadsAreVisible();
    }




}
