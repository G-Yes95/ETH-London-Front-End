import { findWalletBookWallet } from '@dynamic-labs/wallet-book';

const createWallet = (walletBook, wallet) => {
    var _a;
    const walletbookWallet = findWalletBookWallet(walletBook, wallet.key);
    return {
        group: walletbookWallet === null || walletbookWallet === void 0 ? void 0 : walletbookWallet.group,
        injectedConfig: walletbookWallet === null || walletbookWallet === void 0 ? void 0 : walletbookWallet.injectedConfig,
        isInstalledOnBrowser: (_a = wallet.isInstalledOnBrowser()) !== null && _a !== void 0 ? _a : false,
        key: wallet.key,
        name: wallet.name,
        walletConnector: wallet,
    };
};

export { createWallet };
