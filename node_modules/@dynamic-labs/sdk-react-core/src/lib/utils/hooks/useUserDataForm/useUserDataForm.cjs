'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _tslib = require('../../../../../_virtual/_tslib.cjs');
var React = require('react');
var yup = require('yup');
var utils = require('@dynamic-labs/utils');
require('@dynamic-labs/sdk-api');
var logger = require('../../../shared/logger.cjs');
require('@dynamic-labs/iconic');
require('@dynamic-labs/wallet-connector-core');
require('react/jsx-runtime');
require('../../../context/ViewContext/ViewContext.cjs');
require('@dynamic-labs/wallet-book');
var index = require('../../../shared/utils/functions/getValueByKey/index.cjs');
require('../../constants/colors.cjs');
require('../../../shared/utils/classes/storage/localStorage.cjs');
require('viem');
var index$1 = require('../../../shared/consts/index.cjs');
var useFields = require('../../../views/CollectUserDataView/useFields.cjs');
var MockContext = require('../../../context/MockContext/MockContext.cjs');

// Hook that returns the prepared data to work with the formik
// In order to update or display user information
const useUserDataForm = ({ onSubmit, onError, userProfile, shouldEnforcePolicies = true, fields, }) => {
    var _a;
    const { mockedSDK } = MockContext.useMockContext();
    const [fetch, setFetch] = React.useState(false);
    const { fieldsConfig } = useFields.useFields();
    const enforcePolicies = shouldEnforcePolicies &&
        ((_a = fields.find((setting) => setting.name === 'policiesConsent')) === null || _a === void 0 ? void 0 : _a.enabled);
    const formikValidationSchema = React.useMemo(() => yup.object().shape(Object.fromEntries(fields.map(({ name, required }) => [
        name,
        required
            ? index.getValueByKey(fieldsConfig, name).validation.required('required')
            : index.getValueByKey(fieldsConfig, name).validation,
    ]))), [fields]);
    const formikInitialValues = React.useMemo(() => Object.fromEntries(fields.map(({ name }) => {
        var _a, _b, _c;
        const info = (userProfile !== null && userProfile !== void 0 ? userProfile : {});
        const mapNameToDefaultValue = {
            country: index$1.countryCodes[0].code,
            policiesConsent: false,
            tShirtSize: index$1.tShirtSizes[0],
            team: index$1.teamNames[0],
        };
        const defaultValue = (_a = mapNameToDefaultValue[name]) !== null && _a !== void 0 ? _a : '';
        return [name, (_c = (_b = index.getValueByKey(info, name)) === null || _b === void 0 ? void 0 : _b.toString()) !== null && _c !== void 0 ? _c : defaultValue];
    })) || {}, [fields, userProfile]);
    const onFormSubmit = React.useCallback((values, formikHelper) => _tslib.__awaiter(void 0, void 0, void 0, function* () {
        if (mockedSDK)
            return;
        try {
            if (!(userProfile === null || userProfile === void 0 ? void 0 : userProfile.environmentId))
                throw new utils.DynamicError('Invalid environment ID');
            setFetch(true);
            let updatedUserFields = values;
            if (enforcePolicies) {
                updatedUserFields = Object.assign(Object.assign({}, updatedUserFields), { policiesConsent: true });
                delete updatedUserFields.policiesConsentArray;
            }
            yield (onSubmit === null || onSubmit === void 0 ? void 0 : onSubmit(updatedUserFields));
        }
        catch (e) {
            logger.logger.error(e);
            onError === null || onError === void 0 ? void 0 : onError(e);
            if (e instanceof utils.EmailAlreadyExistsError) {
                formikHelper.setErrors({ email: 'Email already exists' });
            }
            else if (e instanceof utils.UsernameAlreadyExistsError) {
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

exports.useUserDataForm = useUserDataForm;
