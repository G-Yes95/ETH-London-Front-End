'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var walletConnectorCore = require('@dynamic-labs/wallet-connector-core');
require('@dynamic-labs/sdk-api');
require('../../../shared/logger.cjs');
require('@dynamic-labs/iconic');
require('react/jsx-runtime');
require('../../../context/ViewContext/ViewContext.cjs');
require('@dynamic-labs/wallet-book');
require('../../constants/colors.cjs');
var localStorage$1 = require('../../../shared/utils/classes/storage/localStorage.cjs');
require('viem');
require('@dynamic-labs/utils');
require('../../../shared/consts/index.cjs');

const useClearWalletConnectSessions = ({ connectors }) => {
    const clearOphanedWalletConnectSessions = React.useCallback(() => {
        if (typeof window === 'undefined')
            return;
        if (connectors.length === 0)
            return;
        const names = new Set(connectors.map((connector) => walletConnectorCore.normalizeWalletName(connector.name)));
        for (const key of localStorage$1.LocalStorage.getKeys()) {
            if (key.startsWith('walletconnect') &&
                !names.has(key.replace('walletconnect-', ''))) {
                localStorage.removeItem(key);
            }
        }
    }, [connectors]);
    const clearAllWalletConnectSessions = () => {
        if (typeof window === 'undefined')
            return;
        for (const key of localStorage$1.LocalStorage.getKeys()) {
            if (key.startsWith('walletconnect') ||
                key.startsWith('walletlink') ||
                key.startsWith('wc@2')) {
                localStorage.removeItem(key);
            }
        }
    };
    return { clearAllWalletConnectSessions, clearOphanedWalletConnectSessions };
};

exports.useClearWalletConnectSessions = useClearWalletConnectSessions;
