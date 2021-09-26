import { expect } from "chai";
import { howMuchCouldIBorrow } from "pages/how-much-could-i-borrow";
import { helper } from "automation-driver/helper";

describe('Borrowing Power Calculator Test -->', async () => {
    describe('Should calculate how much user can borrow based on the inputs -->', async () => {
        it('should load how much can I borrow page', async () => {
            await helper.openPage("/personal/home-loans/calculators-tools/much-borrow/");
            const title = await helper.getPageTitle();
            expect(title).to.equal("Home loan borrowing power calculator | ANZ");
        });
    
        it('should be able to select application type as single', async () => {
            await howMuchCouldIBorrow.selectApplicationTypeAsSingle();
        });
    
        it('should be able to select number of dependants', async () => {
            await howMuchCouldIBorrow.selectNumberOfDependents(0);
        });
        
        it('should select property you would like to buy as Home to live in', async () => {
            await howMuchCouldIBorrow.selectHomeToLiveIn();
        });
        
        it('should be able to enter income before tax', async () => {
            await howMuchCouldIBorrow.enterIncomeBeforeTax(80000);
        });
    
        it('should be able to enter other income', async () => {
            await howMuchCouldIBorrow.enterOtherIncome(10000);
        });
    
        it('should be able to enter living expenses', async () => {
            await howMuchCouldIBorrow.enterLivingExpenses(500);
        });
    
        it('should be able to enter current home loan repayments', async () => {
            await howMuchCouldIBorrow.enterCurrentHomeLoanRepayments(0);
        });
    
        it('should be able to enter other loan repayments', async () => {
            await howMuchCouldIBorrow.enterOtherLoanRepayments(100);
        });
    
        it('should be able to enter other commitments', async () => {
            await howMuchCouldIBorrow.enterOtherCommitments(0);
        });
    
        it('should be able to enter total credit card limits', async () => {
            await howMuchCouldIBorrow.enterTotalCreditCardLimits(10000);
        });
    
        it('should be able to click how much could I borrow button', async () => {
            await howMuchCouldIBorrow.clickHowMuchCanIBorrowButton();
        });
    
        it('should see the estimated borrow text', async () => {
            expect(await howMuchCouldIBorrow.getHowMuchCanIBorrowTextResult()).to.include("We estimate you could borrow:");
        });
    
        it('should see the how much amount I could borrow', async () => {
            expect(await howMuchCouldIBorrow.getHowMuchCanIBorrowAmountResult()).to.equal("$508,000");
        });
    
        it('should not see How much could I borrow button', async () => {
            expect(await howMuchCouldIBorrow.isHowMuchCouldIBorrowDisplayed()).to.false;
        });    
    });

    describe('Should clear the form when start over is clicked -->', async () => {
        it('should be able to click start over', async () => {
            await howMuchCouldIBorrow.clickStartOver();
        });
    
        it('should see how much could I borrow button', async () => {
            expect(await howMuchCouldIBorrow.isHowMuchCouldIBorrowDisplayed()).to.true;
        });

        it('should reset income before tax as 0', async () => {
            expect(await howMuchCouldIBorrow.getYourIncomeBeforeTax()).to.equal('0');
        });

        it('should reset other income as 0', async () => {
            expect(await howMuchCouldIBorrow.getOtherIncome()).to.equal('0');
        });

        it('should reset living expenses as 0', async () => {
            expect(await howMuchCouldIBorrow.getLivingExpenses()).to.equal('0');
        });

        it('should reset other loan repayments as 0', async () => {
            expect(await howMuchCouldIBorrow.getOtherLoanRepayments()).to.equal('0');
        });

        it('should reset total credit card limits as 0', async () => {
            expect(await howMuchCouldIBorrow.getTotalCreditCardLimits()).to.equal('0');
        });
    });
});