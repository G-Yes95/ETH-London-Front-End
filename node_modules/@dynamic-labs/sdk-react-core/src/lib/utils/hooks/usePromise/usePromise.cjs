'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
require('@dynamic-labs/sdk-api');
var logger = require('../../../shared/logger.cjs');
require('@dynamic-labs/iconic');
require('@dynamic-labs/wallet-connector-core');
require('react/jsx-runtime');
require('../../../context/ViewContext/ViewContext.cjs');
require('@dynamic-labs/wallet-book');
require('../../constants/colors.cjs');
require('../../../shared/utils/classes/storage/localStorage.cjs');
require('viem');
require('@dynamic-labs/utils');
require('../../../shared/consts/index.cjs');
var resolveFetcher = require('./utils/resolveFetcher/resolveFetcher.cjs');
var createReducer = require('./utils/createReducer/createReducer.cjs');

/**
 * Custom hook for handling promises and fetching data.
 * @template T - The type of the data returned by the promise.
 * @template E - The type of the error thrown by the promise.
 * @param {() => T | Promise<T>} fetcher - A function that returns the data or a promise that resolves to the data.
 * @param {UsePromiseOptions<T, E>} [options={}] - Options for the hook.
 * @param {number} [options.retries] - The number of times to retry the fetch in case of failure.
 * @param {T} [options.initialData] - The initial data the hook will use until the promise is resolved.
 * @param {DependencyList} [options.deps=[]] - An array of dependencies for the hook.
 * @param {boolean} [options.enabled] - Flag indicating whether the fetch should be enabled or not.
 * @param {(data: T) => void} [options.onResolve] - Callback to be called when the fetch is resolved successfully.
 * @param {(error: E) => void} [options.onReject] - Callback to be called when the fetch is rejected with an error.
 * @returns {PromiseState<T, E>} - The state object containing the data, error, and loading status.
 * @example
 * // Example usage with a simple fetcher function
 * const fetcher = fetch('https://api.example.com/data');
 *
 * const MyComponent = () => {
 *  const { data, isLoading, error } = usePromise(fetcher);
 *
 *  if (isLoading) {
 *    return <div>Loading...</div>;
 *  }
 *
 *  if (error) {
 *    return <div>Error: {error.message}</div>;
 *  }
 *
 * return <div>Data: {data}</div>;
 * };
 */
const usePromise = (fetcher, options) => {
    const lastCallTimestamp = React.useRef(new Date().getTime());
    const { deps = [], initialData = undefined, enabled = true, retries = 0, onReject = () => { }, onResolve = () => { }, } = options || {};
    const [state, dispatch] = React.useReducer(createReducer.createReducer(), {
        data: initialData,
        isLoading: true,
    });
    const callback = React.useCallback(() => {
        const callTimestamp = new Date().getTime();
        const diffFromLastCall = callTimestamp - lastCallTimestamp.current;
        if (diffFromLastCall < 5) {
            logger.logger.warn('usePromise: Fetcher function was called too soon. Please make sure you are not calling the fetcher function inside a loop or a synchronous function.', deps);
        }
        lastCallTimestamp.current = callTimestamp;
        if (!state.isLoading) {
            dispatch({
                payload: true,
                type: 'SET_LOADING',
            });
        }
        resolveFetcher.resolveFetcher(fetcher, { retries }, (error, data) => {
            if (callTimestamp !== lastCallTimestamp.current)
                return;
            if (error) {
                logger.logger.error(error);
                dispatch({
                    payload: error,
                    type: 'SET_ERROR',
                });
                onReject === null || onReject === void 0 ? void 0 : onReject(error);
                return;
            }
            dispatch({
                payload: data,
                type: 'SET_DATA',
            });
            onResolve === null || onResolve === void 0 ? void 0 : onResolve(data);
            dispatch({
                payload: false,
                type: 'SET_LOADING',
            });
        });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, deps);
    React.useEffect(() => {
        if (enabled) {
            callback();
        }
    }, [callback, enabled]);
    return state;
};

exports.usePromise = usePromise;
