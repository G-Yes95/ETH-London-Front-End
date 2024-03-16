import { ReactNode } from 'react';
import { JwtVerifiedCredential, SignInProviderEnum, SocialSignInProviderEnum } from '@dynamic-labs/sdk-api';
import { WalletConnector } from '../../..';
type SocialRedirectStatus = 'idle' | 'loading' | 'success' | 'error';
export type SocialContextReturnType = {
    enabledSocialProviders: SocialSignInProviderEnum[];
    redirectStatus: SocialRedirectStatus;
    setSocialProvider: (val?: SocialSignInProviderEnum) => void;
    socialAccount: JwtVerifiedCredential | undefined;
    socialProvider: SocialSignInProviderEnum | undefined;
    socialWalletConnector: WalletConnector | undefined;
    signInProvider: SignInProviderEnum | undefined;
};
export declare const SocialRedirectContext: import("react").Context<SocialContextReturnType | undefined>;
export declare const SocialRedirectContextProvider: ({ children, }: {
    children: ReactNode;
}) => JSX.Element;
export declare const useSocialRedirectContext: () => SocialContextReturnType;
export {};
