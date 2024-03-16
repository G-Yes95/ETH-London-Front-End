'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var jsxRuntime = require('react/jsx-runtime');
var Typography = require('../Typography/Typography.cjs');
var IconWithSpinner = require('../IconWithSpinner/IconWithSpinner.cjs');

const SelectWalletChainLayout = ({ children, HeaderIcon }) => (jsxRuntime.jsxs("div", { className: 'select-wallet-chain-layout__container', children: [jsxRuntime.jsx(IconWithSpinner.IconWithSpinner, { className: 'select-wallet-chain-layout__icon', Icon: HeaderIcon, iconSize: 96 }), jsxRuntime.jsxs("div", { className: 'select-wallet-chain-layout__body', children: [jsxRuntime.jsx(Typography.Typography, { className: 'select-wallet-chain-layout__text', as: 'p', color: 'secondary', variant: 'body_normal', children: "This wallet supports multiple chains. Select which chain you'd like to connect to" }), jsxRuntime.jsx("div", { className: 'select-wallet-chain-layout__list', children: children })] })] }));

exports.SelectWalletChainLayout = SelectWalletChainLayout;
