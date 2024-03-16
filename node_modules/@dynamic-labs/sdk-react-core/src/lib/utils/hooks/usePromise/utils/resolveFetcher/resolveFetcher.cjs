'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _tslib = require('../../../../../../../_virtual/_tslib.cjs');

const isPromise = (value) => value instanceof Promise;
const resolveFetcher = (fetcher, { retries }, callback) => _tslib.__awaiter(void 0, void 0, void 0, function* () {
    const totalNumberOfAttempts = retries ? retries + 1 : 1;
    let currentAttempt = 0;
    let data;
    let err;
    while (currentAttempt < totalNumberOfAttempts) {
        currentAttempt = currentAttempt + 1;
        try {
            const result = fetcher();
            if (isPromise(result)) {
                data = yield result;
            }
            else {
                data = result;
            }
            err = undefined;
        }
        catch (error) {
            err = error;
        }
    }
    callback(err, data);
});

exports.resolveFetcher = resolveFetcher;
