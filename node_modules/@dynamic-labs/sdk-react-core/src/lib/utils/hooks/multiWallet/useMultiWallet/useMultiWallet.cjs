'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
require('@dynamic-labs/sdk-api');
require('../../../../shared/logger.cjs');
require('@dynamic-labs/iconic');
require('@dynamic-labs/wallet-connector-core');
require('react/jsx-runtime');
require('../../../../context/ViewContext/ViewContext.cjs');
require('@dynamic-labs/wallet-book');
var localStorage = require('../../../constants/localStorage.cjs');
require('../../../constants/colors.cjs');
var localStorage$1 = require('../../../../shared/utils/classes/storage/localStorage.cjs');
require('viem');
var useLocalStorage = require('../../../../shared/utils/hooks/useLocalStorage/useLocalStorage.cjs');
require('@dynamic-labs/utils');
require('../../../../shared/consts/index.cjs');

const useMultiWallet = (toolkitEnabled, multiWalletSettings) => {
    const isMultiWalletEnabled = multiWalletSettings !== null && multiWalletSettings !== void 0 ? multiWalletSettings : false;
    const [multiWallet, setMultiWallet] = useLocalStorage.useLocalStorage(localStorage.IS_MULTI_WALLET_ENABLED, isMultiWalletEnabled);
    React.useEffect(() => {
        // don't overwrite toolkit stored value after the refresh
        if (toolkitEnabled &&
            localStorage$1.LocalStorage.getFromLS(localStorage.IS_MULTI_WALLET_ENABLED) !== undefined) {
            return;
        }
        if (multiWalletSettings) {
            setMultiWallet(multiWalletSettings);
        }
    }, [multiWalletSettings]);
    return { multiWallet, setMultiWallet };
};

exports.useMultiWallet = useMultiWallet;
