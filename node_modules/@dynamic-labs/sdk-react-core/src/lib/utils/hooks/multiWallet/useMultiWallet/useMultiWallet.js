import { useEffect } from 'react';
import '@dynamic-labs/sdk-api';
import '../../../../shared/logger.js';
import '@dynamic-labs/iconic';
import '@dynamic-labs/wallet-connector-core';
import 'react/jsx-runtime';
import '../../../../context/ViewContext/ViewContext.js';
import '@dynamic-labs/wallet-book';
import { IS_MULTI_WALLET_ENABLED } from '../../../constants/localStorage.js';
import '../../../constants/colors.js';
import { LocalStorage } from '../../../../shared/utils/classes/storage/localStorage.js';
import 'viem';
import { useLocalStorage } from '../../../../shared/utils/hooks/useLocalStorage/useLocalStorage.js';
import '@dynamic-labs/utils';
import '../../../../shared/consts/index.js';

const useMultiWallet = (toolkitEnabled, multiWalletSettings) => {
    const isMultiWalletEnabled = multiWalletSettings !== null && multiWalletSettings !== void 0 ? multiWalletSettings : false;
    const [multiWallet, setMultiWallet] = useLocalStorage(IS_MULTI_WALLET_ENABLED, isMultiWalletEnabled);
    useEffect(() => {
        // don't overwrite toolkit stored value after the refresh
        if (toolkitEnabled &&
            LocalStorage.getFromLS(IS_MULTI_WALLET_ENABLED) !== undefined) {
            return;
        }
        if (multiWalletSettings) {
            setMultiWallet(multiWalletSettings);
        }
    }, [multiWalletSettings]);
    return { multiWallet, setMultiWallet };
};

export { useMultiWallet };
