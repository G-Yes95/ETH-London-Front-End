'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var normalizeWalletName = require('./normalizeWalletName/normalizeWalletName.cjs');

const filterWalletsByKey = (wallets, keys) => keys
    .flatMap((key) => wallets.find((w) => walletHasKey(w, key)))
    .filter(isWalletConnector);
const walletHasKey = (wallet, key) => wallet.key === key;
const isWalletConnector = (item) => Boolean(item);
const getWalletConnectorByKey = (wallets, key) => {
    const normalizedWalletname = normalizeWalletName.normalizeWalletName(key);
    return filterWalletsByKey(wallets, [normalizedWalletname]).length > 0
        ? filterWalletsByKey(wallets, [normalizedWalletname])[0]
        : null;
};

exports.getWalletConnectorByKey = getWalletConnectorByKey;
