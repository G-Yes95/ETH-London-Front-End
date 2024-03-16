'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var jsxRuntime = require('react/jsx-runtime');
var CaptchaVerifyUser = require('./CaptchaVerifyUser/CaptchaVerifyUser.cjs');
var CollectUserDataView = require('./CollectUserDataView/CollectUserDataView.cjs');
var CollectUserDataViewLoginWithEmail = require('./CollectUserDataViewLoginWithEmail/CollectUserDataViewLoginWithEmail.cjs');
var EmailConfirmationWaitingView = require('./EmailConfirmationWaitingView/EmailConfirmationWaitingView.cjs');
var EmailUpdate = require('./EmailUpdate/EmailUpdate.cjs');
var EmailVerification = require('./EmailVerification/EmailVerification.cjs');
var EmailWalletOTPVerificationView = require('./EmailWalletOTPVerificationView/EmailWalletOTPVerificationView.cjs');
var NetworkNotSupported = require('./NetworkNotSupported/NetworkNotSupported.cjs');
var NetworkNotSupportedSwitchManual = require('./NetworkNotSupportedSwitchManual/NetworkNotSupportedSwitchManual.cjs');
var NoQrNotInstalledView = require('./NoQrNotInstalledView/NoQrNotInstalledView.cjs');
var PendingConnectView = require('./PendingConnectView/PendingConnectView.cjs');
var PendingSignatureView = require('./PendingSignatureView/PendingSignatureView.cjs');
var QrCodeView = require('./QrCodeView/QrCodeView.cjs');
var SocialRedirectView = require('./SocialRedirectView/SocialRedirectView.cjs');
var WalletList = require('./WalletList/WalletList.cjs');
var NoAccess = require('./NoAccess/NoAccess.cjs');
var WalletSignSpinnerView = require('./WalletSignSpinnerView/WalletSignSpinnerView.cjs');
var WalletUsedView = require('./WalletUsedView/WalletUsedView.cjs');
var SocialWrongAccountView = require('./SocialWrongAccountView/SocialWrongAccountView.cjs');
var WalletGroupView = require('./WalletGroupView/WalletGroupView.cjs');
var WalletLockedView = require('./WalletLockedView/WalletLockedView.cjs');
var BridgeWelcomeView = require('./BridgeWelcomeView/BridgeWelcomeView.cjs');
var BridgeSummaryView = require('./BridgeSummaryView/BridgeSummaryView.cjs');
var BridgeNextWalletConnectionView = require('./BridgeNextWalletConnectionView/BridgeNextWalletConnectionView.cjs');
var AccountExistsView = require('./AccountExistsView/AccountExistsView.cjs');
var MergeUserAccountsView = require('./MergeUserAccountsView/MergeUserAccountsView.cjs');
var WalletCannotBeTransferredView = require('./WalletCannotBeTransferredView/WalletCannotBeTransferredView.cjs');
var LoginView = require('./LoginView/LoginView.cjs');
var PasskeyIntroView = require('./Passkey/PasskeyIntroView/PasskeyIntroView.cjs');
var PasskeyBundleRecovery = require('./Passkey/PasskeyRecovery/BundleValidation/PasskeyBundleRecovery.cjs');
var PasskeyCompleteRecovery = require('./Passkey/PasskeyRecovery/CompleteRecovery/PasskeyCompleteRecovery.cjs');
var PasskeyInitRecovery = require('./Passkey/PasskeyRecovery/InitRecovery/PasskeyInitRecovery.cjs');

