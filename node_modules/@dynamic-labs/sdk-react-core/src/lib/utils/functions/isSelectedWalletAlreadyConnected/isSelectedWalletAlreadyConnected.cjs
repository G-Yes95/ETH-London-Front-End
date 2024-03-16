'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var walletConnectorCore = require('@dynamic-labs/wallet-connector-core');

const isSelectedWalletAlreadyConnected = (linkedWallets, selectedWallet, user) => {
    if (!user)
        return false;
    return linkedWallets
        .map(({ connector }) => walletConnectorCore.normalizeWalletName(connector.name))
        .includes(walletConnectorCore.normalizeWalletName(selectedWallet.name));
};

exports.isSelectedWalletAlreadyConnected = isSelectedWalletAlreadyConnected;
