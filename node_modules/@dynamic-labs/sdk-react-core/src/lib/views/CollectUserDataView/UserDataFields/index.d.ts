import { ReactNode } from 'react';
import { FormikErrors, FormikTouched } from 'formik';
import { ProjectSettingsKyc } from '@dynamic-labs/sdk-api';
type UserDataFieldsProps = {
    errors: FormikErrors<Record<string, string>>;
    fields?: ProjectSettingsKyc[];
    policiesConsentInnerComponentArray?: ReactNode[];
    touched: FormikTouched<Record<string, string>>;
};
export declare const UserDataFields: ({ errors, policiesConsentInnerComponentArray, fields, touched, }: UserDataFieldsProps) => JSX.Element;
export {};
