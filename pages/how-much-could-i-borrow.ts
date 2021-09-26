import { helper } from "automation-driver/helper";

class HowMuchCouldIBorrow {
    private readonly identifiers = {
        singleApplicationType: "label[for='application_type_single']",
        numberOfDependants: "select[title='Number of dependants']",
        homeToLiveIn: "label[for='borrow_type_home']",
        incomeBeforeTax: "input[aria-labelledby='q2q1']",
        otherIncome: "input[aria-labelledby='q2q2']",
        livingExpenses: "input[aria-labelledby='q3q1']",
        currentHomeLoanRepayments: "input[aria-labelledby='q3q2']",
        otherLoanRepayments: "input[aria-labelledby='q3q3']",
        otherCommitments: "input[aria-labelledby='q3q4']",
        totalCreditCardLimits: "input[aria-labelledby='q3q5']",
        howMuchCouldIBorrowButton: ".btn--borrow__calculate",
        howMuchCouldIBorrowTextResult: ".borrow__result__text[aria-live='assertive']",
        howMuchCouldIBorrowAmountResult: ".borrow__result__text__amount",
        startOver: ".borrow__result .icon_restart"
    }

    async selectApplicationTypeAsSingle() {
        await helper.click(this.identifiers.singleApplicationType);
    }

    async selectNumberOfDependents(numberOfDependantsToSelect) {
        await helper.selectOption(this.identifiers.numberOfDependants, numberOfDependantsToSelect);
    }

    async selectHomeToLiveIn() {
        await helper.click(this.identifiers.homeToLiveIn);
    }

    async enterIncomeBeforeTax(incomeToEnter) {
        await helper.enterText(this.identifiers.incomeBeforeTax, incomeToEnter);
    }

    async enterOtherIncome(otherIncomeToEnter) {
        await  helper.enterText(this.identifiers.otherIncome, otherIncomeToEnter);
    }

    async enterLivingExpenses(livingExpensesToEnter) {
        await helper.enterText(this.identifiers.livingExpenses, livingExpensesToEnter);
    }

    async enterCurrentHomeLoanRepayments (currentHomeLoanRepaymentsToEnter) {
        await helper.enterText(this.identifiers.currentHomeLoanRepayments, currentHomeLoanRepaymentsToEnter)
    }

    async enterOtherLoanRepayments(otherLoanRepaymentsToEnter) {
        await helper.enterText(this.identifiers.otherLoanRepayments, otherLoanRepaymentsToEnter)
    }

    async enterOtherCommitments(otherCommitmentsToEnter) {
        await helper.enterText(this.identifiers.otherCommitments, otherCommitmentsToEnter);
    }

    async enterTotalCreditCardLimits(totalCreditCardLimitsToEnter) {
        await helper.enterText(this.identifiers.totalCreditCardLimits, totalCreditCardLimitsToEnter)
    }

    async clickHowMuchCanIBorrowButton() {
        await helper.scrollIntoView(this.identifiers.howMuchCouldIBorrowButton);
        await helper.click(this.identifiers.howMuchCouldIBorrowButton);
    }

    async getHowMuchCanIBorrowTextResult() {
        await helper.waitForDisplayed(this.identifiers.howMuchCouldIBorrowTextResult);
        return await helper.getText(this.identifiers.howMuchCouldIBorrowTextResult);
    }

    async getHowMuchCanIBorrowAmountResult() {
        return await helper.getText( this.identifiers.howMuchCouldIBorrowAmountResult);
    }

    async clickStartOver() {
        await helper.click(this.identifiers.startOver);
    }

    async isHowMuchCouldIBorrowDisplayed() {
        return await helper.isDisplayed(this.identifiers.howMuchCouldIBorrowButton);
    }

    async getYourIncomeBeforeTax() {
        return await helper.getValue(this.identifiers.incomeBeforeTax);
    }

    async getOtherIncome() {
        return await helper.getValue(this.identifiers.otherIncome);
    }

    async getLivingExpenses() {
        return await helper.getValue(this.identifiers.livingExpenses);
    }

    async getOtherLoanRepayments() {
        return await helper.getValue(this.identifiers.otherLoanRepayments);
    }

    async getTotalCreditCardLimits() {
        return await helper.getValue(this.identifiers.totalCreditCardLimits);
    }
}

const howMuchCouldIBorrow = new HowMuchCouldIBorrow();
export { howMuchCouldIBorrow };