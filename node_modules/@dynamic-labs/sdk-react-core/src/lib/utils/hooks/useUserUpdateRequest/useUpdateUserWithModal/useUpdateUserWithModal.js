import { __awaiter } from '../../../../../../_virtual/_tslib.js';
import { useContext, useCallback } from 'react';
import { DynamicError } from '@dynamic-labs/utils';
import { useInternalDynamicContext } from '../../../../context/DynamicContext/useInternalDynamicContext.js';
import { UserFieldEditorContext } from '../../../../context/UserFieldEditorContext/UserFieldEditorContext.js';
import { useViewContext } from '../../../../context/ViewContext/ViewContext.js';
import { validateUpdateRequest } from './validateUpdateRequest/validateUpdateRequest.js';

/** Saves the values updated by the user */
const saveUserValues = ({ fields: newValues, updateUserResult: { isEmailVerificationRequired }, }, internalEvents, internalSetShowAuthFlow, setView, resolve, reject) => __awaiter(void 0, void 0, void 0, function* () {
    // If no verification is needed, we are done
    if (!isEmailVerificationRequired) {
        resolve(newValues);
        return;
    }
    // Show email verification view
    internalSetShowAuthFlow(true);
    setView('verify-email');
    // Subscribe to email verification result
    internalEvents.current.once('emailVerificationResult', (wasSuccessful, newEmail) => {
        // Make sure we're using the correct, updated email. User might have changed it mid-OTP
        newValues.email = newEmail;
        wasSuccessful
            ? resolve(newValues)
            : reject('Failed to verify email, no fields were updated');
    });
});
// eslint-disable-next-line multiline-comment-style
/** This hook allows to open the widget modal and expose any fields for editing.
 * The fields must have been previously enabled in the dashboard
 */
const useUpdateUserWithModal = (updateUser) => {
    const { user, projectSettings, internalSetShowAuthFlow, internalEvents } = useInternalDynamicContext();
    const { setView } = useViewContext();
    const editorContext = useContext(UserFieldEditorContext);
    if (!editorContext)
        throw new DynamicError('useUserUpdateRequest can only be used inside the context of DynamicContextProvider');
    const { open: promptUserForValues } = editorContext;
    const updateUserWithModal = useCallback((fields, options) => new Promise((resolve, reject) => {
        // Catch invalid requests
        const errorResponse = validateUpdateRequest(fields, user, projectSettings);
        if (errorResponse) {
            reject(errorResponse);
            return;
        }
        // Get user values
        promptUserForValues({
            fields,
            submitText: options === null || options === void 0 ? void 0 : options.submitText,
            subtitle: options === null || options === void 0 ? void 0 : options.subtitle,
            title: options === null || options === void 0 ? void 0 : options.title,
        }, updateUser)
            .then((updateValues) => saveUserValues(updateValues, internalEvents, internalSetShowAuthFlow, setView, resolve, reject))
            .catch((error) => {
            if (/email already exists/gi.test(error))
                throw error;
            reject(error);
        });
    }), [
        user,
        projectSettings,
        promptUserForValues,
        updateUser,
        internalSetShowAuthFlow,
        setView,
        internalEvents,
    ]);
    return updateUserWithModal;
};

export { useUpdateUserWithModal };
