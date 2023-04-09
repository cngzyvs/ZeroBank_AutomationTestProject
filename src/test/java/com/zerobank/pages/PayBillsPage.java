package com.zerobank.pages;

import org.junit.Assert;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.ui.Select;

public class PayBillsPage extends BasePage{

    @FindBy(xpath = "//li/a[.='Pay Bills']")
    public WebElement payBillsTab;

    @FindBy(xpath = "(//select)[1]")
    public WebElement selectBoxOne;

    @FindBy(xpath = "(//select)[2]")
    public WebElement selectBoxTwo;

    @FindBy(xpath = "//input[@id='sp_amount']")
    public WebElement amountBox;

    @FindBy(xpath = "//input[@id='sp_date']")
    public WebElement dateBox;

    @FindBy(id = "pay_saved_payees")
    public WebElement payButton;

    @FindBy(xpath = "//div[@id='alert_content']")
    public WebElement paymentSuccessMessage;


    public void fillPaymentKnowledge(String selectTextForPayee,String selectTextForAccount, String amount, String date){
        Select select = new Select(selectBoxOne);
        select.selectByVisibleText(selectTextForPayee);
        Select select1 = new Select(selectBoxTwo);
        select1.selectByVisibleText(selectTextForAccount);
        amountBox.sendKeys(amount);
        dateBox.sendKeys(date);
    }

//    public void fillPaymentKnowledgeWithoutDate(String selectTextForPayee,String selectTextForAccount, String amount, String date){
//        Select select = new Select(selectBoxOne);
//        select.selectByVisibleText(selectTextForPayee);
//        Select select1 = new Select(selectBoxTwo);
//        select1.selectByVisibleText(selectTextForAccount);
//        amountBox.sendKeys(amount);
//        dateBox.sendKeys(date);
//
//    }
//
//    public void fillPaymentKnowledgeWithoutAmount(String selectTextForPayee,String selectTextForAccount, String amount, String date){
//        Select select = new Select(selectBoxOne);
//        select.selectByVisibleText(selectTextForPayee);
//        Select select1 = new Select(selectBoxTwo);
//        select1.selectByVisibleText(selectTextForAccount);
//        amountBox.sendKeys(amount);
//        dateBox.sendKeys(date);
//    }

    public void verifySuccessPayment(String message){
        Assert.assertEquals(message,paymentSuccessMessage.getText());
    }

//    public void verifyWithWarningMessage(String message){
//
//           Assert.assertEquals(message, amountBox.getAttribute("validationMessage"));
//
//    }
}
