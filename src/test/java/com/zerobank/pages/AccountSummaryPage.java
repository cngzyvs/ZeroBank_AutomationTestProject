package com.zerobank.pages;

import org.junit.Assert;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

import java.util.List;

public class AccountSummaryPage extends BasePage {

    @FindBy(xpath = "//h4//span[.='Account Summary']")
    public WebElement accountSummaryLink;

    @FindBy(xpath = "//h2")
    public List<WebElement> accountSummaryPageSubtitles;

    @FindBy(xpath = "//h2")
    public List<WebElement> creditAccountSubHeads;


    public void allSubtitlesAreVisible(List<String> list) {
        for (int i = 0; i < list.size(); i++) {
            Assert.assertEquals(list.get(i), accountSummaryPageSubtitles.get(i).getText());
        }
    }

    public void allCreditAccountSubHeadsAreVisible() {
        for (int i = 0; i < creditAccountSubHeads.size(); i++) {
            Assert.assertTrue(creditAccountSubHeads.get(i).isDisplayed());
        }
    }




}
