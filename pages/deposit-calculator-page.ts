import { helper } from "automation-driver/helper"
import { expect } from "chai";

class DepositCalculatorPage {
    private readonly identifiers = {
        residentialInvestment: "label[for='htl_no']",
        propertyState: "#propertyState",
        propertyType: "#propertyType",
        qualifyForFirstHomeOwnerSchemeOptionNo: "label[for='fhos_no']",
        propertyValue: "#propertyValue",
        contribution: "#contribution",
    }

    private readonly expectedTexts = {
        pageTitle: "Home deposit, costs and stamp duty calculator | ANZ",
    }

    async openDepositCalculatorPage() {
        await helper.openPage("deposit-calculator/");
        const pageTitle = await helper.getPageTitle();
        const title = await helper.getPageTitle();
        expect(title).to.equal(this.expectedTexts.pageTitle);
    }

    async selectInvestTypeAsResidential() {
        await helper.waitForDisplayed(this.identifiers.residentialInvestment);
        await helper.click(this.identifiers.residentialInvestment);
        const isFirstHomeOwnerSchemeOptionDisplayed = await helper.isDisplayed(this.identifiers.qualifyForFirstHomeOwnerSchemeOptionNo);
        expect(isFirstHomeOwnerSchemeOptionDisplayed, 
            "first home owner scheme options were not expected to be displayed").to.false;
    }

    async selectPropertyState(stateToSelect) {
        await helper.waitForDisplayed(this.identifiers.propertyState);
        await helper.selectOption(this.identifiers.propertyState, stateToSelect);
    }

    async selectPropertyType(propertyTypeToSelect) {
        await helper.waitForDisplayed(this.identifiers.propertyType);
        await helper.selectOption(this.identifiers.propertyType, propertyTypeToSelect);
    }

    async enterEstimatedPropertyValue(estimatedPropertyValue) {
        await helper.waitForDisplayed(this.identifiers.propertyValue);
        await helper.enterText(this.identifiers.propertyValue, estimatedPropertyValue);
    }

    async enterContribution(contribution) {
        await helper.waitForDisplayed(this.identifiers.contribution);
        await helper.enterText(this.identifiers.contribution, contribution);
        await browser.pause(10000);
    }
}

const depositCalculatorPage = new DepositCalculatorPage();
export { depositCalculatorPage };