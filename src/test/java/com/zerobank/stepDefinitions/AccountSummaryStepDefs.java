package com.zerobank.stepDefinitions;

import com.zerobank.pages.AccountSummaryPage;
import com.zerobank.utilities.Driver;
import io.cucumber.java.en.And;
import io.cucumber.java.en.Then;
import org.junit.Assert;

import java.util.List;

public class AccountSummaryStepDefs {
    AccountSummaryPage accountSummaryPage = new AccountSummaryPage();
    @Then("The page title should be {string}")
    public void thePageTitleShouldBe(String expectedTitle) {
        Assert.assertEquals(expectedTitle,Driver.get().getTitle());
    }

    @And("The user clicks Account Summary link")
    public void theUserClicksAccountSummaryLink() {
        accountSummaryPage.accountSummaryLink.click();
    }

    @Then("The actual page subtitles should be equal below list")
    public void theActualPageSubtitlesShouldBeEqualBelowList(List<String> subtitles) {
        accountSummaryPage.allSubtitlesAreVisible(subtitles);
        System.out.println(subtitles);
    }

    @Then("The Credits Accounts subheads should be visible")
    public void theCreditsAccountsSubheadsShouldBeVisible() {
        accountSummaryPage.allCreditAccountSubHeadsAreVisible();
    }


}
