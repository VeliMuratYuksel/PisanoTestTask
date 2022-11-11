package step_definitions;

import io.cucumber.java.en.And;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import org.junit.Assert;
import org.openqa.selenium.chrome.ChromeDriver;
import pages.BasePage;
import utilities.ConfigurationReader;
import utilities.Driver;

public class PisanoStepDef {

    BasePage basePage = new BasePage();

    @Given("Navigate to URL")
    public void navigateToURL() throws InterruptedException {
        Driver.get().get(ConfigurationReader.get("url"));
        Thread.sleep(5000);
    }

    @When("Go to under frame and click widget button")
    public void goToUnderFrameAndClickWidgetButton()  throws InterruptedException {
        Driver.get().switchTo().frame(basePage.widgetFrame);
        basePage.widgetButton.click();
        Thread.sleep(5000);

    }

    @Then("Score with numbers")
    public void scoreBetweenTo()  throws InterruptedException {
        Driver.get().switchTo().defaultContent();
        Driver.get().switchTo().frame(basePage.psnFrame);
        basePage.scorePoint.click();
        Thread.sleep(5000);

    }

    @Then("Score with using emoji")
    public void scoreWithUsingEmoji()  throws InterruptedException {
        basePage.reaction.click();
        Thread.sleep(5000);

    }

    @And("Click next page button")
    public void clickNextPageButton()  throws InterruptedException {
        basePage.nextPageButton.click();
        Thread.sleep(5000);


    }

    @Then("Fill the blanks in input place ok")
    public void fillTheBlanksInInputPlaceOk()  throws InterruptedException {
        basePage.clickHereInput.click();
        Thread.sleep(5000);

    }

    @Then("Click radio button that I have read and accept")
    public void clickRadioButtonThatIHaveReadAndAccept()  throws InterruptedException {
        basePage.acceptRadioButton.click();
        Thread.sleep(5000);

    }

    @Then("Select Pisano")
    public void selectPisano()  throws InterruptedException {
        basePage.pisanoRadioButton.click();
        Thread.sleep(5000);

    }

    @And("Click the next page button")
    public void clickTheNextPageButton()  throws InterruptedException {
        basePage.nextPageButtonTwo.click();
        Thread.sleep(5000);

    }

    @Then("Fill the email , phone and name inputs")
    public void fillTheEMailPhoneAndNameInputs()  throws InterruptedException {
        basePage.emailInput.sendKeys(ConfigurationReader.get("email"));
        basePage.nameInput.sendKeys(ConfigurationReader.get("name"));
        basePage.phoneInput.sendKeys(ConfigurationReader.get("phone"));
        Thread.sleep(5000);

    }

    @Then("Verify the succesful message")
    public void verifyTheSuccesfulMessage()  throws InterruptedException {
        Thread.sleep(5000);
        Assert.assertTrue(basePage.responseText.isDisplayed());


    }

    @Then("Click Submit button")
    public void clickSubmitButton() throws InterruptedException {
        Thread.sleep(5000);
        basePage.submitButton.click();
    }

    @Then("Click radio button that not accept")
    public void clickRadioButtonThatNotAccept() throws InterruptedException {

        basePage.notAcceptRadioButton.click();
        Thread.sleep(5000);


    }

    @Then("See first page")
    public void seeFirstPage() throws InterruptedException {
        Thread.sleep(5000);
        Assert.assertTrue(basePage.scorePoint.isDisplayed());
        Thread.sleep(5000);


    }
}
