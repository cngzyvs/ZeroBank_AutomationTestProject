package com.zerobank.pages;

import org.junit.Assert;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.ui.Select;

import java.util.List;

public class AccountActivityPage extends BasePage{


    @FindBy(xpath = "//li/a[.='Account Activity']")
    public WebElement accountActivityTab;

    @FindBy(xpath = "//select[@id='aa_accountId']")
    public WebElement selectDropdownMenu;

    @FindBy(xpath = "//select[@id='aa_accountId']")
    public List<WebElement> transactionsTableHeads;
    Select select;
    public void dropDownMenuVerifications(String expectedText){
        select = new Select(selectDropdownMenu);
        String firstSelectedOptionText = select.getFirstSelectedOption().getText();
        Assert.assertEquals(expectedText,firstSelectedOptionText);
    }

    public void dropDownMenuVerificarions(List<String> expectedTexts){
        List<WebElement> menuChoicesList = select.getAllSelectedOptions();
        for (int i = 0; i < menuChoicesList.size(); i++) {
            Assert.assertEquals(expectedTexts.get(i),menuChoicesList.get(i).getText());
        }
    }

    public void transactionsTableHeadsAreVisible(){
        for (WebElement el:transactionsTableHeads) {
            Assert.assertTrue(el.isDisplayed());
        }
    }
}
