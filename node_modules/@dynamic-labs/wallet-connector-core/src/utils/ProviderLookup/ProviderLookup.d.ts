export type ProviderCondition<T = unknown> = {
    flag: T;
    value: boolean;
};
export declare const ProviderLookup: <T extends { [key in Flag]: boolean; }, Flag extends string>(installedProviders: T[], providerFlags: ProviderCondition<Flag>[]) => T | undefined;
