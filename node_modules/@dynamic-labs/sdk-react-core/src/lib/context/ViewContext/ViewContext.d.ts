import { SetStateAction, Dispatch, PropsWithChildren, FC, MutableRefObject } from 'react';
import { InternalEventEmitter } from '../DynamicContext/internalEvents';
export type ViewType = 'captcha' | 'chainalysis-blocked-wallet' | 'collect-user-data' | 'collect-user-data-login-with-email' | 'login-with-email-or-wallet-full-wallet-list' | 'login-with-email-or-wallet' | 'login-with-wallet-only' | 'login-with-email-verification' | 'network-not-supported' | 'network-not-supported-manual' | 'no-access' | 'no-qr-not-installed' | 'pending-connect' | 'pending-signature-without-back-button' | 'pending-signature' | 'qr-code' | 'update-email' | 'verify-email' | 'wallet-connect-mobile-wallets-list' | 'wallet-list' | 'multi-wallet-wallet-list' | 'wallet-sign' | 'wallet-used' | 'wallet-group' | 'wait-for-email-confirmation-view' | 'email-wallet-otp-verification-view' | 'social-redirect-view' | 'wallet-locked-view' | 'social-wrong-account' | 'gate-blocked-wallet' | 'bridge-welcome' | 'bridge-summary' | 'bridge-next-wallet-connection' | 'account-exists' | 'merge-user-accounts' | 'wallet-cannot-be-transferred' | 'passkey-intro' | 'passkey-recovery-start' | 'passkey-recovery-bundle' | 'passkey-recovery-complete';
export type ViewContextProps = {
    setView: Dispatch<SetStateAction<ViewType>>;
    view: ViewType;
    goToInitialView: () => void;
};
type ViewContextProviderProps = {
    initialView?: ViewType;
    internalEvents?: MutableRefObject<InternalEventEmitter>;
};
export declare const ViewContext: import("react").Context<ViewContextProps | undefined>;
export declare const ViewContextProvider: FC<PropsWithChildren<ViewContextProviderProps>>;
export declare const useViewContext: () => ViewContextProps;
export {};
