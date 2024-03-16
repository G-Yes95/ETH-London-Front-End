import { __awaiter } from '../../../../../../_virtual/_tslib.js';
import { useCallback } from 'react';
import { useInternalDynamicContext } from '../../../../context/DynamicContext/useInternalDynamicContext.js';
import { verifyEmail } from '../../../../data/api.js';
import { useUpdateUserProfileByJWTCallback } from '../../useUpdateUserProfileByJWTCallback/useUpdateUserProfileByJWTCallback.js';
import { useEmailVerificationContext } from '../../../../context/EmailVerificationContext/EmailVerificationContext.js';

// Hook exposed to the public as a scoped function in useUserUpdateRequest result
const useEmailVerificationRequest = () => {
    const { onboardingOnlyJwt, authToken, environmentId } = useInternalDynamicContext();
    const jwtToken = onboardingOnlyJwt || authToken;
    const { updateUserProfileByJWT } = useUpdateUserProfileByJWTCallback();
    const { verificationUUID: emailVerificationContextVerificationUUID } = useEmailVerificationContext();
    const verifyEmail$1 = useCallback((verificationToken, verificationUUID) => __awaiter(void 0, void 0, void 0, function* () {
        if (!jwtToken)
            throw new Error('No JWT token provided');
        // VerificationUUID is saved in the context in case the view changes
        // after a profile update (changing the view from edit profile to verify email)
        if (!verificationUUID && !emailVerificationContextVerificationUUID)
            throw new Error('No verification UUID provided');
        const verifyEmailResponse = yield verifyEmail({
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
    return { verifyEmail: verifyEmail$1 };
};

export { useEmailVerificationRequest };
