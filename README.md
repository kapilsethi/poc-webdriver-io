[![Build Status](https://travis-ci.org/kapilsethi/poc-webdriver-io.png)](https://travis-ci.org/kapilsethi/poc-webdriver-io)

# **What's in this repository**

**How to use this repository:**
----

**Prerequisite:**
- Need to have `node.js` installed on the machine (version "^v10.15.x")

**Setup:**

- Run `npm install` command

**Running Tests:**

- Run `npm test` command to run all the tests
- Run `npm run generatereport` command to generate html report of the test execution results
- Run `npm run rtag` command to run the tests and generate html report

**Test Execution Report:**
 - Test execution report can be found in './allure-results' and './allure-report'

**Features:**
----

- _Test framework:_
    - WebDriverIO

- _Driver:_
    - Selenium standalone

- _Assertion library:_
    - Chai

- _Supported browser:_
    - Chrome, Firefox

- _Reporting framework:_
    - Allure

**Example website:**
----

- Refer to the test script for the website info

**Care only about chrome browser?**
----

- update
    - path as '/' (e.g. `path: '/'`)
    - services as 'chromedriver' (e.g. `services: ['chromedriver']`)

    in [wdio.conf.js](https://github.com/kapilsethi/poc-webdriver-io/blob/master/wdio.conf.js) file 

**Troubleshooting:**
----

- N/A

**Have a feedback?**
---

If you have any feedback or question, please email me at kapil.sethi9@gmail.com