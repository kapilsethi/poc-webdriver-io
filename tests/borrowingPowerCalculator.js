var howMuchCoulldIBorrow = require('../pages/howMuchCoulldIBorrow');
var chai = require('chai')
var expect = chai.expect;

describe('Borrowing Power Calculator Test', () => {
    var page = new howMuchCoulldIBorrow();

    it('should load how much can I borrow page', () => {
        page.open("/personal/home-loans/calculators-tools/much-borrow/");
        const title = page.getPageTitle();
        expect(title).to.equal("Home loan borrowing power calculator | ANZ");
    });

    it('should be able to select application type as single', () => {
        page.selectApplicationTypeAsSingle();
    });

    it('should be able to select number of dependants', () => {
        page.selectNumberOfDependents(0);
    });
    
    it('should select property you would like to buy as Home to live in', () => {
        page.selectHomeToLiveIn();
    });
    
    it('should be able to enter income before tax', () => {
        page.enterIncomeBeforeTax(80000);
    });

    it('should be able to enter other income', () => {
        page.enterOtherIncome(10000);
    });

    it('should be able to enter living expenses', () => {
        page.enterLivingExpenses(500);
    });

    it('should be able to enter current home loan repayments', () => {
        page.enterCurrentHomeLoanRepayments(0);
    });

    it('should be able to enter other loan repayments', () => {
        page.enterOtherLoanRepayments(100);
    });

    it('should be able to enter other commitments', () => {
        page.enterOtherCommitments(0);
    });

    it('should be able to enter total credit card limits', () => {
        page.enterTotalCreditCardLimits(10000);
    });

    it('should be able to click how much could I borrow button', () => {
        page.clickHowMuchCanIBorrowButton();
    });

    it('should see the estimated borrow text', () => {
        expect(page.getHowMuchCanIBorrowTextResult()).to.include("We estimate you could borrow:");
    });

    it('should see the how much amount I could borrow', () => {
        expect(page.getHowMuchCanIBorrowAmountResult()).to.equal("$467,000");
    });
});