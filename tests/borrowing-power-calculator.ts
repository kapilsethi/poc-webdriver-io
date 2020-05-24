import { expect } from "chai";
import { howMuchCouldIBorrow } from "pages/how-much-could-i-borrow";
import { helper } from "automation-driver/helper";

describe('Borrowing Power Calculator Test -->', () => {
    describe('Should calculate how much user can borrow based on the inputs -->', () => {
        it('should load how much can I borrow page', () => {
            helper.openPage("/personal/home-loans/calculators-tools/much-borrow/");
            const title = helper.getPageTitle();
            expect(title).to.equal("Home loan borrowing power calculator | ANZ");
        });
    
        it('should be able to select application type as single', () => {
            howMuchCouldIBorrow.selectApplicationTypeAsSingle();
        });
    
        it('should be able to select number of dependants', () => {
            howMuchCouldIBorrow.selectNumberOfDependents(0);
        });
        
        it('should select property you would like to buy as Home to live in', () => {
            howMuchCouldIBorrow.selectHomeToLiveIn();
        });
        
        it('should be able to enter income before tax', () => {
            howMuchCouldIBorrow.enterIncomeBeforeTax(80000);
        });
    
        it('should be able to enter other income', () => {
            howMuchCouldIBorrow.enterOtherIncome(10000);
        });
    
        it('should be able to enter living expenses', () => {
            howMuchCouldIBorrow.enterLivingExpenses(500);
        });
    
        it('should be able to enter current home loan repayments', () => {
            howMuchCouldIBorrow.enterCurrentHomeLoanRepayments(0);
        });
    
        it('should be able to enter other loan repayments', () => {
            howMuchCouldIBorrow.enterOtherLoanRepayments(100);
        });
    
        it('should be able to enter other commitments', () => {
            howMuchCouldIBorrow.enterOtherCommitments(0);
        });
    
        it('should be able to enter total credit card limits', () => {
            howMuchCouldIBorrow.enterTotalCreditCardLimits(10000);
        });
    
        it('should be able to click how much could I borrow button', () => {
            howMuchCouldIBorrow.clickHowMuchCanIBorrowButton();
        });
    
        it('should see the estimated borrow text', () => {
            expect(howMuchCouldIBorrow.getHowMuchCanIBorrowTextResult()).to.include("We estimate you could borrow:");
        });
    
        it('should see the how much amount I could borrow', () => {
            expect(howMuchCouldIBorrow.getHowMuchCanIBorrowAmountResult()).to.equal("$488,000");
        });
    
        it('should not see How much could I borrow button', () => {
            expect(howMuchCouldIBorrow.isHowMuchCouldIBorrowDisplayed()).to.false;
        });    
    });

    describe('Should clear the form when start over is clicked -->', () => {

        it('should be able to click start over', () => {
            howMuchCouldIBorrow.clickStartOver();
        });
    
        it('should see how much could I borrow button', () => {
            expect(howMuchCouldIBorrow.isHowMuchCouldIBorrowDisplayed()).to.true;
        });

        it('should reset income before tax as 0', () => {
            expect(howMuchCouldIBorrow.getYourIncomeBeforeTax()).to.equal('0');
        });

        it('should reset other income as 0', () => {
            expect(howMuchCouldIBorrow.getOtherIncome()).to.equal('0');
        });

        it('should reset living expenses as 0', () => {
            expect(howMuchCouldIBorrow.getLivingExpenses()).to.equal('0');
        });

        it('should reset other loan repayments as 0', () => {
            expect(howMuchCouldIBorrow.getOtherLoanRepayments()).to.equal('0');
        });

        it('should reset total credit card limits as 0', () => {
            expect(howMuchCouldIBorrow.getTotalCreditCardLimits()).to.equal('0');
        });
    });
});