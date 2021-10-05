import { helper } from "automation-driver/helper"
import { webTableHelper } from "automation-driver/web-table-helper";
import { expect } from "chai";

class DepositCalculatorPage {
    private readonly identifiers = {
        residentialInvestment: "label[for='htl_no']",
        propertyState: "#propertyState",
        propertyType: "#propertyType",
        qualifyForFirstHomeOwnerSchemeOptionNo: "label[for='fhos_no']",
        propertyValue: "#propertyValue",
        contribution: "#contribution",
        upforntCostValue: ".upfrontcosts__costValue",
        upforntCostTable: "#OC_TABLE",
        estimatedDepositTable: "#YP_TABLE"
    }

    private readonly expectedTexts = {
        pageTitle: "Home deposit, costs and stamp duty calculator | ANZ",
    }

    private readonly rowTexts = {
        stampDutyRowText: "Transfer of Land / Stamp Duty",
        concessions: "Concessions",
        otherGovernmentCosts: "Other government costs",
        conveyancing: "Conveyancing",
        bankCharges: "Bank charges",
        lmi: "LMI",
        howMuchYouHaveNow: "How much you have now",
        firstHomeOwnerGrant: "First Home Owner Grant",
        totalEstimatedUpfrontCosts: "Total estimated upfront costs"
    }

    async openDepositCalculatorPage() {
        await helper.openPage("deposit-calculator/");
        const title = await helper.getPageTitle();
        expect(title).to.equal(this.expectedTexts.pageTitle);
    }

    async selectInvestTypeAsResidential() {
        await helper.click(this.identifiers.residentialInvestment);
        const isFirstHomeOwnerSchemeOptionDisplayed = await helper.isDisplayed(this.identifiers.qualifyForFirstHomeOwnerSchemeOptionNo);
        expect(isFirstHomeOwnerSchemeOptionDisplayed,
            "first home owner scheme options were not expected to be displayed").to.false;
    }

    async selectPropertyState(stateToSelect) {
        await helper.selectOption(this.identifiers.propertyState, stateToSelect);
    }

    async selectPropertyType(propertyTypeToSelect) {
        await helper.selectOption(this.identifiers.propertyType, propertyTypeToSelect);
    }

    async enterEstimatedPropertyValue(estimatedPropertyValue) {
        await helper.enterText(this.identifiers.propertyValue, estimatedPropertyValue);
    }

    async enterContribution(contribution) {
        await helper.enterText(this.identifiers.contribution, contribution);
    }

    async verifyEstimatedUpfrontCosts(expectedCost) {
        const elements = await helper.getElements(this.identifiers.upforntCostValue);
        await helper.verifyTextChangesTo(elements[0], expectedCost, 15);
    }

    async verifyStampDutyUpfrontCosts(expectedCosts) {
        const actualCosts = await webTableHelper.getCellDateFromParticularRow(
            this.identifiers.upforntCostTable, this.rowTexts.stampDutyRowText);
        expect(actualCosts).to.equal(expectedCosts);
    }

    async verifyConcessions(expectedConcessions) {
        const actualConcessions = await webTableHelper.getCellDateFromParticularRow(
            this.identifiers.upforntCostTable, this.rowTexts.concessions);
        expect(actualConcessions).to.equal(expectedConcessions);
    }

    async verifyOtherGovernmentCosts(expectedCosts) {
        const actualCost = await webTableHelper.getCellDateFromParticularRow(
            this.identifiers.upforntCostTable, this.rowTexts.otherGovernmentCosts);
        expect(actualCost).to.equal(expectedCosts);
    }

    async verifyConveyancing(expectedConveyancing) {
        const actualConveyancing = await webTableHelper.getCellDateFromParticularRow(
            this.identifiers.upforntCostTable, this.rowTexts.conveyancing);
        expect(actualConveyancing).to.equal(expectedConveyancing);
    }

    async verifyBankCharges(expectedBankCharges) {
        const actualBankCharges = await webTableHelper.getCellDateFromParticularRow(
            this.identifiers.upforntCostTable, this.rowTexts.bankCharges);
        expect(actualBankCharges).to.equal(expectedBankCharges);
    }

    async verifyLmi(expectedLmi) {
        const actualLmi = await webTableHelper.getCellDateFromParticularRow(
            this.identifiers.upforntCostTable, this.rowTexts.lmi);
        expect(actualLmi).to.equal(expectedLmi);
    }

    async verifyYourEstimatedDeposit(expectedDeposit) {
        const elements = await helper.getElements(this.identifiers.upforntCostValue);
        await helper.verifyTextChangesTo(elements[1], expectedDeposit, 15);
    }

    async verifyHowMuchYouHaveNow(expectedAmount) {
        const actualAmount = await webTableHelper.getCellDateFromParticularRow(
            this.identifiers.estimatedDepositTable, this.rowTexts.howMuchYouHaveNow);
        expect(actualAmount).to.equal(expectedAmount);
    }

    async verifyFirstHomeOwnerGrant(expectedGrantAmount) {
        const actualGrantAmount = await webTableHelper.getCellDateFromParticularRow(
            this.identifiers.estimatedDepositTable, this.rowTexts.firstHomeOwnerGrant);
        expect(actualGrantAmount).to.equal(expectedGrantAmount);
    }

    async verifyTotalUpfrontEstimatedCosts(expectedCosts) {
        const actualCosts = await webTableHelper.getCellDateFromParticularRow(
            this.identifiers.estimatedDepositTable, this.rowTexts.totalEstimatedUpfrontCosts);
        expect(actualCosts).to.equal(expectedCosts);
    }
}

const depositCalculatorPage = new DepositCalculatorPage();
export { depositCalculatorPage };