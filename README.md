[![Build Status](https://travis-ci.org/kapilsethi/poc-webdriver-io.png)](https://travis-ci.org/kapilsethi/poc-webdriver-io)

# **What's in this repository**

**How to use this repository:**
----

**Prerequisite:**
- Need to have `node.js` installed on the machine (version "^v12.6.x")

**Setup:**

- Run `npm install` command

**Using linting utility**
- Run `npm run lint` command to run eslint

**Running Tests:**

- Run `npm test` command to run all the tests
- Run `npm run generate:report` command to generate html report of the test execution results

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

- _CI:_
    - Travis

- _Linting utility:_
    - ESLint (extends typescript recommened rules. Details can be found [here](https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/eslint-plugin))

- _Pre-Commit hook:_
    - [pre-commit](https://www.npmjs.com/package/pre-commit) npm package to run linting utility before commit

**Example website:**
----

- Refer to the test script for the website info

**Care only about chrome browser?**
----

- Update
    - path as '/' (e.g. `path: '/'`)
    - services as 'chromedriver' (e.g. `services: ['chromedriver']`)

    in [wdio.conf.js](https://github.com/kapilsethi/poc-webdriver-io/blob/master/wdio.conf.js) file 

**Troubleshooting:**
----

- N/A

**Have a feedback?**
---

If you have any feedback or question, please email me at kapil.sethi9@gmail.com