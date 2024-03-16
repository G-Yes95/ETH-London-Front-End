import { DependencyList } from 'react';
export type PromiseState<T, E> = {
    data?: T;
    error?: E;
    isLoading: boolean;
};
export type UsePromiseOptions<T, E> = {
    deps?: DependencyList;
    retries?: number;
    enabled?: boolean;
    initialData?: T;
    onResolve?: (data: T) => void;
    onReject?: (error: E) => void;
};
