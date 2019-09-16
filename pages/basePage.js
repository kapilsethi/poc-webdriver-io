var MyAutomationDriver = require('../automationDriver/myAutomationDriver')

class BasePage {
    constructor() {
        if(this.myDriver == null) {
            this.myDriver = new MyAutomationDriver();
        };
    };

    getMyDriver() {
        return this.myDriver;
    };
    
    open(pageUrl) {
        this.myDriver.openPage(pageUrl);
    };

    getPageTitle() {
        return this.myDriver.getPageTitle();
    };
};
module.exports = BasePage;