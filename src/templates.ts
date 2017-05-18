export const templates = {
    packageJson:
`{
    "name": "dashboard",
    "version": "1.0.0",
    "description": "",
    "main": "",
    "private": true,
    "keywords": [],
    "author": "",
    "license": "ISC",
    "dependencies": {
    },
    "devDependencies": {
        "@types/node": "7.0.4",
        "lambda-local": "1.4.2",
        "mocha": "3.3.0",
        "npm-run-all": "4.0.0",
        "ts-node": "2.1.0",
        "tslint": "4.5.1",
        "tslint-eslint-rules": "3.4.0",
        "typescript": "2.1.4"
    },
    "scripts": {
        "build": "tsc",
        "test": "mocha test --recursive"
    }
}`,
    javaScript:
`"use strict";
const chai_1 = require("chai");
const lambdaLocal = require("lambda-local");
const mocha_1 = require("mocha");
const lambdaPath = //lambdaPath;
const timeoutMs = 4000;
const tests = //tests;
const testName = //testName;

mocha_1.describe(testName, () => {
    tests.forEach((test) => {
        mocha_1.it('should correctly evaluate input: ' + test.input, () => {
            lambdaLocal.execute({
                event: { input: test.input },
                lambdaPath,
                profilePath: '~/.aws/credentials',
                profileName: 'default',
                timeoutMs,
                environment: {},
                callback: (err, output) => {
                    if (err) {
                        chai_1.assert.error(err);
                    }
                    else {
                        chai_1.assert.deepEqual(output, test.expected);
                    }
                },
                mute: true,
            });
        });
    });
});`,
    typeScript:
`import { assert } from 'chai';
import * as lambdaLocal from 'lambda-local';
import { describe, it } from 'mocha';

const lambdaPath = //lambdaPath;
const timeoutMs = 4000;
const tests = //tests;
const testName = //testName;

describe(taskName, () => {
    tests.forEach((test) => {
        it('should correctly evaluate input: ' + test.input, () => {
            lambdaLocal.execute({
                event: { input: test.input },
                lambdaPath,
                profilePath: '~/.aws/credentials',
                profileName: 'default',
                timeoutMs,
                environment: {},
                callback: (err, output) => {
                    if (err) {
                        assert.error(err);
                    } else {
                        assert.deepEqual(output, test.expected);
                    }
                },
                mute: true,
            });
        });
    });
});`,
};
