'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var walletConnectorCore = require('@dynamic-labs/wallet-connector-core');

const isSameWalletName = (left, right) => walletConnectorCore.normalizeWalletName(left) === walletConnectorCore.normalizeWalletName(right);

exports.isSameWalletName = isSameWalletName;
