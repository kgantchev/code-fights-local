import * as Nightmare from 'nightmare';
import { Task } from './components/task';
import { browserOptions, codeFightsLogin } from './config';
import { loginSelectors, taskSelectors } from './selectors';
import { parseTest } from './test-parser';

const nightmare = Nightmare(browserOptions);

const extractTask = (url) => {
    return nightmare
        .goto(url)
        .wait(taskSelectors.markdown)
        .wait(taskSelectors.functionSignature)
        .wait(taskSelectors.markdown)
        .wait(taskSelectors.test.section)
        .evaluate((ts) => {
            return new Promise((resolve, reject) => {
                try {
                    const result = {
                        title: document.querySelector(ts.functionName).innerText.trim(),
                        markdown: document.querySelector(ts.markdown).innerHTML,
                        taskFunction: {
                            name: document.querySelector(ts.functionName).innerText.trim(),
                            body: document.querySelector(ts.functionSignature).innerText.trim() + '\n\n}',
                        },
                        tests: [],
                        numTests: document.querySelectorAll(ts.test.section).length,
                    };
                    resolve(result);
                } catch (exception) {
                    reject(exception);
                }
            });
        }, taskSelectors)
        .then((result) => {
            return result.numTests > 0 ? extractTests(1, new Task(result)) :
                nightmare.wait(taskSelectors.test.section);
        }, (error) => {
            console.error(error);
        });
};

const extractTests = (testIndex, task) => {
    console.log(`Extracting test ${testIndex} out of ${task.numTests}.`);
    return nightmare
        .click(taskSelectors.test.getTestHead(testIndex))
        .wait(taskSelectors.test.bodyLoaded)
        .evaluate((s) => {
            return new Promise((resolve, reject) => {
                try {
                    resolve(document.querySelector(s.testBody).innerHTML);
                } catch (exception) {
                    reject(exception);
                }
            });
        },
        {
            testBody: taskSelectors.test.body,
            index: testIndex,
        })
        .then((result) => {
            const test = parseTest(result);
            if (test) {
                task.tests.push(test);
            } else {
                console.error('Failed to parse test: ' + test);
            }
            if ((testIndex + 1) <= task.numTests) {
                return extractTests(testIndex + 1, task);
            } else {
                task.save();
                return nightmare.wait(taskSelectors.test.section);
            }
        }, (error) => {
            console.error(error);
        });
};

const login = () => {
    return nightmare
        .wait(loginSelectors.loginTab)
        .click(loginSelectors.loginTab)
        .wait(loginSelectors.emailField)
        .wait(loginSelectors.passwordField)
        .wait(loginSelectors.loginButton)
        .type(loginSelectors.emailField, codeFightsLogin.email)
        .type(loginSelectors.passwordField, codeFightsLogin.password)
        .click(loginSelectors.loginButton)
        .wait(loginSelectors.loginComplete);
};

export const downloadTask = (url) => {
    console.log('Downloading task: ' + url);
    console.log('Check if logged in.');
    nightmare
        .viewport(1200, 900)
        .goto('https://codefights.com')
        .wait('body')
        .wait(loginSelectors.loginComplete)
        .wait(1000)
        .exists(loginSelectors.loginComplete)
        .then((loginComplete) => {
            return loginComplete ? nightmare.wait(loginSelectors.loginComplete) : login();
        })
        .then(() => {
            return extractTask(url);
        });
    // .end()
    // .then((result) => console.log(result), (error) => console.error(error));
};
