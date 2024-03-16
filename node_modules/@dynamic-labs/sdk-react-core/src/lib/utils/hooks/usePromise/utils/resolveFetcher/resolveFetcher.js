import { __awaiter } from '../../../../../../../_virtual/_tslib.js';

const isPromise = (value) => value instanceof Promise;
const resolveFetcher = (fetcher, { retries }, callback) => __awaiter(void 0, void 0, void 0, function* () {
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

export { resolveFetcher };
