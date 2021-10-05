import { depositCalculatorPage } from "pages/deposit-calculator-page";
import * as testData from "../test-data/deposit-calculator-test-data.json"

describe('Home deposit, costs and stamp duty calculator tests', async () => {
    it('User should be able to calculate upfornt cost based on the inputs', async () => {
        await depositCalculatorPage.openDepositCalculatorPage();
        await depositCalculatorPage.selectInvestTypeAsResidential();
        await depositCalculatorPage.selectPropertyState(testData.propertyState);
        await depositCalculatorPage.selectPropertyType(testData.propertyType);
        await depositCalculatorPage.enterEstimatedPropertyValue(testData.estimatedPropertyValue);
        await depositCalculatorPage.enterContribution(testData.contribution);
        await depositCalculatorPage.verifyEstimatedUpfrontCosts(testData.estimatedUpfrontCosts);
        await depositCalculatorPage.verifyStampDutyUpfrontCosts(testData.stampDutyUpfrontCosts);
        await depositCalculatorPage.verifyConcessions(testData.concessions);
        await depositCalculatorPage.verifyOtherGovernmentCosts(testData.otherGovernmentCosts);
        await depositCalculatorPage.verifyConveyancing(testData.conveyancing);
        await depositCalculatorPage.verifyBankCharges(testData.bankCharges);
        await depositCalculatorPage.verifyLmi(testData.lmi);
        await depositCalculatorPage.verifyYourEstimatedDeposit(testData.yourEstimatedDeposit);
        await depositCalculatorPage.verifyHowMuchYouHaveNow(testData.howMuchYouHaveNow);
        await depositCalculatorPage.verifyFirstHomeOwnerGrant(testData.firstHomeOwnerGrant);
        await depositCalculatorPage.verifyTotalUpfrontEstimatedCosts(testData.estimatedUpfrontCostsinDeposit);
    });
});