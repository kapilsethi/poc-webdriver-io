import { expect } from "chai";
import { getLogger } from "log4js";
const logger = getLogger();
logger.level = "debug";

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

    async getElements(identifier) {
        await this.waitForDisplayed(identifier);
        return await $$(identifier);
    }

    async verifyTextChangesTo(identifier, expectedText, timeout) {
        try {
            await browser.waitUntil(
                async() => {
                    const actualText = await this.getText(identifier);
                    logger.info(`######## current text is: ${actualText} and expecting it to be ${expectedText} ########`);
                    return (actualText.trim() === expectedText);
                }, {
                    timeout: timeout * 1000,
                    timeoutMsg: "not matched"});
        }
        catch(error) {
            expect.fail(`element ${identifier} text did not change to ${expectedText}`);
        }
    }
}

const helper = new Helper();
export { helper };