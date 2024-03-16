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

const useSetWalletConnectorVerifiedCredentials = (authToken, walletOptions) => {
    if (!authToken || !(walletOptions === null || walletOptions === void 0 ? void 0 : walletOptions.length))
        return;
    const decodedJwt = decodeJwt(authToken);
    if (!decodedJwt) {
        return;
    }
    walletOptions.forEach((walletOption) => {
        walletOption.walletConnector.setVerifiedCredentials(decodedJwt.verifiedCredentials);
    });
};

export { useSetWalletConnectorVerifiedCredentials };
