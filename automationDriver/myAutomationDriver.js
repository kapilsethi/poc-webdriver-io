class MyAutomationDriver {
    openPage(pageUrl) {
        browser.url(pageUrl);
    }

    getPageTitle() {
        return browser.getTitle();
    }

    click(identifier) {
        $(identifier).click();
    }

    enterText(identifier, textToEnter) {
        $(identifier).setValue(textToEnter);
    }

    selectOption(identifier, optionToSelect) {
        $(identifier).selectByVisibleText(optionToSelect);
    }

    getText(identifier) {
        return $(identifier).getText();
    }

    waitForDisplayed(identifier) {
        $(identifier).waitForDisplayed();
    }
}
module.exports = MyAutomationDriver;