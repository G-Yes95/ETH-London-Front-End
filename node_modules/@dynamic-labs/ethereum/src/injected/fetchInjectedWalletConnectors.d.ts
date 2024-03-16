import { WalletConnectorConstructor } from '@dynamic-labs/wallet-connector-core';
import { WalletBookSchema } from '@dynamic-labs/wallet-book';
export declare const fetchInjectedWalletConnector: ({ walletBook, }: {
    isWalletConnectV2Enabled: boolean;
    walletBook: WalletBookSchema;
}) => WalletConnectorConstructor[];
