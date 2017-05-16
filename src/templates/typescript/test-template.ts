import { assert } from 'chai';
import * as lambdaLocal from 'lambda-local';
import { describe, it } from 'mocha';

// TEMPLATE: set the path to the lambda function, which will execute the task
const lambdaPath = 'dir-to-lambda-function';

// TEMPLATE: change the default timeout
const timeoutMs = 40000;

// TEMPLATE: replace tests
const tests = [{ input: [], expected: [] }];

// TEMPLATE: replace the task name
describe('task-name()', () => {
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
});