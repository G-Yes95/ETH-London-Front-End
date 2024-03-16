import { useCallback } from 'react';
import { normalizeWalletName } from '@dynamic-labs/wallet-connector-core';
import '@dynamic-labs/sdk-api';
import '../../../shared/logger.js';
import '@dynamic-labs/iconic';
import 'react/jsx-runtime';
import '../../../context/ViewContext/ViewContext.js';
import '@dynamic-labs/wallet-book';
import '../../constants/colors.js';
import { LocalStorage } from '../../../shared/utils/classes/storage/localStorage.js';
import 'viem';
import '@dynamic-labs/utils';
import '../../../shared/consts/index.js';

const useClearWalletConnectSessions = ({ connectors }) => {
    const clearOphanedWalletConnectSessions = useCallback(() => {
        if (typeof window === 'undefined')
            return;
        if (connectors.length === 0)
            return;
        const names = new Set(connectors.map((connector) => normalizeWalletName(connector.name)));
        for (const key of LocalStorage.getKeys()) {
            if (key.startsWith('walletconnect') &&
                !names.has(key.replace('walletconnect-', ''))) {
                localStorage.removeItem(key);
            }
        }
    }, [connectors]);
    const clearAllWalletConnectSessions = () => {
        if (typeof window === 'undefined')
            return;
        for (const key of LocalStorage.getKeys()) {
            if (key.startsWith('walletconnect') ||
                key.startsWith('walletlink') ||
                key.startsWith('wc@2')) {
                localStorage.removeItem(key);
            }
        }
    };
    return { clearAllWalletConnectSessions, clearOphanedWalletConnectSessions };
};

export { useClearWalletConnectSessions };
