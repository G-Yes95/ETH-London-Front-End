'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var decodeJwt = require('../../../shared/utils/functions/decodeJwt/decodeJwt.cjs');
require('@dynamic-labs/iconic');
require('@dynamic-labs/wallet-connector-core');
require('react/jsx-runtime');
require('../../../context/ViewContext/ViewContext.cjs');
require('react');
require('../../../shared/logger.cjs');
require('@dynamic-labs/wallet-book');
require('../../constants/colors.cjs');
require('../../../shared/utils/classes/storage/localStorage.cjs');
require('viem');
require('@dynamic-labs/utils');
require('../../../shared/consts/index.cjs');

// TODO: Check if this is actually returning the correct verified credential
const findEmbeddedWalletFromVerifiedCredentials = (jwt) => {
    var _a;
    const decodedJwt = decodeJwt.decodeJwt(jwt);
    return (_a = decodedJwt === null || decodedJwt === void 0 ? void 0 : decodedJwt.verifiedCredentials) === null || _a === void 0 ? void 0 : _a.find(({ walletProvider }) => walletProvider === 'embeddedWallet');
};

exports.findEmbeddedWalletFromVerifiedCredentials = findEmbeddedWalletFromVerifiedCredentials;
