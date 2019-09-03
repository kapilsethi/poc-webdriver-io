var assert = require('assert');

describe('how much can I borrow page', () => {
    it('should load how much can I borrow page', () => {
        browser.url("/personal/home-loans/calculators-tools/much-borrow/");
        const title = browser.getTitle();
        assert.strictEqual(title, "Home loan borrowing power calculator | ANZ");
    });
});