const viewToComponentMap = {
    'account-exists': jsxRuntime.jsx(AccountExistsView.AccountExistsView, {}),
    'bridge-next-wallet-connection': jsxRuntime.jsx(BridgeNextWalletConnectionView.BridgeNextWalletConnectionView, {}),
    'bridge-summary': jsxRuntime.jsx(BridgeSummaryView.BridgeSummaryView, {}),
    'bridge-welcome': jsxRuntime.jsx(BridgeWelcomeView.BridgeWelcomeView, {}),
    captcha: jsxRuntime.jsx(CaptchaVerifyUser.CaptchaVerifyUser, {}),
    'chainalysis-blocked-wallet': jsxRuntime.jsx(NoAccess.NoAccess, {}),
    'collect-user-data': jsxRuntime.jsx(CollectUserDataView.CollectUserDataView, {}),
    'collect-user-data-login-with-email': jsxRuntime.jsx(CollectUserDataViewLoginWithEmail.CollectUserDataViewLoginWithEmail, {}),
    'email-wallet-otp-verification-view': jsxRuntime.jsx(EmailWalletOTPVerificationView.EmailWalletOTPVerificationView, {}),
    'gate-blocked-wallet': jsxRuntime.jsx(NoAccess.NoAccess, {}),
    'login-with-email-or-wallet': jsxRuntime.jsx(LoginView.LoginView, {}),
    'login-with-email-or-wallet-full-wallet-list': jsxRuntime.jsx(LoginView.LoginView, {}),
    'login-with-email-verification': jsxRuntime.jsx(EmailVerification.EmailVerification, {}),
    'login-with-wallet-only': jsxRuntime.jsx(LoginView.LoginView, {}),
    'merge-user-accounts': jsxRuntime.jsx(MergeUserAccountsView.MergeUserAccountsView, {}),
    'multi-wallet-wallet-list': jsxRuntime.jsx(WalletList.WalletList, {}),
    'network-not-supported': jsxRuntime.jsx(NetworkNotSupported.NetworkNotSupported, {}),
    'network-not-supported-manual': jsxRuntime.jsx(NetworkNotSupportedSwitchManual.NetworkNotSupportedSwitchManual, {}),
    'no-access': jsxRuntime.jsx(NoAccess.NoAccess, {}),
    'no-qr-not-installed': jsxRuntime.jsx(NoQrNotInstalledView.NoQrNotInstalledView, {}),
    'passkey-intro': jsxRuntime.jsx(PasskeyIntroView.PasskeyIntroView, {}),
    'passkey-recovery-bundle': jsxRuntime.jsx(PasskeyBundleRecovery.PasskeyBundleRecovery, {}),
    'passkey-recovery-complete': jsxRuntime.jsx(PasskeyCompleteRecovery.PasskeyCompleteRecovery, {}),
    'passkey-recovery-start': jsxRuntime.jsx(PasskeyInitRecovery.PasskeyInitRecovery, {}),
    'pending-connect': jsxRuntime.jsx(PendingConnectView.PendingConnectView, {}),
    'pending-signature': jsxRuntime.jsx(PendingSignatureView.PendingSignatureView, {}),
    'pending-signature-without-back-button': jsxRuntime.jsx(PendingSignatureView.PendingSignatureView, {}),
    'qr-code': jsxRuntime.jsx(QrCodeView.QrCodeView, {}),
    'social-redirect-view': jsxRuntime.jsx(SocialRedirectView.SocialRedirectView, {}),
    'social-wrong-account': jsxRuntime.jsx(SocialWrongAccountView.SocialWrongAccountView, {}),
    'update-email': jsxRuntime.jsx(EmailUpdate.EmailUpdate, {}),
    'verify-email': jsxRuntime.jsx(EmailVerification.EmailVerification, {}),
    'wait-for-email-confirmation-view': jsxRuntime.jsx(EmailConfirmationWaitingView.EmailConfirmationWaitingView, {}),
    'wallet-cannot-be-transferred': jsxRuntime.jsx(WalletCannotBeTransferredView.WalletCannotBeTransferredView, {}),
    'wallet-connect-mobile-wallets-list': jsxRuntime.jsx(WalletList.WalletList, { isWalletConnectList: true }),
    'wallet-group': jsxRuntime.jsx(WalletGroupView.WalletGroupView, {}),
    'wallet-list': jsxRuntime.jsx(WalletList.WalletList, {}),
    'wallet-locked-view': jsxRuntime.jsx(WalletLockedView.WalletLockedView, {}),
    'wallet-sign': jsxRuntime.jsx(WalletSignSpinnerView.WalletSignSpinnerView, {}),
    'wallet-used': jsxRuntime.jsx(WalletUsedView.WalletUsedView, {}),
};

exports.viewToComponentMap = viewToComponentMap;
