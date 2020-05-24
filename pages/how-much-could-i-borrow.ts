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

    selectApplicationTypeAsSingle() {
        helper.click(this.identifiers.singleApplicationType);
    }

    selectNumberOfDependents(numberOfDependantsToSelect) {
        helper.selectOption(this.identifiers.numberOfDependants, numberOfDependantsToSelect);
    }

    selectHomeToLiveIn() {
        helper.click(this.identifiers.homeToLiveIn);
    }

    enterIncomeBeforeTax(incomeToEnter) {
        helper.enterText(this.identifiers.incomeBeforeTax, incomeToEnter);
    }

    enterOtherIncome(otherIncomeToEnter) {
        helper.enterText(this.identifiers.otherIncome, otherIncomeToEnter);
    }

    enterLivingExpenses(livingExpensesToEnter) {
        helper.enterText(this.identifiers.livingExpenses, livingExpensesToEnter);
    }

    enterCurrentHomeLoanRepayments (currentHomeLoanRepaymentsToEnter) {
        helper.enterText(this.identifiers.currentHomeLoanRepayments, currentHomeLoanRepaymentsToEnter)
    }

    enterOtherLoanRepayments(otherLoanRepaymentsToEnter) {
        helper.enterText(this.identifiers.otherLoanRepayments, otherLoanRepaymentsToEnter)
    }

    enterOtherCommitments(otherCommitmentsToEnter) {
        helper.enterText(this.identifiers.otherCommitments, otherCommitmentsToEnter);
    }

    enterTotalCreditCardLimits(totalCreditCardLimitsToEnter) {
        helper.enterText(this.identifiers.totalCreditCardLimits, totalCreditCardLimitsToEnter)
    }

    clickHowMuchCanIBorrowButton() {
        helper.scrollIntoView(this.identifiers.howMuchCouldIBorrowButton);
        helper.click(this.identifiers.howMuchCouldIBorrowButton);
    }

    getHowMuchCanIBorrowTextResult() {
        helper.waitForDisplayed(this.identifiers.howMuchCouldIBorrowTextResult);
        return helper.getText(this.identifiers.howMuchCouldIBorrowTextResult);
    }

    getHowMuchCanIBorrowAmountResult() {
        return helper.getText( this.identifiers.howMuchCouldIBorrowAmountResult);
    }

    clickStartOver() {
        helper.click(this.identifiers.startOver);
    }

    isHowMuchCouldIBorrowDisplayed() {
        return helper.isDisplayed(this.identifiers.howMuchCouldIBorrowButton);
    }

    getYourIncomeBeforeTax() {
        return helper.getValue(this.identifiers.incomeBeforeTax);
    }

    getOtherIncome() {
        return helper.getValue(this.identifiers.otherIncome);
    }

    getLivingExpenses() {
        return helper.getValue(this.identifiers.livingExpenses);
    }

    getOtherLoanRepayments() {
        return helper.getValue(this.identifiers.otherLoanRepayments);
    }

    getTotalCreditCardLimits() {
        return helper.getValue(this.identifiers.totalCreditCardLimits);
    }
}

let howMuchCouldIBorrow = new HowMuchCouldIBorrow();
export { howMuchCouldIBorrow };