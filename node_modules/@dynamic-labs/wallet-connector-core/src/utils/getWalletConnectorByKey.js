import { normalizeWalletName } from './normalizeWalletName/normalizeWalletName.js';

const filterWalletsByKey = (wallets, keys) => keys
    .flatMap((key) => wallets.find((w) => walletHasKey(w, key)))
    .filter(isWalletConnector);
const walletHasKey = (wallet, key) => wallet.key === key;
const isWalletConnector = (item) => Boolean(item);
const getWalletConnectorByKey = (wallets, key) => {
    const normalizedWalletname = normalizeWalletName(key);
    return filterWalletsByKey(wallets, [normalizedWalletname]).length > 0
        ? filterWalletsByKey(wallets, [normalizedWalletname])[0]
        : null;
};

export { getWalletConnectorByKey };
