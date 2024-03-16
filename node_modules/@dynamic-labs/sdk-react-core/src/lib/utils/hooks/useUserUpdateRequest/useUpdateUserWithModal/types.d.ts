import { UserFields } from '@dynamic-labs/sdk-api';
export type UpdateUserWithModalOptions = {
    title?: string;
    subtitle?: string;
    submitText?: string;
};
export type UpdateUserWithModalFields = (keyof UserFields)[];
