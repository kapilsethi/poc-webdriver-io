import { howMuchCouldIBorrowPage } from "pages/how-much-could-i-borrow-page";
import * as testData from "../test-data/test-data.json";

describe('Borrowing Power Calculator Test -->', async () => {
    it('User should be able to calculate how much he/she can borrow based on the inputs', async () => {
        await howMuchCouldIBorrowPage.openHowMuchCanIBorrowPage();
        await howMuchCouldIBorrowPage.selectApplicationTypeAsSingle();
        await howMuchCouldIBorrowPage.selectNumberOfDependents(testData.numberOfDependents);
        await howMuchCouldIBorrowPage.selectHomeToLiveIn();
        await howMuchCouldIBorrowPage.enterIncomeBeforeTax(testData.incomeBeforeTax);
        await howMuchCouldIBorrowPage.enterOtherIncome(testData.otherIncome);
        await howMuchCouldIBorrowPage.enterLivingExpenses(testData.livingExpenses);
        await howMuchCouldIBorrowPage.enterCurrentHomeLoanRepayments(testData.currentHomeLoanRepayments);
        await howMuchCouldIBorrowPage.enterOtherLoanRepayments(testData.otherLoanRepayments);
        await howMuchCouldIBorrowPage.enterOtherCommitments(testData.otherCommitments);
        await howMuchCouldIBorrowPage.enterTotalCreditCardLimits(testData.totalCreditCardLimits);
        await howMuchCouldIBorrowPage.clickHowMuchCanIBorrowButton();
        await howMuchCouldIBorrowPage.verifyHowMuchCanIBorrowTextResult("We estimate you could borrow:");
        await howMuchCouldIBorrowPage.verifyHowMuchCanIBorrowAmountResult("$508,000");
        await howMuchCouldIBorrowPage.verifyHowMuchCouldIBorrowPageIsNotDisplayed();
    });

    it('User should be able to clear the form when start over is clicked', async () => {
        await howMuchCouldIBorrowPage.clickStartOver();
        await howMuchCouldIBorrowPage.verifyHowMuchCouldIBorrowPageIsDisplayed();
        await howMuchCouldIBorrowPage.verifyYourIncomeBeforeTax('0');
        await howMuchCouldIBorrowPage.verifyOtherIncome('0');
        await howMuchCouldIBorrowPage.verifyLivingExpenses('0');
        await howMuchCouldIBorrowPage.verifyOtherLoanRepayments('0');
        await howMuchCouldIBorrowPage.verifyTotalCreditCardLimits('0');
    });
});