import { WalletBookSchema } from '@dynamic-labs/wallet-book';
import { WalletConnectorConstructor } from '@dynamic-labs/wallet-connector-core';
export declare const fetchWalletConnectWallets: ({ isWalletConnectV2Enabled, walletBook, }: {
    isWalletConnectV2Enabled: boolean;
    walletBook: WalletBookSchema;
}) => Array<WalletConnectorConstructor>;
export declare const getWalletConnectConnector: ({ isWalletConnectV2Enabled, }: {
    isWalletConnectV2Enabled: boolean;
}) => WalletConnectorConstructor;
