package com.zerobank.stepDefinitions;

import com.zerobank.utilities.Driver;
import io.cucumber.java.After;
import io.cucumber.java.Before;
import io.cucumber.java.Scenario;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;

import java.util.concurrent.TimeUnit;

public class Hooks {

    @Before
    public void setUps(){
        Driver.get().manage().window().maximize();
        Driver.get().manage().timeouts().implicitlyWait(7, TimeUnit.SECONDS);

    }
    @After
    public void tearDown(Scenario scenario){

        if (scenario.isFailed()){
            byte[] screenshots = ((TakesScreenshot) Driver.get()).getScreenshotAs(OutputType.BYTES);
            scenario.attach(screenshots,"image/png","screenshot");
        }
        Driver.closeDriver();

    }
}
