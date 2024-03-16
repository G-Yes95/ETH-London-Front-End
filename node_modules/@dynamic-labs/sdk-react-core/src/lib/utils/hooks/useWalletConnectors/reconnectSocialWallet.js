import { __awaiter } from '../../../../../_virtual/_tslib.js';
import { isSocialWalletConnector } from '@dynamic-labs/wallet-connector-core';
import '@dynamic-labs/sdk-api';
import '../../../shared/logger.js';
import '@dynamic-labs/iconic';
import 'react/jsx-runtime';
import '../../../context/ViewContext/ViewContext.js';
import 'react';
import '@dynamic-labs/wallet-book';
import '../../constants/colors.js';
import '../../../shared/utils/classes/storage/localStorage.js';
import 'viem';
import '@dynamic-labs/utils';
import '../../../shared/consts/index.js';
import '@dynamic-labs/multi-wallet';
import { getReferencedAccount } from '../../functions/getReferencedAccount/getReferencedAccount.js';

/**
 * This function will use a referenced account to kick off the social wallet
 * authentication. This is useful in the multiwallet scenario where the user
 * wants to set their disconnected social wallet as their primary wallet, in
 * which case the wallet needs to be reconnected
 */
const reconnectSocialWallet = (jwt, wallet) => __awaiter(void 0, void 0, void 0, function* () {
    if (!isSocialWalletConnector(wallet.connector)) {
        return;
    }
    const socialAccountDataForWallet = getReferencedAccount(jwt, wallet.id);
    if (!socialAccountDataForWallet ||
        !socialAccountDataForWallet.oauthProvider) {
        return;
    }
    yield wallet.connector.connect(socialAccountDataForWallet.oauthProvider);
});

export { reconnectSocialWallet };
