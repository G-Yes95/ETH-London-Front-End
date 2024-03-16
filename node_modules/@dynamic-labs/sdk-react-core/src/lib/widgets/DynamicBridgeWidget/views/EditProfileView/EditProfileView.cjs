'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _tslib = require('../../../../../../_virtual/_tslib.cjs');
var jsxRuntime = require('react/jsx-runtime');
var React = require('react');
var DynamicBridgeWidgetContext = require('../../context/DynamicBridgeWidgetContext/DynamicBridgeWidgetContext.cjs');
var useInternalDynamicContext = require('../../../../context/DynamicContext/useInternalDynamicContext.cjs');
var ViewContext = require('../../../../context/ViewContext/ViewContext.cjs');
var useUserUpdateRequest = require('../../../../utils/hooks/useUserUpdateRequest/useUserUpdateRequest.cjs');
var UserProfileForm = require('../../../../components/UserProfileForm/UserProfileForm.cjs');

const EditProfileView = () => {
    const { setView } = ViewContext.useViewContext();
    const { goToProfileView } = DynamicBridgeWidgetContext.useDynamicBridgeWidgetContext();
    const { internalSetShowAuthFlow } = useInternalDynamicContext.useInternalDynamicContext();
    const { updateUser } = useUserUpdateRequest.useUserUpdateRequestInternal({
        validationSchemaStripUnknown: true,
    });
    const onEditProfileFormSubmit = React.useCallback((formValues) => _tslib.__awaiter(void 0, void 0, void 0, function* () {
        const { isEmailVerificationRequired } = yield updateUser(formValues);
        goToProfileView();
        if (isEmailVerificationRequired) {
            internalSetShowAuthFlow(true);
            setView('verify-email');
        }
    }), [goToProfileView, internalSetShowAuthFlow, setView, updateUser]);
    return (jsxRuntime.jsx(UserProfileForm.UserProfileForm, { onEditProfileSubmit: onEditProfileFormSubmit, onEditProfileCancel: goToProfileView }));
};

exports.EditProfileView = EditProfileView;
exports["default"] = EditProfileView;
