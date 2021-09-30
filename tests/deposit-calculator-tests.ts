import { depositCalculatorPage } from "pages/deposit-calculator-page";

describe.only('Home deposit, costs and stamp duty calculator tests', async () => {
    it.only('User should be able to calculate upfornt cost based on the inputs', async () => {
        await depositCalculatorPage.openDepositCalculatorPage();
        await depositCalculatorPage.selectInvestTypeAsResidential();
        await depositCalculatorPage.selectPropertyState("Victoria (Metro)");
        await depositCalculatorPage.selectPropertyType("Established home");
        await depositCalculatorPage.enterEstimatedPropertyValue("600000");
        await depositCalculatorPage.enterContribution("100000");
    });
});