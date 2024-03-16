'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _tslib = require('../../../../../../_virtual/_tslib.cjs');
var React = require('react');
var useInternalDynamicContext = require('../../../../context/DynamicContext/useInternalDynamicContext.cjs');
var api = require('../../../../data/api.cjs');
var useUpdateUserProfileByJWTCallback = require('../../useUpdateUserProfileByJWTCallback/useUpdateUserProfileByJWTCallback.cjs');
var EmailVerificationContext = require('../../../../context/EmailVerificationContext/EmailVerificationContext.cjs');

// Hook exposed to the public as a scoped function in useUserUpdateRequest result
const useEmailVerificationRequest = () => {
    const { onboardingOnlyJwt, authToken, environmentId } = useInternalDynamicContext.useInternalDynamicContext();
    const jwtToken = onboardingOnlyJwt || authToken;
    const { updateUserProfileByJWT } = useUpdateUserProfileByJWTCallback.useUpdateUserProfileByJWTCallback();
    const { verificationUUID: emailVerificationContextVerificationUUID } = EmailVerificationContext.useEmailVerificationContext();
    const verifyEmail = React.useCallback((verificationToken, verificationUUID) => _tslib.__awaiter(void 0, void 0, void 0, function* () {
        if (!jwtToken)
            throw new Error('No JWT token provided');
        // VerificationUUID is saved in the context in case the view changes
        // after a profile update (changing the view from edit profile to verify email)
        if (!verificationUUID && !emailVerificationContextVerificationUUID)
            throw new Error('No verification UUID provided');
        const verifyEmailResponse = yield api.verifyEmail({
            environmentId,
            verificationToken,
            verificationUUID: String(verificationUUID || emailVerificationContextVerificationUUID),
        }, jwtToken);
        yield updateUserProfileByJWT(verifyEmailResponse.jwt);
        return verifyEmailResponse;
    }), [
        emailVerificationContextVerificationUUID,
        environmentId,
        jwtToken,
        updateUserProfileByJWT,
    ]);
    return { verifyEmail };
};

exports.useEmailVerificationRequest = useEmailVerificationRequest;
