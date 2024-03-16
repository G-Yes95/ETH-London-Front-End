import { CoinbaseWalletProvider } from '@coinbase/wallet-sdk';
import { GenericNetwork } from '@dynamic-labs/types';
export type GetCoinbaseProviderOpts = {
    appLogoUrl?: string;
    appName?: string;
    evmNetworks?: GenericNetwork[];
};
export type CoinbaseProviderHandlerOpts = {
    onDisconnect(): Promise<void>;
};
export type GetCoinbaseProvider = (args: {
    handlers?: CoinbaseProviderHandlerOpts;
    opts?: GetCoinbaseProviderOpts;
}) => CoinbaseWalletProvider;
