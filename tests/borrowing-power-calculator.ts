import { howMuchCouldIBorrow } from "pages/how-much-could-i-borrow";
import * as testData from "../test-data/test-data.json";

describe('Borrowing Power Calculator Test -->', async () => {
    it('User should be able to calculate how much he/she can borrow based on the inputs', async () => {
        await howMuchCouldIBorrow.openPage();
        await howMuchCouldIBorrow.verifyPageTitle();
        await howMuchCouldIBorrow.selectApplicationTypeAsSingle();
        await howMuchCouldIBorrow.selectNumberOfDependents(testData.numberOfDependents);
        await howMuchCouldIBorrow.selectHomeToLiveIn();
        await howMuchCouldIBorrow.enterIncomeBeforeTax(testData.incomeBeforeTax);
        await howMuchCouldIBorrow.enterOtherIncome(testData.otherIncome);
        await howMuchCouldIBorrow.enterLivingExpenses(testData.livingExpenses);
        await howMuchCouldIBorrow.enterCurrentHomeLoanRepayments(testData.currentHomeLoanRepayments);
        await howMuchCouldIBorrow.enterOtherLoanRepayments(testData.otherLoanRepayments);
        await howMuchCouldIBorrow.enterOtherCommitments(testData.otherCommitments);
        await howMuchCouldIBorrow.enterTotalCreditCardLimits(testData.totalCreditCardLimits);
        await howMuchCouldIBorrow.clickHowMuchCanIBorrowButton();
        await howMuchCouldIBorrow.verifyHowMuchCanIBorrowTextResult("We estimate you could borrow:");
        await howMuchCouldIBorrow.verifyHowMuchCanIBorrowAmountResult("$508,000");
        await howMuchCouldIBorrow.verifyHowMuchCouldIBorrowIsNotDisplayed();
    });

    it('User should be able to clear the form when start over is clicked', async () => {
        await howMuchCouldIBorrow.clickStartOver();
        await howMuchCouldIBorrow.verifyHowMuchCouldIBorrowIsDisplayed();
        await howMuchCouldIBorrow.verifyYourIncomeBeforeTax('0');
        await howMuchCouldIBorrow.verifyOtherIncome('0');
        await howMuchCouldIBorrow.verifyLivingExpenses('0');
        await howMuchCouldIBorrow.verifyOtherLoanRepayments('0');
        await howMuchCouldIBorrow.verifyTotalCreditCardLimits('0');
    });
});