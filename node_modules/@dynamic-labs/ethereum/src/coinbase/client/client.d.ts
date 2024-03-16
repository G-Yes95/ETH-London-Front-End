import { FetchPublicAddressOpts } from '@dynamic-labs/wallet-connector-core';
import { GetCoinbaseProvider, GetCoinbaseProviderOpts } from './types';
export declare const getCoinbaseProvider: GetCoinbaseProvider;
export declare const killCoinbaseSession: () => Promise<void>;
export declare const fetchPublicAddress: (coinbaseProviderOpts: GetCoinbaseProviderOpts, opts?: FetchPublicAddressOpts) => Promise<string | undefined>;
export declare const signMessage: (coinbaseProviderOpts: GetCoinbaseProviderOpts, messageToSign: string) => Promise<string | undefined>;
