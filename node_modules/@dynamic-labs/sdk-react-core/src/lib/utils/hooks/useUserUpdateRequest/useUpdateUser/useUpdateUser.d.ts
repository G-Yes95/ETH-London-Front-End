import { ProjectSettingsKyc, UpdateSelfResponse, UserFields } from '@dynamic-labs/sdk-api';
export type UpdateUserFieldsArg = Omit<UserFields, 'captchaToken' | 'policiesConsent'>;
export type UpdateUserReturnPayload = {
    isEmailVerificationRequired: boolean;
    missingFields: ProjectSettingsKyc[];
    updateUserProfileResponse: UpdateSelfResponse;
    verifyEmailFn?: (verificationToken: string) => Promise<UpdateSelfResponse>;
};
export declare const useUpdateUser: (validationSchemaStripUnknown: boolean) => (userFields: UpdateUserFieldsArg, userEnvironmentId?: string) => Promise<UpdateUserReturnPayload>;
