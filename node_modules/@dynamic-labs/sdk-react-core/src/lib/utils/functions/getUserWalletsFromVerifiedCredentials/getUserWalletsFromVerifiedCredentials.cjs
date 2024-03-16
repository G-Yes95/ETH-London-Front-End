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

// verifies if user has any type of wallet
const getUserWalletsFromVerifiedCredentials = (jwt) => {
    var _a;
    const decodedJwt = decodeJwt.decodeJwt(jwt);
    return (_a = decodedJwt === null || decodedJwt === void 0 ? void 0 : decodedJwt.verifiedCredentials) === null || _a === void 0 ? void 0 : _a.filter(({ walletProvider }) => walletProvider);
};

exports.getUserWalletsFromVerifiedCredentials = getUserWalletsFromVerifiedCredentials;
