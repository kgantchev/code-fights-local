import { assert } from 'chai';
import * as lambdaLocal from 'lambda-local';
import { describe, it } from 'mocha';

const lambdaPath = 'dir-to-lambda-function';
const timeoutMs = 40000;
const tests = [{ input: [], expected: [] }];

describe('sortByHeight()', () => {
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