import { jsx } from 'react/jsx-runtime';
import { CaptchaVerifyUser } from './CaptchaVerifyUser/CaptchaVerifyUser.js';
import { CollectUserDataView } from './CollectUserDataView/CollectUserDataView.js';
import { CollectUserDataViewLoginWithEmail } from './CollectUserDataViewLoginWithEmail/CollectUserDataViewLoginWithEmail.js';
import { EmailConfirmationWaitingView } from './EmailConfirmationWaitingView/EmailConfirmationWaitingView.js';
import { EmailUpdate } from './EmailUpdate/EmailUpdate.js';
import { EmailVerification } from './EmailVerification/EmailVerification.js';
import { EmailWalletOTPVerificationView } from './EmailWalletOTPVerificationView/EmailWalletOTPVerificationView.js';
import { NetworkNotSupported } from './NetworkNotSupported/NetworkNotSupported.js';
import { NetworkNotSupportedSwitchManual } from './NetworkNotSupportedSwitchManual/NetworkNotSupportedSwitchManual.js';
import { NoQrNotInstalledView } from './NoQrNotInstalledView/NoQrNotInstalledView.js';
import { PendingConnectView } from './PendingConnectView/PendingConnectView.js';
import { PendingSignatureView } from './PendingSignatureView/PendingSignatureView.js';
import { QrCodeView } from './QrCodeView/QrCodeView.js';
import { SocialRedirectView } from './SocialRedirectView/SocialRedirectView.js';
import { WalletList } from './WalletList/WalletList.js';
import { NoAccess } from './NoAccess/NoAccess.js';
import { WalletSignSpinnerView } from './WalletSignSpinnerView/WalletSignSpinnerView.js';
import { WalletUsedView } from './WalletUsedView/WalletUsedView.js';
import { SocialWrongAccountView } from './SocialWrongAccountView/SocialWrongAccountView.js';
import { WalletGroupView } from './WalletGroupView/WalletGroupView.js';
import { WalletLockedView } from './WalletLockedView/WalletLockedView.js';
import { BridgeWelcomeView } from './BridgeWelcomeView/BridgeWelcomeView.js';
import { BridgeSummaryView } from './BridgeSummaryView/BridgeSummaryView.js';
import { BridgeNextWalletConnectionView } from './BridgeNextWalletConnectionView/BridgeNextWalletConnectionView.js';
import { AccountExistsView } from './AccountExistsView/AccountExistsView.js';
import { MergeUserAccountsView } from './MergeUserAccountsView/MergeUserAccountsView.js';
import { WalletCannotBeTransferredView } from './WalletCannotBeTransferredView/WalletCannotBeTransferredView.js';
import { LoginView } from './LoginView/LoginView.js';
import { PasskeyIntroView } from './Passkey/PasskeyIntroView/PasskeyIntroView.js';
import { PasskeyBundleRecovery } from './Passkey/PasskeyRecovery/BundleValidation/PasskeyBundleRecovery.js';
import { PasskeyCompleteRecovery } from './Passkey/PasskeyRecovery/CompleteRecovery/PasskeyCompleteRecovery.js';
import { PasskeyInitRecovery } from './Passkey/PasskeyRecovery/InitRecovery/PasskeyInitRecovery.js';

const viewToComponentMap = {
    'account-exists': jsx(AccountExistsView, {}),
    'bridge-next-wallet-connection': jsx(BridgeNextWalletConnectionView, {}),
    'bridge-summary': jsx(BridgeSummaryView, {}),
    'bridge-welcome': jsx(BridgeWelcomeView, {}),
    captcha: jsx(CaptchaVerifyUser, {}),
    'chainalysis-blocked-wallet': jsx(NoAccess, {}),
    'collect-user-data': jsx(CollectUserDataView, {}),
    'collect-user-data-login-with-email': jsx(CollectUserDataViewLoginWithEmail, {}),
    'email-wallet-otp-verification-view': jsx(EmailWalletOTPVerificationView, {}),
    'gate-blocked-wallet': jsx(NoAccess, {}),
    'login-with-email-or-wallet': jsx(LoginView, {}),
    'login-with-email-or-wallet-full-wallet-list': jsx(LoginView, {}),
    'login-with-email-verification': jsx(EmailVerification, {}),
    'login-with-wallet-only': jsx(LoginView, {}),
    'merge-user-accounts': jsx(MergeUserAccountsView, {}),
    'multi-wallet-wallet-list': jsx(WalletList, {}),
    'network-not-supported': jsx(NetworkNotSupported, {}),
    'network-not-supported-manual': jsx(NetworkNotSupportedSwitchManual, {}),
    'no-access': jsx(NoAccess, {}),
    'no-qr-not-installed': jsx(NoQrNotInstalledView, {}),
    'passkey-intro': jsx(PasskeyIntroView, {}),
    'passkey-recovery-bundle': jsx(PasskeyBundleRecovery, {}),
    'passkey-recovery-complete': jsx(PasskeyCompleteRecovery, {}),
    'passkey-recovery-start': jsx(PasskeyInitRecovery, {}),
    'pending-connect': jsx(PendingConnectView, {}),
    'pending-signature': jsx(PendingSignatureView, {}),
    'pending-signature-without-back-button': jsx(PendingSignatureView, {}),
    'qr-code': jsx(QrCodeView, {}),
    'social-redirect-view': jsx(SocialRedirectView, {}),
    'social-wrong-account': jsx(SocialWrongAccountView, {}),
    'update-email': jsx(EmailUpdate, {}),
    'verify-email': jsx(EmailVerification, {}),
    'wait-for-email-confirmation-view': jsx(EmailConfirmationWaitingView, {}),
    'wallet-cannot-be-transferred': jsx(WalletCannotBeTransferredView, {}),
    'wallet-connect-mobile-wallets-list': jsx(WalletList, { isWalletConnectList: true }),
    'wallet-group': jsx(WalletGroupView, {}),
    'wallet-list': jsx(WalletList, {}),
    'wallet-locked-view': jsx(WalletLockedView, {}),
    'wallet-sign': jsx(WalletSignSpinnerView, {}),
    'wallet-used': jsx(WalletUsedView, {}),
};

export { viewToComponentMap };
