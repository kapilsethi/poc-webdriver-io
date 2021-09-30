import { helper } from "automation-driver/helper";
import { expect } from "chai";

class HowMuchCouldIBorrowPage {
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

    private readonly expectedTexts = {
        pageTitle: "Home loan borrowing power calculator | ANZ",
    }

    async openHowMuchCanIBorrowPage() {
        await helper.openPage("much-borrow/")
        const title = await helper.getPageTitle();
        expect(title).to.equal(this.expectedTexts.pageTitle);
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
        await helper.enterText(this.identifiers.otherIncome, otherIncomeToEnter);
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

    async verifyHowMuchCanIBorrowTextResult(expectedText) {
        await helper.waitForDisplayed(this.identifiers.howMuchCouldIBorrowTextResult);
        const actualText = await helper.getText(this.identifiers.howMuchCouldIBorrowTextResult);
        expect(actualText).to.include(expectedText);
    }

    async verifyHowMuchCanIBorrowAmountResult(expectedAmount) {
        const actualAmount = await helper.getText( this.identifiers.howMuchCouldIBorrowAmountResult);
        expect(actualAmount).to.equal(expectedAmount);
    }

    async clickStartOver() {
        await helper.click(this.identifiers.startOver);
    }

    async verifyHowMuchCouldIBorrowPageIsNotDisplayed() {
        const isDisplayed = await helper.isDisplayed(this.identifiers.howMuchCouldIBorrowButton);
        expect(isDisplayed).to.false;
    }

    async verifyHowMuchCouldIBorrowPageIsDisplayed() {
        const isDisplayed = await helper.isDisplayed(this.identifiers.howMuchCouldIBorrowButton);
        expect(isDisplayed).to.true;
    }

    async verifyYourIncomeBeforeTax(expectedYourIncome) {
        const actualYourIncome = await helper.getValue(this.identifiers.incomeBeforeTax);
        expect(actualYourIncome).to.equal(expectedYourIncome);
    }

    async verifyOtherIncome(expectedOtherIncome) {
        const actualOtherIncome = await helper.getValue(this.identifiers.otherIncome);
        expect(actualOtherIncome).to.equal(expectedOtherIncome);
    }

    async verifyLivingExpenses(expectedLivingExpenses) {
        const actualLivingExpenses = await helper.getValue(this.identifiers.livingExpenses);
        expect(actualLivingExpenses).to.equal(expectedLivingExpenses);
    }

    async verifyOtherLoanRepayments(expectedOtherLoanRepayments) {
        const actualOtherLoanRepayments = await helper.getValue(this.identifiers.otherLoanRepayments);
        expect(actualOtherLoanRepayments).to.equal(expectedOtherLoanRepayments);
    }

    async verifyTotalCreditCardLimits(expectedTotalCreditCardLimits) {
        const actualTotalCreditCardLimits = await helper.getValue(this.identifiers.totalCreditCardLimits);
        expect(actualTotalCreditCardLimits).to.equal(expectedTotalCreditCardLimits);
    }
}

const howMuchCouldIBorrowPage = new HowMuchCouldIBorrowPage();
export { howMuchCouldIBorrowPage };