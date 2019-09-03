var BasePage = require ('./basePage');

class HowMuchCouldIBorrow extends BasePage {

    constructor() {
        super();
        this.driver = super.getMyDriver();
        this.singleApplicationType = "label[for='application_type_single']";
        this.numberOfDependants = "select[title='Number of dependants']";
        this.homeToLiveIn = "label[for='borrow_type_home']";
        this.incomeBeforeTax = "input[aria-labelledby='q2q1']";
        this.otherIncome = "input[aria-labelledby='q2q2']";
        this.livingExpenses = "input[aria-labelledby='q3q1']";
        this.currentHomeLoanRepayments = "input[aria-labelledby='q3q2']";
        this.otherLoanRepayments = "input[aria-labelledby='q3q3']";
        this.otherCommitments = "input[aria-labelledby='q3q4']";
        this.totalCreditCardLimits = "input[aria-labelledby='q3q5']";
        this.howMuchCouldIBorrow = ".btn--borrow__calculate";
        this.howMuchCouldIBorrowTextResult = ".borrow__result__text[aria-live='assertive']";
        this.howMuchCouldIBorrowAmountResult = ".borrow__result__text__amount";
    }

    selectApplicationTypeAsSingle() {
        this.driver.click(this.singleApplicationType);
    }

    selectNumberOfDependents(numberOfDependantsToSelect) {
        this.driver.selectOption(this.numberOfDependants, numberOfDependantsToSelect);
    }

    selectHomeToLiveIn() {
        this.driver.click(this.homeToLiveIn);
    }

    enterIncomeBeforeTax(incomeToEnter) {
        this.driver.enterText(this.incomeBeforeTax, incomeToEnter);
    }

    enterOtherIncome(otherIncomeToEnter) {
        this.driver.enterText(this.otherIncome, otherIncomeToEnter);
    }

    enterLivingExpenses(livingExpensesToEnter) {
        this.driver.enterText(this.livingExpenses, livingExpensesToEnter);
    }

    enterCurrentHomeLoanRepayments (currentHomeLoanRepaymentsToEnter) {
        this.driver.enterText(this.currentHomeLoanRepayments, currentHomeLoanRepaymentsToEnter)
    }

    enterOtherLoanRepayments(otherLoanRepaymentsToEnter) {
        this.driver.enterText(this.otherLoanRepayments, otherLoanRepaymentsToEnter)
    }

    enterOtherCommitments(otherCommitmentsToEnter) {
        this.driver.enterText(this.otherCommitments, otherCommitmentsToEnter);
    }

    enterTotalCreditCardLimits(totalCreditCardLimitsToEnter) {
        this.driver.enterText(this.totalCreditCardLimits, totalCreditCardLimitsToEnter)
    }

    clickHowMuchCanIBorrowButton() {
        this.driver.waitForDisplayed(this.howMuchCouldIBorrow);
        this.driver.click(this.howMuchCouldIBorrow);
    }

    getHowMuchCanIBorrowTextResult() {
        this.driver.waitForDisplayed(this.howMuchCouldIBorrowTextResult);
        return this.driver.getText(this.howMuchCouldIBorrowTextResult);
    }

    getHowMuchCanIBorrowAmountResult() {
        return this.driver.getText( this.howMuchCouldIBorrowAmountResult);
    }
}

module.exports = HowMuchCouldIBorrow;