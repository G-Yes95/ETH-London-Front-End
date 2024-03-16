import { getWalletBookWallet } from './getWalletBookWallet.js';
import { logger } from './logger.js';

const findWalletBookWallet = (walletBook, walletKey) => {
    try {
        const walletData = getWalletBookWallet(walletBook, walletKey);
        return walletData;
    }
    catch (err) {
        logger.error(err);
        return undefined;
    }
};

export { findWalletBookWallet };
