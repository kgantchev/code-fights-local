import * as Nightmare from 'nightmare';
import { codeFightsLogin, loginSelectors, taskSelectors } from './config';
import { createFunction, createReadMe } from './task-constructors';

const nightmare = Nightmare({
    show: true,
    webPreferences: {
        partition: 'persist: code-fights-local',
    },
});

const loadTests = (url, functionName, numTests) => {
    console.log(url);
    console.log(numTests);
    console.log(functionName);
};

export const downloadTask = (url) => {
    console.log('Downloading task: ' + url);
    console.log('Check if logged in.');
    nightmare
        .goto('https://codefights.com')
        .wait('body')
        .wait(loginSelectors.loginComplete)
        .wait(1000)
        .exists(loginSelectors.loginComplete)
        .then((loginComplete) => {
            if (!loginComplete) {
                console.log('Logging in.');
                nightmare
                    .wait(loginSelectors.loginTab)
                    .click(loginSelectors.loginTab)
                    .wait(loginSelectors.emailField)
                    .wait(loginSelectors.passwordField)
                    .wait(loginSelectors.loginButton)
                    .type(loginSelectors.emailField, codeFightsLogin.email)
                    .type(loginSelectors.passwordField, codeFightsLogin.password)
                    .click(loginSelectors.loginButton)
                    .wait(loginSelectors.loginComplete);
            } else {
                console.log('Logged in and ready to extract tasks.');
            }
        })
        .then(() => {
            console.log('Extracting task.');
            nightmare
                .goto(url)
                .wait(taskSelectors.markdown)
                .wait(taskSelectors.functionSignature)
                .wait(taskSelectors.markdown)
                .wait(taskSelectors.taskTests)
                .evaluate((s) => {
                    return new Promise((resolve, reject) => {
                        try {
                            const functionName = document.querySelector(s.functionName).innerText.trim();
                            const markdown = document.querySelector(s.markdown).innerHTML;
                            const functionBody = document.querySelector(s.functionSignature).innerText.trim()
                                + '\n\n}';
                            const numTests = document.querySelectorAll(s.taskTests).length;
                            resolve({ functionName, markdown, functionBody, numTests });
                        } catch (exception) {
                            reject(exception);
                        }
                    });
                }, taskSelectors)
                .end()
                .then((result) => {
                    createReadMe(result.functionName, result.markdown);
                    createFunction(result.functionName, result.functionBody);
                    loadTests(url, result.functionName, result.numTests);
                }, (error) => {
                    console.error(error);
                });
        });
};
