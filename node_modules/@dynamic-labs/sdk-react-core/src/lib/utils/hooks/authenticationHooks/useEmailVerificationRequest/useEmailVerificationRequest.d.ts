import { UpdateSelfResponse } from '@dynamic-labs/sdk-api';
export type UseEmailVerificationArgs = {
    verificationUUID?: string;
};
export type VerifyEmailCallback = (verificationToken: string) => Promise<UpdateSelfResponse>;
export declare const useEmailVerificationRequest: () => {
    verifyEmail: (verificationToken: string, verificationUUID?: string) => Promise<UpdateSelfResponse>;
};
