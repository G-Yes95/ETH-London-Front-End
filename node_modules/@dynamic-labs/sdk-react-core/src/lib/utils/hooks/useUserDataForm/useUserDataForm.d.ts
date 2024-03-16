import { FormikHelpers } from 'formik';
import { ProjectSettingsKyc } from '@dynamic-labs/sdk-api';
import { UserProfile } from '../../../shared';
export type UserDataFormValues = {
    email?: string;
    policiesConsent?: boolean;
    policiesConsentArray?: [];
    username?: string;
};
export type UseUserDataFormProps = {
    fields: ProjectSettingsKyc[];
    onError?: (e: Error) => void;
    onSubmit?: (formValues: UserDataFormValues) => void | Promise<void>;
    shouldEnforcePolicies?: boolean;
    userProfile?: UserProfile;
};
export declare const useUserDataForm: ({ onSubmit, onError, userProfile, shouldEnforcePolicies, fields, }: UseUserDataFormProps) => {
    enforcePolicies: boolean | undefined;
    fetch: boolean;
    formikInitialValues: {
        [k: string]: string;
    };
    formikValidationSchema: import("yup").ObjectSchema<import("yup/lib/object").Assign<import("yup/lib/object").ObjectShape, {
        [k: string]: import("yup").StringSchema<string | undefined, import("yup/lib/types").AnyObject, string | undefined> | import("yup").BooleanSchema<boolean | undefined, import("yup/lib/types").AnyObject, boolean | undefined>;
    }>, import("yup/lib/object").AnyObject, import("yup/lib/object").TypeOfShape<import("yup/lib/object").Assign<import("yup/lib/object").ObjectShape, {
        [k: string]: import("yup").StringSchema<string | undefined, import("yup/lib/types").AnyObject, string | undefined> | import("yup").BooleanSchema<boolean | undefined, import("yup/lib/types").AnyObject, boolean | undefined>;
    }>>, import("yup/lib/object").AssertsShape<import("yup/lib/object").Assign<import("yup/lib/object").ObjectShape, {
        [k: string]: import("yup").StringSchema<string | undefined, import("yup/lib/types").AnyObject, string | undefined> | import("yup").BooleanSchema<boolean | undefined, import("yup/lib/types").AnyObject, boolean | undefined>;
    }>>>;
    onFormSubmit: (values: {
        email?: string;
        policiesConsent?: boolean;
        policiesConsentArray?: [];
        username?: string;
    }, formikHelper: FormikHelpers<{
        api?: string;
        email?: string;
        policiesConsent?: boolean;
        username?: string;
    }>) => Promise<void>;
};
