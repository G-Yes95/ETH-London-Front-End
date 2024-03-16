'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var jsxRuntime = require('react/jsx-runtime');
var walletBook = require('@dynamic-labs/wallet-book');
var SelectWalletChainLayout = require('../../components/SelectWalletChainLayout/SelectWalletChainLayout.cjs');
var WalletGroupContext = require('../../context/WalletGroupContext/WalletGroupContext.cjs');
var WalletGroupItem = require('./components/WalletGroupItem/WalletGroupItem.cjs');

const WalletGroupView = () => {
    var _a;
    const { selectedWalletGroup } = WalletGroupContext.useWalletGroupContext();
    const { walletBook: walletBook$1 } = walletBook.useWalletBookContext();
    if (!selectedWalletGroup)
        throw new Error('Could not access WalletGroup view without selected group');
    const walletBookData = walletBook.getWalletGroup(walletBook$1, selectedWalletGroup === null || selectedWalletGroup === void 0 ? void 0 : selectedWalletGroup.key);
    return (jsxRuntime.jsx(SelectWalletChainLayout.SelectWalletChainLayout, { HeaderIcon: jsxRuntime.jsx(walletBook.WalletIcon, { walletKey: (_a = walletBookData.brand) === null || _a === void 0 ? void 0 : _a.spriteId }), children: selectedWalletGroup.groupedWallets.map((wallet, index) => (jsxRuntime.jsx(WalletGroupItem.WalletGroupItem, { wallet: wallet }, `${wallet.key}_${index}`))) }));
};

exports.WalletGroupView = WalletGroupView;
