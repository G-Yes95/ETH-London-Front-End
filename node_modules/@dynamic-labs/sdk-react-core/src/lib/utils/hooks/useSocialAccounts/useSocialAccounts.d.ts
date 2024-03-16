import { ProviderEnum } from '@dynamic-labs/sdk-api';
import { SocialAccountInformation } from '@dynamic-labs/types';
type UseSocialAccountsProps = {
    sessionTimeout: number;
};
export declare const useSocialAccounts: ({ sessionTimeout }?: UseSocialAccountsProps) => {
    readonly error: import("@dynamic-labs/types").SocialOAuthError | undefined;
    readonly getLinkedAccountInformation: (provider: ProviderEnum) => SocialAccountInformation | undefined;
    readonly isLinked: (provider: ProviderEnum) => boolean;
    readonly isProcessing: boolean;
    readonly linkSocialAccount: (provider: ProviderEnum) => Promise<void>;
    readonly unlinkSocialAccount: (provider: ProviderEnum) => Promise<void>;
};
export {};
