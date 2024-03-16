'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _tslib = require('../../../../../_virtual/_tslib.cjs');
var walletConnectorCore = require('@dynamic-labs/wallet-connector-core');
require('@dynamic-labs/sdk-api');
require('../../../shared/logger.cjs');
require('@dynamic-labs/iconic');
require('react/jsx-runtime');
require('../../../context/ViewContext/ViewContext.cjs');
require('react');
require('@dynamic-labs/wallet-book');
require('../../constants/colors.cjs');
require('../../../shared/utils/classes/storage/localStorage.cjs');
require('viem');
require('@dynamic-labs/utils');
require('../../../shared/consts/index.cjs');
require('@dynamic-labs/multi-wallet');
var getReferencedAccount = require('../../functions/getReferencedAccount/getReferencedAccount.cjs');

/**
 * This function will use a referenced account to kick off the social wallet
 * authentication. This is useful in the multiwallet scenario where the user
 * wants to set their disconnected social wallet as their primary wallet, in
 * which case the wallet needs to be reconnected
 */
const reconnectSocialWallet = (jwt, wallet) => _tslib.__awaiter(void 0, void 0, void 0, function* () {
    if (!walletConnectorCore.isSocialWalletConnector(wallet.connector)) {
        return;
    }
    const socialAccountDataForWallet = getReferencedAccount.getReferencedAccount(jwt, wallet.id);
    if (!socialAccountDataForWallet ||
        !socialAccountDataForWallet.oauthProvider) {
        return;
    }
    yield wallet.connector.connect(socialAccountDataForWallet.oauthProvider);
});

exports.reconnectSocialWallet = reconnectSocialWallet;
