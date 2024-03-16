import { jsxs, Fragment, jsx } from 'react/jsx-runtime';
import { useMemo } from 'react';
import { isEmailOTPWalletConnector, isEmailWalletConnector } from '@dynamic-labs/wallet-connector-core';
import { useInternalDynamicContext } from '../../../../context/DynamicContext/useInternalDynamicContext.js';
import { DetectedNewWalletModal } from '../../prompts/DetectedNewWalletModal/DetectedNewWalletModal.js';
import { PendingAccountSwitchModal } from '../../prompts/PendingAccountSwitchModal/PendingAccountSwitchModal.js';
import { PendingAccountSwitchToLinkModal } from '../../prompts/PendingAccountSwitchToLinkModal/PendingAccountSwitchToLinkModal.js';
import { PendingSignModal } from '../../prompts/PendingSignModal/PendingSignModal.js';
import { PrimaryNotConnectedModal } from '../../prompts/PrimaryNotConnectedModal/PrimaryNotConnectedModal.js';
import { QrCodeModalView } from '../../prompts/QrCodeModalView/QrCodeModalView.js';
import { UnlinkWalletPopUp } from '../../prompts/UnlinkWalletPopUp/UnlinkWalletPopUp.js';
import { WidgetPortal } from '../WidgetPortal/WidgetPortal.js';
import { NoQrNotInstalledModalView } from '../../prompts/NoQrNotInstalledModalView/NoQrNotInstalledModalView.js';
import { PendingConnectionModal } from '../../prompts/PendingConnectionModal/PendingConnectionModal.js';

const getPrompt = (accountSwitchState, multiWallet) => {
    if (accountSwitchState === 'idle')
        return null;
    const mapAccountSwitchStateToPromptComponent = {
        linking_new_wallet: PendingAccountSwitchToLinkModal,
        primary_not_connected: multiWallet
            ? PrimaryNotConnectedModal
            : PendingAccountSwitchModal,
        switching_primary: PendingAccountSwitchModal,
    };
    return mapAccountSwitchStateToPromptComponent[accountSwitchState];
};
const DynamicWidgetPrompts = () => {
    var _a, _b, _c;
    const { setDesktopUri, accountSwitchState, multiWalletWidgetState, showQrcodeModal, setShowQrcodeModal, selectedWalletConnector, multiWallet, selectedWalletWithAction, } = useInternalDynamicContext();
    const AccountSwitchModal = useMemo(() => {
        if (multiWalletWidgetState !== 'awaiting_account_switch')
            return null;
        return getPrompt(accountSwitchState, multiWallet) || null;
    }, [accountSwitchState, multiWalletWidgetState]);
    const AwaitingConnectionModal = useMemo(() => {
        if (selectedWalletConnector &&
            (isEmailOTPWalletConnector(selectedWalletConnector) ||
                isEmailWalletConnector(selectedWalletConnector))) {
            return PendingSignModal;
        }
        return PendingConnectionModal;
    }, [selectedWalletConnector]);
    return (jsxs(Fragment, { children: [multiWalletWidgetState === 'awaiting_signature' && jsx(PendingSignModal, {}), AccountSwitchModal && jsx(AccountSwitchModal, {}), (selectedWalletWithAction === null || selectedWalletWithAction === void 0 ? void 0 : selectedWalletWithAction.action) === 'unlink' && (jsx(UnlinkWalletPopUp, { walletId: (_a = selectedWalletWithAction.wallet) === null || _a === void 0 ? void 0 : _a.id })), multiWalletWidgetState === 'awaiting_connection' &&
                (showQrcodeModal ? (jsx(WidgetPortal, { showCloseButton: true, onBackdropClick: () => {
                        setShowQrcodeModal(false);
                        setDesktopUri('');
                    }, children: (selectedWalletConnector === null || selectedWalletConnector === void 0 ? void 0 : selectedWalletConnector.canConnectViaQrCode) ? (jsx(QrCodeModalView, { walletId: (_c = (_b = selectedWalletWithAction === null || selectedWalletWithAction === void 0 ? void 0 : selectedWalletWithAction.wallet) === null || _b === void 0 ? void 0 : _b.id) !== null && _c !== void 0 ? _c : '' })) : (jsx(NoQrNotInstalledModalView, {})) })) : (jsx(AwaitingConnectionModal, {}))), multiWalletWidgetState === 'detected_new_wallet' && (jsx(DetectedNewWalletModal, {}))] }));
};

export { DynamicWidgetPrompts };
