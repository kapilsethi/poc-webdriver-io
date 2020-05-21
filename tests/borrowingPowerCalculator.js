var howMuchCoulldIBorrow = require('../pages/howMuchCouldIBorrow');
var chai = require('chai')
var expect = chai.expect;

describe('Borrowing Power Calculator Test -->', () => {
    var page = new howMuchCoulldIBorrow();

    describe('Should calculate how much user can borrow based on the inputs -->', () => {

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
            expect(page.getHowMuchCanIBorrowAmountResult()).to.equal("$488,000");
        });
    
        it('should not see How much could I borrow button', () => {
            expect(page.isHowMuchCouldIBorrowDisplayed()).to.false;
        });    
    });

    describe('Should clear the form when start over is clicked -->', () => {

        it('should be able to click start over', () => {
            page.clickStartOver();
        });
    
        it('should see how much could I borrow button', () => {
            expect(page.isHowMuchCouldIBorrowDisplayed()).to.true;
        });

        it('should reset income before tax as 0', () => {
            expect(page.getYourIncomeBeforeTax()).to.equal('0');
        });

        it('should reset other income as 0', () => {
            expect(page.getOtherIncome()).to.equal('0');
        });

        it('should reset living expenses as 0', () => {
            expect(page.getLivingExpenses()).to.equal('0');
        });

        it('should reset other loan repayments as 0', () => {
            expect(page.getOtherLoanRepayments()).to.equal('0');
        });

        it('should reset total credit card limits as 0', () => {
            expect(page.getTotalCreditCardLimits()).to.equal('0');
        });
    });
});