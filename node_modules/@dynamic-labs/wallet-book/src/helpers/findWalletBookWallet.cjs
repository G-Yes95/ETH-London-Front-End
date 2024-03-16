'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var getWalletBookWallet = require('./getWalletBookWallet.cjs');
var logger = require('./logger.cjs');

const findWalletBookWallet = (walletBook, walletKey) => {
    try {
        const walletData = getWalletBookWallet.getWalletBookWallet(walletBook, walletKey);
        return walletData;
    }
    catch (err) {
        logger.logger.error(err);
        return undefined;
    }
};

exports.findWalletBookWallet = findWalletBookWallet;
