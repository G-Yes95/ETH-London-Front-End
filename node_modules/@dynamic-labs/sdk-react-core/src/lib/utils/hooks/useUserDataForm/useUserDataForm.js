import { __awaiter } from '../../../../../_virtual/_tslib.js';
import { useState, useMemo, useCallback } from 'react';
import { object } from 'yup';
import { DynamicError, EmailAlreadyExistsError, UsernameAlreadyExistsError } from '@dynamic-labs/utils';
import '@dynamic-labs/sdk-api';
import { logger } from '../../../shared/logger.js';
import '@dynamic-labs/iconic';
import '@dynamic-labs/wallet-connector-core';
import 'react/jsx-runtime';
import '../../../context/ViewContext/ViewContext.js';
import '@dynamic-labs/wallet-book';
import { getValueByKey } from '../../../shared/utils/functions/getValueByKey/index.js';
import '../../constants/colors.js';
import '../../../shared/utils/classes/storage/localStorage.js';
import 'viem';
import { countryCodes, tShirtSizes, teamNames } from '../../../shared/consts/index.js';
import { useFields } from '../../../views/CollectUserDataView/useFields.js';
import { useMockContext } from '../../../context/MockContext/MockContext.js';

// Hook that returns the prepared data to work with the formik
// In order to update or display user information
const useUserDataForm = ({ onSubmit, onError, userProfile, shouldEnforcePolicies = true, fields, }) => {
    var _a;
    const { mockedSDK } = useMockContext();
    const [fetch, setFetch] = useState(false);
    const { fieldsConfig } = useFields();
    const enforcePolicies = shouldEnforcePolicies &&
        ((_a = fields.find((setting) => setting.name === 'policiesConsent')) === null || _a === void 0 ? void 0 : _a.enabled);
    const formikValidationSchema = useMemo(() => object().shape(Object.fromEntries(fields.map(({ name, required }) => [
        name,
        required
            ? getValueByKey(fieldsConfig, name).validation.required('required')
            : getValueByKey(fieldsConfig, name).validation,
    ]))), [fields]);
    const formikInitialValues = useMemo(() => Object.fromEntries(fields.map(({ name }) => {
        var _a, _b, _c;
        const info = (userProfile !== null && userProfile !== void 0 ? userProfile : {});
        const mapNameToDefaultValue = {
            country: countryCodes[0].code,
            policiesConsent: false,
            tShirtSize: tShirtSizes[0],
            team: teamNames[0],
        };
        const defaultValue = (_a = mapNameToDefaultValue[name]) !== null && _a !== void 0 ? _a : '';
        return [name, (_c = (_b = getValueByKey(info, name)) === null || _b === void 0 ? void 0 : _b.toString()) !== null && _c !== void 0 ? _c : defaultValue];
    })) || {}, [fields, userProfile]);
    const onFormSubmit = useCallback((values, formikHelper) => __awaiter(void 0, void 0, void 0, function* () {
        if (mockedSDK)
            return;
        try {
            if (!(userProfile === null || userProfile === void 0 ? void 0 : userProfile.environmentId))
                throw new DynamicError('Invalid environment ID');
            setFetch(true);
            let updatedUserFields = values;
            if (enforcePolicies) {
                updatedUserFields = Object.assign(Object.assign({}, updatedUserFields), { policiesConsent: true });
                delete updatedUserFields.policiesConsentArray;
            }
            yield (onSubmit === null || onSubmit === void 0 ? void 0 : onSubmit(updatedUserFields));
        }
        catch (e) {
            logger.error(e);
            onError === null || onError === void 0 ? void 0 : onError(e);
            if (e instanceof EmailAlreadyExistsError) {
                formikHelper.setErrors({ email: 'Email already exists' });
            }
            else if (e instanceof UsernameAlreadyExistsError) {
                formikHelper.setErrors({ username: 'Username already exists' });
            }
            else {
                formikHelper.setErrors({
                    api: 'Something went wrong. Please try again.',
                });
            }
        }
        finally {
            setFetch(false);
        }
    }), [mockedSDK, userProfile === null || userProfile === void 0 ? void 0 : userProfile.environmentId, enforcePolicies, onSubmit, onError]);
    return {
        enforcePolicies,
        fetch,
        formikInitialValues,
        formikValidationSchema,
        onFormSubmit,
    };
};

export { useUserDataForm };
