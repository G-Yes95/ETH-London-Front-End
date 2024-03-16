import { CSSProperties, FC } from 'react';
import { UserFields } from '@dynamic-labs/sdk-api';
import { UserDataFormValues } from '../../utils/hooks/useUserDataForm/useUserDataForm';
import { ButtonProps } from '../Button/Button';
export type UserProfileFormProps = {
    onEditProfileSubmit?: (formValues: UserDataFormValues) => void;
    onEditProfileCancel?: () => void;
    /** Which fields should be made available for editing. Undefined means all */
    filterFields?: (keyof UserFields)[];
    formClassName?: string;
    fieldsContainerStyle?: CSSProperties;
    options?: {
        shouldEnforcePolicies?: boolean;
        submitButtonProps?: ButtonProps;
        cancelButtonProps?: ButtonProps;
        hideCancelButton?: boolean;
        buttonsAsFooter?: boolean;
        submitText?: string;
        cancelText?: string;
    };
};
export declare const UserProfileForm: FC<UserProfileFormProps>;
