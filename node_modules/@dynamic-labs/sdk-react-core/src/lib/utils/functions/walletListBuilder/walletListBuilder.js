import { isEmbeddedConnector, normalizeWalletName } from '@dynamic-labs/wallet-connector-core';
import { getCalculatedOffset } from './utils/getCalculatedOffset/getCalculatedOffset.js';
import { groupWalletOptions } from './utils/groupWalletOptions/groupWalletOptions.js';
import { filterConnectedWallets } from './utils/filterConnectedWallets/filterConnectedWallets.js';

const PRIORITY_WALLET_LIST = [
    'metamask',
    'coinbase',
    'walletconnect',
    'phantom',
    'argentx',
    'myalgo',
    'blocto',
    'solflare',
    'braavos',
    'trust',
    'rainbow',
    'dapper',
    'glow',
    'lilico',
];
const SIGN_IN_WITH_EMAIL_WALLET_NAME = 'Sign In With Email';
const sortedInputList = (inputList) => {
    // Input is the unordered list of wallets we support
    const unsortedPriorityWallets = [];
    const unsortedOtherWallets = [];
    inputList.forEach((wallet) => {
        if (PRIORITY_WALLET_LIST.includes(normalizeWalletName(wallet.name))) {
            unsortedPriorityWallets.push(wallet);
        }
        else {
            unsortedOtherWallets.push(wallet);
        }
    });
    const sortedPriorityWallets = unsortedPriorityWallets
        .slice()
        .sort((a, b) => PRIORITY_WALLET_LIST.indexOf(normalizeWalletName(a.name)) -
        PRIORITY_WALLET_LIST.indexOf(normalizeWalletName(b.name)));
    return [...sortedPriorityWallets, ...unsortedOtherWallets];
};
const walletListBuilder = ({ authMode, connectedWallets, multiWallet, numberOfWalletsToShow, inputList, isWalletConnectList, lastUsedWalletName, signWithEmailWalletName, searchFilter, walletsFilter, loginWithEmail, groupWallets, walletBook, showMoreWalletsWithFilter, }) => {
    let walletList = inputList;
    if (isWalletConnectList) {
        walletList = inputList.filter((wallet) => wallet.walletConnector.isWalletConnect &&
            wallet.name.toLowerCase() !== 'walletconnect');
    }
    if (authMode === 'connect-only' && multiWallet) {
        walletList = filterConnectedWallets({
            connectedWallets,
            walletOptions: walletList,
        });
    }
    let lastUsedWallet;
    const hasWalletFilter = Boolean(walletsFilter);
    const signWithEmailWallet = getSignWithEmailWallet(signWithEmailWalletName, walletList);
    const installedWallets = [];
    const otherWallets = [];
    const orderedInputList = orderAndFilterList(walletList, walletsFilter, isWalletConnectList);
    orderedInputList.forEach((wallet) => {
        if (isEmbeddedConnector(wallet.walletConnector)) {
            return;
        }
        else if ((lastUsedWalletName === null || lastUsedWalletName === void 0 ? void 0 : lastUsedWalletName.toLowerCase()) === wallet.name.toLowerCase()) {
            lastUsedWallet = wallet;
        }
        else if (wallet.isInstalledOnBrowser) {
            installedWallets.push(wallet);
        }
        else {
            otherWallets.push(wallet);
        }
    });
    const firstPriorityWallets = [
        ...(signWithEmailWallet ? [signWithEmailWallet] : []),
        ...(lastUsedWallet ? [lastUsedWallet] : []),
    ];
    const walletsList = [
        ...firstPriorityWallets,
        ...installedWallets,
        ...otherWallets,
    ];
    const finalizedWalletList = groupWallets
        ? groupWalletOptions(walletBook, walletsList)
        : walletsList;
    const updatedNumberOfWalletsToShow = showMoreWalletsWithFilter && hasWalletFilter
        ? calculateWithFilterNumberOfWalletsToShow(orderedInputList, firstPriorityWallets.concat(installedWallets), numberOfWalletsToShow)
        : numberOfWalletsToShow;
    return {
        numberOfWallets: walletsList.length,
        walletsList: listToDisplay(finalizedWalletList, searchFilter, isWalletConnectList, updatedNumberOfWalletsToShow, hasWalletFilter, loginWithEmail),
    };
};
// We want to show the full list of wallets when we render the wallet connect list even
// if a filter was applied to the main page
const orderAndFilterList = (walletList, walletsFilter, isWalletConnectList) => {
    if (!isWalletConnectList && walletsFilter) {
        return walletsFilter(sortedInputList(walletList));
    }
    else {
        return sortedInputList(walletList);
    }
};
const applySearchFilterToWalletOptionList = (rawSearchFilter, walletOptionList) => {
    const searchFilter = rawSearchFilter.trim().toLowerCase();
    return walletOptionList.filter((walletOption) => {
        var _a;
        return walletOption.name.trim().toLowerCase().includes(searchFilter) ||
            (
            // Validate nested wallets
            (_a = walletOption.groupedWallets) === null || _a === void 0 ? void 0 : _a.some((nestedWalletOption) => nestedWalletOption.name.trim().toLowerCase().includes(searchFilter)));
    });
};
const listToDisplay = (finalizedList, searchFilter, isWalletConnectList, numberOfWalletsToShow, hasWalletFilter, loginWithEmail) => {
    if (searchFilter) {
        return applySearchFilterToWalletOptionList(searchFilter, finalizedList);
    }
    else if (isWalletConnectList) {
        return finalizedList;
    }
    else if (loginWithEmail) {
        return finalizedList.slice(0, numberOfWalletsToShow);
    }
    else {
        const list = finalizedList.map((wallet) => wallet.name.toLowerCase());
        const offset = getCalculatedOffset({
            defaultOffset: numberOfWalletsToShow,
            hasWalletFilter,
            list,
            priorityList: PRIORITY_WALLET_LIST,
        });
        return finalizedList.slice(0, offset);
    }
};
/**
 * When a filter is applied we would like to show the installed + last used wallets
 * in addition to the wallets that the filter has specified.
 * This calculation adds an offset to numberOfWalletsToShow so we will show the
 * intended wallets + installed and last used.
 *
 * For example:
 * we want to show 4 wallets: ['metamask', 'rainbow', 'walletconnect', 'coinbase']
 * and someone is using brave with installed phantom he should see
 * [ 'brave injected', phantom ,'metamask', 'rainbow', 'walletconnect', 'coinbase',]
 *
 * note — this should only apply to the WalletList view!
 */
const calculateWithFilterNumberOfWalletsToShow = (allWalletsOrdered, installedOrUsedWallets, numberOfWalletsToShow) => {
    const filteredWallets = allWalletsOrdered.slice(0, numberOfWalletsToShow);
    const offset = installedOrUsedWallets.filter((wallet) => !filteredWallets.includes(wallet)).length;
    return numberOfWalletsToShow + offset;
};
const getSignWithEmailWallet = (signWithEmailWalletName, inputList) => {
    let walletOverride;
    if (signWithEmailWalletName) {
        const walletToReplicate = inputList.find((wallet) => wallet.name === signWithEmailWalletName &&
            wallet.walletConnector.canConnectViaCustodialService);
        if (walletToReplicate) {
            walletOverride = Object.assign({}, walletToReplicate);
            walletOverride.name = SIGN_IN_WITH_EMAIL_WALLET_NAME;
        }
    }
    return walletOverride;
};

export { PRIORITY_WALLET_LIST, SIGN_IN_WITH_EMAIL_WALLET_NAME, walletListBuilder };
