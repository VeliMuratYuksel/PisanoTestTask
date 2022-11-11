$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/PisanoTask.feature");
formatter.feature({
  "name": "PisanoTestTask Tests",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@wip"
    }
  ]
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "Navigate to URL",
  "keyword": "Given "
});
formatter.match({
  "location": "step_definitions.PisanoStepDef.navigateToURL()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Fill and click all related fields with meaningful test data and validate message on last page",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@wip"
    }
  ]
});
formatter.step({
  "name": "Go to under frame and click widget button",
  "keyword": "When "
});
formatter.match({
  "location": "step_definitions.PisanoStepDef.goToUnderFrameAndClickWidgetButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Score with numbers",
  "keyword": "Then "
});
formatter.match({
  "location": "step_definitions.PisanoStepDef.scoreBetweenTo()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Score with using emoji",
  "keyword": "Then "
});
formatter.match({
  "location": "step_definitions.PisanoStepDef.scoreWithUsingEmoji()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click next page button",
  "keyword": "And "
});
formatter.match({
  "location": "step_definitions.PisanoStepDef.clickNextPageButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Fill the blanks in input place ok",
  "keyword": "Then "
});
formatter.match({
  "location": "step_definitions.PisanoStepDef.fillTheBlanksInInputPlaceOk()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click radio button that I have read and accept",
  "keyword": "Then "
});
formatter.match({
  "location": "step_definitions.PisanoStepDef.clickRadioButtonThatIHaveReadAndAccept()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Select Pisano",
  "keyword": "Then "
});
formatter.match({
  "location": "step_definitions.PisanoStepDef.selectPisano()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click the next page button",
  "keyword": "And "
});
formatter.match({
  "location": "step_definitions.PisanoStepDef.clickTheNextPageButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Fill the email , phone and name inputs",
  "keyword": "Then "
});
formatter.match({
  "location": "step_definitions.PisanoStepDef.fillTheEMailPhoneAndNameInputs()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Verify the succesful message \"Thanks, I think test were succeeded\"",
  "keyword": "Then "
});
formatter.match({
  "location": "step_definitions.PisanoStepDef.verifyTheSuccesfulMessage(java.lang.String)"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//div[contains(text(),\u0027Thanks, I think test were succeeded\u0027)]\"}\n  (Session info: MicrosoftEdge\u003d107.0.1418.35)\nFor documentation on this error, please visit: https://selenium.dev/exceptions/#no_such_element\nBuild info: version: \u00274.1.3\u0027, revision: \u00277b1ebf28ef\u0027\nSystem info: host: \u0027DESKTOP-RG0CN32\u0027, ip: \u0027192.168.1.102\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002711.0.16.1\u0027\nDriver info: org.openqa.selenium.edge.EdgeDriver\nCommand: [cc34ff713cf8f401a220163acf26dc23, findElement {using\u003dxpath, value\u003d//div[contains(text(),\u0027Thanks, I think test were succeeded\u0027)]}]\nCapabilities {acceptInsecureCerts: false, browserName: msedge, browserVersion: 107.0.1418.35, javascriptEnabled: true, ms:edgeOptions: {debuggerAddress: localhost:63160}, msedge: {msedgedriverVersion: 107.0.1418.35 (806ca5c53c4f..., userDataDir: C:\\Users\\CERO-M~1\\AppData\\L...}, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), se:cdp: ws://localhost:63160/devtoo..., se:cdpVersion: 107.0.1418.35, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: cc34ff713cf8f401a220163acf26dc23\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:490)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:200)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:133)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:53)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:184)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:167)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:142)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:567)\r\n\tat org.openqa.selenium.remote.ElementLocation$ElementFinder$2.findElement(ElementLocation.java:162)\r\n\tat org.openqa.selenium.remote.ElementLocation.findElement(ElementLocation.java:60)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:385)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:377)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:70)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:39)\r\n\tat com.sun.proxy.$Proxy23.getText(Unknown Source)\r\n\tat step_definitions.PisanoStepDef.verifyTheSuccesfulMessage(PisanoStepDef.java:94)\r\n\tat ✽.Verify the succesful message \"Thanks, I think test were succeeded\"(file:///C:/Users/Cero-Muro/IdeaProjects/WikipediaUI/src/test/resources/features/PisanoTask.feature:17)\r\n",
  "status": "failed"
});
formatter.embedding("image/png", "embedded0.png", "screenshots");
formatter.after({
  "status": "passed"
});
});