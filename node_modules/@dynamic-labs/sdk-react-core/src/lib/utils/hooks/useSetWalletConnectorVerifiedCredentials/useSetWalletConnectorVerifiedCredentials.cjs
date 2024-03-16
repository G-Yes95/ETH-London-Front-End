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

const useSetWalletConnectorVerifiedCredentials = (authToken, walletOptions) => {
    if (!authToken || !(walletOptions === null || walletOptions === void 0 ? void 0 : walletOptions.length))
        return;
    const decodedJwt = decodeJwt.decodeJwt(authToken);
    if (!decodedJwt) {
        return;
    }
    walletOptions.forEach((walletOption) => {
        walletOption.walletConnector.setVerifiedCredentials(decodedJwt.verifiedCredentials);
    });
};

exports.useSetWalletConnectorVerifiedCredentials = useSetWalletConnectorVerifiedCredentials;
