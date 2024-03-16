'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _tslib = require('../../../../../../_virtual/_tslib.cjs');
var jsxRuntime = require('react/jsx-runtime');
var React = require('react');
var walletBook = require('@dynamic-labs/wallet-book');
var useInternalDynamicContext = require('../../../../context/DynamicContext/useInternalDynamicContext.cjs');
var useConnectedAccountWallet = require('../../../../utils/hooks/useConnectedAccountWallet/useConnectedAccountWallet.cjs');
var DefaultPromptModal = require('../DefaultPromptModal/DefaultPromptModal.cjs');
var SwitchAccountView = require('./SwitchAccountView/SwitchAccountView.cjs');
var SwitchOrUseActiveAccountView = require('./SwitchOrUseActiveAccountView/SwitchOrUseActiveAccountView.cjs');

const PendingAccountSwitchModal = () => {
    var _a, _b;
    const { selectedWalletWithAction, primaryWallet, secondaryWallets } = useInternalDynamicContext.useInternalDynamicContext();
    const selectedConnector = (_a = selectedWalletWithAction === null || selectedWalletWithAction === void 0 ? void 0 : selectedWalletWithAction.wallet) === null || _a === void 0 ? void 0 : _a.connector;
    const isSameWallet = (selectedConnector === null || selectedConnector === void 0 ? void 0 : selectedConnector.name) === (primaryWallet === null || primaryWallet === void 0 ? void 0 : primaryWallet.connector.name);
    const { data: connectedWallet } = useConnectedAccountWallet.useConnectedAccountWallet((_b = selectedWalletWithAction === null || selectedWalletWithAction === void 0 ? void 0 : selectedWalletWithAction.wallet) === null || _b === void 0 ? void 0 : _b.connector, secondaryWallets);
    React.useEffect(() => {
        //flow client library only supports one connected wallet at any given time.
        const disconnectAndConnect = () => _tslib.__awaiter(void 0, void 0, void 0, function* () {
            var _a, _b;
            if ((selectedConnector === null || selectedConnector === void 0 ? void 0 : selectedConnector.connectedChain) !== 'FLOW') {
                return;
            }
            yield ((_a = selectedConnector === null || selectedConnector === void 0 ? void 0 : selectedConnector.endSession) === null || _a === void 0 ? void 0 : _a.call(selectedConnector));
            (_b = selectedConnector === null || selectedConnector === void 0 ? void 0 : selectedConnector.connect) === null || _b === void 0 ? void 0 : _b.call(selectedConnector);
        });
        disconnectAndConnect();
    }, [selectedConnector]);
    return (jsxRuntime.jsx(DefaultPromptModal.DefaultPromptModal, { showCloseButton: true, dataTestId: 'pending-account-switch', icon: jsxRuntime.jsx(walletBook.WalletIcon, { walletKey: selectedConnector === null || selectedConnector === void 0 ? void 0 : selectedConnector.key }), title: `Switch wallet in ${selectedWalletWithAction === null || selectedWalletWithAction === void 0 ? void 0 : selectedWalletWithAction.wallet.connector.name}`, children: isSameWallet || !connectedWallet ? (jsxRuntime.jsx(SwitchAccountView.SwitchAccountView, { selectedWalletToSwitchTo: selectedWalletWithAction === null || selectedWalletWithAction === void 0 ? void 0 : selectedWalletWithAction.wallet })) : (jsxRuntime.jsx(SwitchOrUseActiveAccountView.SwitchOrUseActiveAccountView, { connectedWallet: connectedWallet, selectedWalletToSwitchTo: selectedWalletWithAction === null || selectedWalletWithAction === void 0 ? void 0 : selectedWalletWithAction.wallet })) }));
};

exports.PendingAccountSwitchModal = PendingAccountSwitchModal;
