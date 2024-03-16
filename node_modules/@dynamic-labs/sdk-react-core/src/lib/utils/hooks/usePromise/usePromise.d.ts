import { UsePromiseOptions, PromiseState } from './usePromise.types';
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
export declare const usePromise: <T, E = Error>(fetcher: () => T | Promise<T>, options?: UsePromiseOptions<T, E> | undefined) => PromiseState<T, E>;
