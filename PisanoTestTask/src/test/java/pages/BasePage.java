package pages;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import utilities.Driver;

public class BasePage {
    public BasePage(){
        PageFactory.initElements(Driver.get(), this);
    }

    @FindBy(id = "psn-widget-button-frame")
    public WebElement widgetFrame;

    @FindBy(className = "widget-button")
    public WebElement widgetButton;

    @FindBy(id = "psn-widget-content-frame")
    public WebElement psnFrame;

    @FindBy(xpath = "//span[contains(text(),'7')]")
    public WebElement scorePoint;

    @FindBy(className = "emojione")
    public WebElement reaction;

    @FindBy(xpath = "//div[contains(text(),'Next Page')]")
    public WebElement nextPageButton;

    @FindBy(xpath = "//input[@type='text' and @id='78c3febe-85a2-4c11-8b94-f92d15ce6387']")
    public WebElement clickHereInput;

    @FindBy(xpath = "/html/body/div/div/div/div[2]/div/div/div/div[2]/div[1]/div[2]")
    public WebElement acceptRadioButton;

    @FindBy(xpath = "//span[contains(text(),'I d')]")
    public WebElement notAcceptRadioButton;

    @FindBy(xpath = "//div[contains(text(),'Next Page')]")
    public WebElement nextPageButtonTwo;

    @FindBy(xpath = "//input[@type='email' and @id='82c5b3f1-20d3-49f7-9611-9e01859868b5']")
    public WebElement emailInput;

    @FindBy(xpath = "//input[@type='text' and @id='69714fd9-af95-4740-a9c7-e28424eb337c']")
    public WebElement nameInput;

    @FindBy(xpath = "//input[@type='tel' and @id='018297be-b0f8-4080-aeff-fa730108d7b2']")
    public WebElement phoneInput;

    @FindBy(xpath = "//div[contains(text(),'Submit')]")
    public WebElement submitButton;

    @FindBy(xpath = "//span[contains(text(),'Pisano ')]")
    public WebElement pisanoRadioButton;

    @FindBy(xpath = "//div[contains(text(),'Thanks, I think test were succeeded')]")
    public WebElement responseText;



}
