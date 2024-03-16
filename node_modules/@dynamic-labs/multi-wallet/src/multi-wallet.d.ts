import { Chain, WalletConnector } from '@dynamic-labs/wallet-connector-core';
import { WalletBookSchema } from '@dynamic-labs/wallet-book';
import { Provider } from '@dynamic-labs/sdk-api';
import { GetSupportedWallets, GetSupportedWalletsOpts } from './types';
export declare const getSupportedWallets: GetSupportedWallets;
export declare const getSupportedChainsForWalletConnector: (walletBook: WalletBookSchema, walletConnector: WalletConnector) => Chain[];
export declare const getEnabledWallets: (props: {
    enabledChains: Chain[];
    getSupportedWalletOpts: GetSupportedWalletsOpts;
}) => WalletConnector[];
export declare const getEnabledProviders: (providers: Provider[] | undefined) => Provider[];
