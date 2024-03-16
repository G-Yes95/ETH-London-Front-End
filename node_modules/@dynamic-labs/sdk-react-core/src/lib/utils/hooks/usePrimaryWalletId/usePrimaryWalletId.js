import { useCallback } from 'react';
import '@dynamic-labs/sdk-api';
import '../../../shared/logger.js';
import '@dynamic-labs/iconic';
import '@dynamic-labs/wallet-connector-core';
import 'react/jsx-runtime';
import '../../../context/ViewContext/ViewContext.js';
import '@dynamic-labs/wallet-book';
import { PRIMARY_WALLET_ID } from '../../constants/localStorage.js';
import '../../constants/colors.js';
import '../../../shared/utils/classes/storage/localStorage.js';
import 'viem';
import { useLocalStorage } from '../../../shared/utils/hooks/useLocalStorage/useLocalStorage.js';
import '@dynamic-labs/utils';
import '../../../shared/consts/index.js';
import { primaryWalletIdValidator } from '../useWalletConnectors/utils/primaryWalletIdValidator/primaryWalletIdValidator.js';
import '@dynamic-labs/multi-wallet';

const usePrimaryWalletId = () => {
    const [primaryWalletId, setPrimaryWalletIdState, clearPrimaryWalletId] = useLocalStorage(PRIMARY_WALLET_ID, undefined, primaryWalletIdValidator);
    const setPrimaryWalletId = useCallback((walletId) => {
        setPrimaryWalletIdState(walletId);
    }, [setPrimaryWalletIdState]);
    return {
        clearPrimaryWalletId,
        primaryWalletId,
        setPrimaryWalletId,
    };
};

export { usePrimaryWalletId };
