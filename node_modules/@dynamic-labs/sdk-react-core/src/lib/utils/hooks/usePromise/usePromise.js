import { useRef, useReducer, useCallback, useEffect } from 'react';
import '@dynamic-labs/sdk-api';
import { logger } from '../../../shared/logger.js';
import '@dynamic-labs/iconic';
import '@dynamic-labs/wallet-connector-core';
import 'react/jsx-runtime';
import '../../../context/ViewContext/ViewContext.js';
import '@dynamic-labs/wallet-book';
import '../../constants/colors.js';
import '../../../shared/utils/classes/storage/localStorage.js';
import 'viem';
import '@dynamic-labs/utils';
import '../../../shared/consts/index.js';
import { resolveFetcher } from './utils/resolveFetcher/resolveFetcher.js';
import { createReducer } from './utils/createReducer/createReducer.js';

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
    const lastCallTimestamp = useRef(new Date().getTime());
    const { deps = [], initialData = undefined, enabled = true, retries = 0, onReject = () => { }, onResolve = () => { }, } = options || {};
    const [state, dispatch] = useReducer(createReducer(), {
        data: initialData,
        isLoading: true,
    });
    const callback = useCallback(() => {
        const callTimestamp = new Date().getTime();
        const diffFromLastCall = callTimestamp - lastCallTimestamp.current;
        if (diffFromLastCall < 5) {
            logger.warn('usePromise: Fetcher function was called too soon. Please make sure you are not calling the fetcher function inside a loop or a synchronous function.', deps);
        }
        lastCallTimestamp.current = callTimestamp;
        if (!state.isLoading) {
            dispatch({
                payload: true,
                type: 'SET_LOADING',
            });
        }
        resolveFetcher(fetcher, { retries }, (error, data) => {
            if (callTimestamp !== lastCallTimestamp.current)
                return;
            if (error) {
                logger.error(error);
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
    useEffect(() => {
        if (enabled) {
            callback();
        }
    }, [callback, enabled]);
    return state;
};

export { usePromise };
