import { isPasskeyWalletConnector, isEmailWalletConnector } from '@dynamic-labs/wallet-connector-core';

const findPasskeyEmailWalletConnector = (wallets) => {
    const walletConnector = wallets
        .map(({ walletConnector }) => walletConnector)
        .find((walletConnector) => isPasskeyWalletConnector(walletConnector) &&
        isEmailWalletConnector(walletConnector));
    return walletConnector;
};

export { findPasskeyEmailWalletConnector };
