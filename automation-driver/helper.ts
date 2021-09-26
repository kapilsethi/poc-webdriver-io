class Helper {
    async openPage(pageUrl) {
        await browser.url(pageUrl);
    }

    async getPageTitle() {
        return await browser.getTitle();
    }

    async click(identifier) {
        await this.waitForDisplayed(identifier);
        await $(identifier).click();
    }

    async enterText(identifier, textToEnter) {
        await this.waitForDisplayed(identifier);
        await $(identifier).setValue(textToEnter);
    }

    async selectOption(identifier, optionToSelect) {
        await this.waitForDisplayed(identifier);
        await $(identifier).selectByVisibleText(optionToSelect);
    }

    async getText(identifier) {
        await this.waitForDisplayed(identifier);
        return await $(identifier).getText();
    }

    async waitForDisplayed(identifier) {
        await $(identifier).waitForDisplayed();
    }

    async isDisplayed(identifier) {
        return await $(identifier).isDisplayed();
    }

    async scrollIntoView(identifier) {
        await this.waitForDisplayed(identifier);
        await $(identifier).scrollIntoView();
    }

    async getValue(identifier) {
        await this.waitForDisplayed(identifier);
        return await $(identifier).getValue();
    }
}

const helper = new Helper();
export { helper };