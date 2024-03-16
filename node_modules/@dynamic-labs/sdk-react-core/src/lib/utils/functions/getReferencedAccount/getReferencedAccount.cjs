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

/**
 * given a wallet it, this function will look through the jwt and do the following:
 * 1. find the account that matches the wallet id
 * 2. find the account that matches the refId of the account found in step 1
 * 3. return the account found in step 2. this is the referenced account
 */
const getReferencedAccount = (jwt, walletId) => {
    const decoded = decodeJwt.decodeJwt(jwt);
    const accountForWalletId = decoded === null || decoded === void 0 ? void 0 : decoded.verifiedCredentials.find((account) => account.id === walletId);
    return decoded === null || decoded === void 0 ? void 0 : decoded.verifiedCredentials.find((account) => account.id === (accountForWalletId === null || accountForWalletId === void 0 ? void 0 : accountForWalletId.refId));
};

exports.getReferencedAccount = getReferencedAccount;
