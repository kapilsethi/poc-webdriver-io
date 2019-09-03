var MyAutomationDriver = require('../automation-driver/myAutomationDriver')

class BasePage {
    constructor() {
        if(this.myDriver == null) {
            this.myDriver = new MyAutomationDriver();
        }
    }

    getMyDriver() {
        return this.myDriver;
    }
    
    open(pageUrl) {
        this.myDriver.openPage(pageUrl);
        browser.maximizeWindow();
    }

    getPageTitle() {
        return this.myDriver.getPageTitle();
    }
}
module.exports = BasePage;