import { decodeJwt } from '../../../shared/utils/functions/decodeJwt/decodeJwt.js';
import '@dynamic-labs/iconic';
import '@dynamic-labs/wallet-connector-core';
import 'react/jsx-runtime';
import '../../../context/ViewContext/ViewContext.js';
import 'react';
import '../../../shared/logger.js';
import '@dynamic-labs/wallet-book';
import '../../constants/colors.js';
import '../../../shared/utils/classes/storage/localStorage.js';
import 'viem';
import '@dynamic-labs/utils';
import '../../../shared/consts/index.js';

/**
 * given a wallet it, this function will look through the jwt and do the following:
 * 1. find the account that matches the wallet id
 * 2. find the account that matches the refId of the account found in step 1
 * 3. return the account found in step 2. this is the referenced account
 */
const getReferencedAccount = (jwt, walletId) => {
    const decoded = decodeJwt(jwt);
    const accountForWalletId = decoded === null || decoded === void 0 ? void 0 : decoded.verifiedCredentials.find((account) => account.id === walletId);
    return decoded === null || decoded === void 0 ? void 0 : decoded.verifiedCredentials.find((account) => account.id === (accountForWalletId === null || accountForWalletId === void 0 ? void 0 : accountForWalletId.refId));
};

export { getReferencedAccount };
