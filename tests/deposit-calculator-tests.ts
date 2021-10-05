import { depositCalculatorPage } from "pages/deposit-calculator-page";

describe('Home deposit, costs and stamp duty calculator tests', async () => {
    it('User should be able to calculate upfornt cost based on the inputs', async () => {
        await depositCalculatorPage.openDepositCalculatorPage();
        await depositCalculatorPage.selectInvestTypeAsResidential();
        await depositCalculatorPage.selectPropertyState("Victoria (Metro)");
        await depositCalculatorPage.selectPropertyType("Established home");
        await depositCalculatorPage.enterEstimatedPropertyValue("600000");
        await depositCalculatorPage.enterContribution("100000");
        await depositCalculatorPage.verifyEstimatedUpfrontCosts("$34,313");
        await depositCalculatorPage.verifyStampDutyUpfrontCost("$31,070");
        await depositCalculatorPage.verifyConcessions("– $-");
        await depositCalculatorPage.verifyOtherGovernmentCosts("+ $1,643");
        await depositCalculatorPage.verifyConveyancing("+ $1,000");
        await depositCalculatorPage.verifyBankCharges("+ $600");
        await depositCalculatorPage.verifyLmi("n/a");
        await depositCalculatorPage.verifyYourEstimatedDeposit("$65,687");
        await depositCalculatorPage.verifyHowMuchYouHaveNow("$100,000");
        await depositCalculatorPage.verifyFirstHomeOwnerGrant("+ $-");
        await depositCalculatorPage.verifyTotalUpfrontEstimatedCosts("– $34,313");
    });
});