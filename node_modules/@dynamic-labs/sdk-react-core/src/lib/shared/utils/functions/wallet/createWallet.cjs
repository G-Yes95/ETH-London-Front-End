'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var walletBook = require('@dynamic-labs/wallet-book');

const createWallet = (walletBook$1, wallet) => {
    var _a;
    const walletbookWallet = walletBook.findWalletBookWallet(walletBook$1, wallet.key);
    return {
        group: walletbookWallet === null || walletbookWallet === void 0 ? void 0 : walletbookWallet.group,
        injectedConfig: walletbookWallet === null || walletbookWallet === void 0 ? void 0 : walletbookWallet.injectedConfig,
        isInstalledOnBrowser: (_a = wallet.isInstalledOnBrowser()) !== null && _a !== void 0 ? _a : false,
        key: wallet.key,
        name: wallet.name,
        walletConnector: wallet,
    };
};

exports.createWallet = createWallet;
