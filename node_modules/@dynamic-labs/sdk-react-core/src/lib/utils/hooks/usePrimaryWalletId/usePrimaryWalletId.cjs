'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
require('@dynamic-labs/sdk-api');
require('../../../shared/logger.cjs');
require('@dynamic-labs/iconic');
require('@dynamic-labs/wallet-connector-core');
require('react/jsx-runtime');
require('../../../context/ViewContext/ViewContext.cjs');
require('@dynamic-labs/wallet-book');
var localStorage = require('../../constants/localStorage.cjs');
require('../../constants/colors.cjs');
require('../../../shared/utils/classes/storage/localStorage.cjs');
require('viem');
var useLocalStorage = require('../../../shared/utils/hooks/useLocalStorage/useLocalStorage.cjs');
require('@dynamic-labs/utils');
require('../../../shared/consts/index.cjs');
var primaryWalletIdValidator = require('../useWalletConnectors/utils/primaryWalletIdValidator/primaryWalletIdValidator.cjs');
require('@dynamic-labs/multi-wallet');

const usePrimaryWalletId = () => {
    const [primaryWalletId, setPrimaryWalletIdState, clearPrimaryWalletId] = useLocalStorage.useLocalStorage(localStorage.PRIMARY_WALLET_ID, undefined, primaryWalletIdValidator.primaryWalletIdValidator);
    const setPrimaryWalletId = React.useCallback((walletId) => {
        setPrimaryWalletIdState(walletId);
    }, [setPrimaryWalletIdState]);
    return {
        clearPrimaryWalletId,
        primaryWalletId,
        setPrimaryWalletId,
    };
};

exports.usePrimaryWalletId = usePrimaryWalletId;
