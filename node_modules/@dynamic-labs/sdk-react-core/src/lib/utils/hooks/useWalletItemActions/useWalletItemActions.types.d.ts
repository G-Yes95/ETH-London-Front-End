import type { WalletConnector } from '@dynamic-labs/wallet-connector-core';
export type OpenWalletHandler = (walletKey: string, handlers?: {
    openCustodialWallet: (walletConnector: WalletConnector) => void;
    openExtensionWallet: (walletConnector: WalletConnector) => void;
    openMobileWallet: (walletConnector: WalletConnector) => void;
}) => void;
