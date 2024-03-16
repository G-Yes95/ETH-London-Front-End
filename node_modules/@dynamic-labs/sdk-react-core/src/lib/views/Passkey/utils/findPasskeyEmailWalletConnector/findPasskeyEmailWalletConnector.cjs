'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var walletConnectorCore = require('@dynamic-labs/wallet-connector-core');

const findPasskeyEmailWalletConnector = (wallets) => {
    const walletConnector = wallets
        .map(({ walletConnector }) => walletConnector)
        .find((walletConnector) => walletConnectorCore.isPasskeyWalletConnector(walletConnector) &&
        walletConnectorCore.isEmailWalletConnector(walletConnector));
    return walletConnector;
};

exports.findPasskeyEmailWalletConnector = findPasskeyEmailWalletConnector;
