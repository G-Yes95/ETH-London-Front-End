'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var jsxRuntime = require('react/jsx-runtime');
var React = require('react');
var walletConnectorCore = require('@dynamic-labs/wallet-connector-core');
var useInternalDynamicContext = require('../../../../context/DynamicContext/useInternalDynamicContext.cjs');
var DetectedNewWalletModal = require('../../prompts/DetectedNewWalletModal/DetectedNewWalletModal.cjs');
var PendingAccountSwitchModal = require('../../prompts/PendingAccountSwitchModal/PendingAccountSwitchModal.cjs');
var PendingAccountSwitchToLinkModal = require('../../prompts/PendingAccountSwitchToLinkModal/PendingAccountSwitchToLinkModal.cjs');
var PendingSignModal = require('../../prompts/PendingSignModal/PendingSignModal.cjs');
var PrimaryNotConnectedModal = require('../../prompts/PrimaryNotConnectedModal/PrimaryNotConnectedModal.cjs');
var QrCodeModalView = require('../../prompts/QrCodeModalView/QrCodeModalView.cjs');
var UnlinkWalletPopUp = require('../../prompts/UnlinkWalletPopUp/UnlinkWalletPopUp.cjs');
var WidgetPortal = require('../WidgetPortal/WidgetPortal.cjs');
var NoQrNotInstalledModalView = require('../../prompts/NoQrNotInstalledModalView/NoQrNotInstalledModalView.cjs');
var PendingConnectionModal = require('../../prompts/PendingConnectionModal/PendingConnectionModal.cjs');

const getPrompt = (accountSwitchState, multiWallet) => {
    if (accountSwitchState === 'idle')
        return null;
    const mapAccountSwitchStateToPromptComponent = {
        linking_new_wallet: PendingAccountSwitchToLinkModal.PendingAccountSwitchToLinkModal,
        primary_not_connected: multiWallet
            ? PrimaryNotConnectedModal.PrimaryNotConnectedModal
            : PendingAccountSwitchModal.PendingAccountSwitchModal,
        switching_primary: PendingAccountSwitchModal.PendingAccountSwitchModal,
    };
    return mapAccountSwitchStateToPromptComponent[accountSwitchState];
};
const DynamicWidgetPrompts = () => {
    var _a, _b, _c;
    const { setDesktopUri, accountSwitchState, multiWalletWidgetState, showQrcodeModal, setShowQrcodeModal, selectedWalletConnector, multiWallet, selectedWalletWithAction, } = useInternalDynamicContext.useInternalDynamicContext();
    const AccountSwitchModal = React.useMemo(() => {
        if (multiWalletWidgetState !== 'awaiting_account_switch')
            return null;
        return getPrompt(accountSwitchState, multiWallet) || null;
    }, [accountSwitchState, multiWalletWidgetState]);
    const AwaitingConnectionModal = React.useMemo(() => {
        if (selectedWalletConnector &&
            (walletConnectorCore.isEmailOTPWalletConnector(selectedWalletConnector) ||
                walletConnectorCore.isEmailWalletConnector(selectedWalletConnector))) {
            return PendingSignModal.PendingSignModal;
        }
        return PendingConnectionModal.PendingConnectionModal;
    }, [selectedWalletConnector]);
    return (jsxRuntime.jsxs(jsxRuntime.Fragment, { children: [multiWalletWidgetState === 'awaiting_signature' && jsxRuntime.jsx(PendingSignModal.PendingSignModal, {}), AccountSwitchModal && jsxRuntime.jsx(AccountSwitchModal, {}), (selectedWalletWithAction === null || selectedWalletWithAction === void 0 ? void 0 : selectedWalletWithAction.action) === 'unlink' && (jsxRuntime.jsx(UnlinkWalletPopUp.UnlinkWalletPopUp, { walletId: (_a = selectedWalletWithAction.wallet) === null || _a === void 0 ? void 0 : _a.id })), multiWalletWidgetState === 'awaiting_connection' &&
                (showQrcodeModal ? (jsxRuntime.jsx(WidgetPortal.WidgetPortal, { showCloseButton: true, onBackdropClick: () => {
                        setShowQrcodeModal(false);
                        setDesktopUri('');
                    }, children: (selectedWalletConnector === null || selectedWalletConnector === void 0 ? void 0 : selectedWalletConnector.canConnectViaQrCode) ? (jsxRuntime.jsx(QrCodeModalView.QrCodeModalView, { walletId: (_c = (_b = selectedWalletWithAction === null || selectedWalletWithAction === void 0 ? void 0 : selectedWalletWithAction.wallet) === null || _b === void 0 ? void 0 : _b.id) !== null && _c !== void 0 ? _c : '' })) : (jsxRuntime.jsx(NoQrNotInstalledModalView.NoQrNotInstalledModalView, {})) })) : (jsxRuntime.jsx(AwaitingConnectionModal, {}))), multiWalletWidgetState === 'detected_new_wallet' && (jsxRuntime.jsx(DetectedNewWalletModal.DetectedNewWalletModal, {}))] }));
};

exports.DynamicWidgetPrompts = DynamicWidgetPrompts;
