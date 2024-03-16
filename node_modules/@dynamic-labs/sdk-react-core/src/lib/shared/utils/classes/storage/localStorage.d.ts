export declare class LocalStorage {
    private static __suffix__;
    static getSuffix: () => string;
    private static getDynamicLSKey;
    private static validateRequest;
    static setSuffix(localStorageSuffix?: string): void;
    /**
     *
     * @param key
     * @param getAuth - verifies if the request to get AUTH_TOKEN is comming from getAuthToken and not directly
     * @returns
     */
    static getFromLS<T = any>(key: string, getAuth?: boolean): T | undefined;
    static removeFromLS(key: string): void;
    /**
     *
     * @param key
     * @param value
     * @param storeAuth - verifies if the request to get AUTH_TOKEN is comming from getAuthToken and not directly
     * @returns
     */
    static setToLS<T = any>(key: string, value: T, storeAuth?: boolean): void;
    static getKeys(): string[];
}
export default LocalStorage;
