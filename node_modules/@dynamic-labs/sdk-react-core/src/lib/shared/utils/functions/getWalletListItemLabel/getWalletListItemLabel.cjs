'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var localStorage$1 = require('../../../../utils/constants/localStorage.cjs');
require('../../../../utils/constants/colors.cjs');
var localStorage = require('../../classes/storage/localStorage.cjs');
var isWalletGroup = require('../../../../utils/functions/walletListBuilder/utils/isWalletGroup/isWalletGroup.cjs');

const getLastUsedWalletName = () => localStorage.LocalStorage.getFromLS(localStorage$1.LAST_USED_WALLET);
const getWalletGroupLabel = (walletGroup) => {
    const lastUsedWalletName = getLastUsedWalletName();
    const hasNestedLastUsedWallet = walletGroup.groupedWallets.some((walletOption) => walletOption.walletConnector.name === lastUsedWalletName ||
        walletOption.walletConnector.key === lastUsedWalletName);
    if (hasNestedLastUsedWallet) {
        return 'Last used';
    }
    const hasNestedInstalledWallets = walletGroup.groupedWallets.some((walletOption) => walletOption.isInstalledOnBrowser);
    if (hasNestedInstalledWallets) {
        return 'Installed';
    }
    return 'Multichain';
};
const getWalletLabel = (walletOption, usingMultiWallet = false) => {
    const lastUsedWalletName = getLastUsedWalletName();
    const { name: walletName, key: walletKey } = walletOption.walletConnector;
    const isLastUsedWallet = walletName === lastUsedWalletName || walletKey === lastUsedWalletName;
    if (isLastUsedWallet)
        return 'Last used';
    if (walletOption.isInstalledOnBrowser)
        return 'Installed';
    return undefined;
};
const getWalletListItemLabel = ({ usingMultiWallet, wallet, }) => {
    if (isWalletGroup.isWalletGroup(wallet)) {
        return getWalletGroupLabel(wallet);
    }
    return getWalletLabel(wallet, usingMultiWallet);
};

exports.getWalletListItemLabel = getWalletListItemLabel;
