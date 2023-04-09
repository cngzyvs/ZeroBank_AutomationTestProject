package com.zerobank.pages;

import org.junit.Assert;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

public class LoginPage extends BasePage {


    @FindBy(xpath = "(//li/a[@class='dropdown-toggle'])[2]")
    public WebElement usernameText;

    @FindBy(xpath = "//form/div[@class='alert alert-error']")
    public WebElement loginWarningMessage;

    @FindBy(id = "online-banking")
    public WebElement onlineBankinkButton;
    @FindBy(id = "signin_button")
    public WebElement signinButton;
    @FindBy(xpath = "//div/input[@id='user_password']")
    public WebElement userPasswordBox;

    @FindBy(xpath = "//div/input[@id='user_login']")
    public WebElement userLoginBox;
    @FindBy(name = "submit")
    public WebElement innerSignInButton;


    public void login(String userName, String password) {
        signinButton.click();
        userLoginBox.sendKeys(userName);
        userPasswordBox.sendKeys(password);
        innerSignInButton.click();
    }

    public void loginWithoutValidCredentialsAssertion(String message) {
        String actualWarningMessageText = loginWarningMessage.getText();
        Assert.assertEquals(message,actualWarningMessageText);
    }
}
