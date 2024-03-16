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

// verifies if user has any type of wallet
const getUserWalletsFromVerifiedCredentials = (jwt) => {
    var _a;
    const decodedJwt = decodeJwt(jwt);
    return (_a = decodedJwt === null || decodedJwt === void 0 ? void 0 : decodedJwt.verifiedCredentials) === null || _a === void 0 ? void 0 : _a.filter(({ walletProvider }) => walletProvider);
};

export { getUserWalletsFromVerifiedCredentials };
