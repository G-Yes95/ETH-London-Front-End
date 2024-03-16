'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var walletConnectorCore = require('@dynamic-labs/wallet-connector-core');

const isWalletLinked = (address, linkedWallets) => {
    if (!address || !(linkedWallets === null || linkedWallets === void 0 ? void 0 : linkedWallets.length)) {
        return false;
    }
    const linkedWallet = linkedWallets.find((wallet) => walletConnectorCore.isSameAddress(wallet.address, address, wallet.chain));
    return Boolean(linkedWallet);
};

exports.isWalletLinked = isWalletLinked;
