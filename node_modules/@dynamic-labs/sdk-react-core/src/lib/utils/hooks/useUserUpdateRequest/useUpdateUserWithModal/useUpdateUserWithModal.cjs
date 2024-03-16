'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _tslib = require('../../../../../../_virtual/_tslib.cjs');
var React = require('react');
var utils = require('@dynamic-labs/utils');
var useInternalDynamicContext = require('../../../../context/DynamicContext/useInternalDynamicContext.cjs');
var UserFieldEditorContext = require('../../../../context/UserFieldEditorContext/UserFieldEditorContext.cjs');
var ViewContext = require('../../../../context/ViewContext/ViewContext.cjs');
var validateUpdateRequest = require('./validateUpdateRequest/validateUpdateRequest.cjs');

/** Saves the values updated by the user */
const saveUserValues = ({ fields: newValues, updateUserResult: { isEmailVerificationRequired }, }, internalEvents, internalSetShowAuthFlow, setView, resolve, reject) => _tslib.__awaiter(void 0, void 0, void 0, function* () {
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
    const { user, projectSettings, internalSetShowAuthFlow, internalEvents } = useInternalDynamicContext.useInternalDynamicContext();
    const { setView } = ViewContext.useViewContext();
    const editorContext = React.useContext(UserFieldEditorContext.UserFieldEditorContext);
    if (!editorContext)
        throw new utils.DynamicError('useUserUpdateRequest can only be used inside the context of DynamicContextProvider');
    const { open: promptUserForValues } = editorContext;
    const updateUserWithModal = React.useCallback((fields, options) => new Promise((resolve, reject) => {
        // Catch invalid requests
        const errorResponse = validateUpdateRequest.validateUpdateRequest(fields, user, projectSettings);
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

exports.useUpdateUserWithModal = useUpdateUserWithModal;
