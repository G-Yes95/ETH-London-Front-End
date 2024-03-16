import { __awaiter } from '../../../../../../_virtual/_tslib.js';
import { jsx } from 'react/jsx-runtime';
import { useCallback } from 'react';
import { useDynamicBridgeWidgetContext } from '../../context/DynamicBridgeWidgetContext/DynamicBridgeWidgetContext.js';
import { useInternalDynamicContext } from '../../../../context/DynamicContext/useInternalDynamicContext.js';
import { useViewContext } from '../../../../context/ViewContext/ViewContext.js';
import { useUserUpdateRequestInternal } from '../../../../utils/hooks/useUserUpdateRequest/useUserUpdateRequest.js';
import { UserProfileForm } from '../../../../components/UserProfileForm/UserProfileForm.js';

const EditProfileView = () => {
    const { setView } = useViewContext();
    const { goToProfileView } = useDynamicBridgeWidgetContext();
    const { internalSetShowAuthFlow } = useInternalDynamicContext();
    const { updateUser } = useUserUpdateRequestInternal({
        validationSchemaStripUnknown: true,
    });
    const onEditProfileFormSubmit = useCallback((formValues) => __awaiter(void 0, void 0, void 0, function* () {
        const { isEmailVerificationRequired } = yield updateUser(formValues);
        goToProfileView();
        if (isEmailVerificationRequired) {
            internalSetShowAuthFlow(true);
            setView('verify-email');
        }
    }), [goToProfileView, internalSetShowAuthFlow, setView, updateUser]);
    return (jsx(UserProfileForm, { onEditProfileSubmit: onEditProfileFormSubmit, onEditProfileCancel: goToProfileView }));
};

export { EditProfileView, EditProfileView as default };
