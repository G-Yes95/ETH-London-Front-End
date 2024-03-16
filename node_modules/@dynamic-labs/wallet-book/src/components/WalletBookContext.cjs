'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var react = require('react');

const WalletBookContext = react.createContext({});
const WalletBookContextProvider = ({ walletBook, children, }) => react.createElement(WalletBookContext.Provider, {
    value: { walletBook },
}, children);

exports.WalletBookContext = WalletBookContext;
exports.WalletBookContextProvider = WalletBookContextProvider;
