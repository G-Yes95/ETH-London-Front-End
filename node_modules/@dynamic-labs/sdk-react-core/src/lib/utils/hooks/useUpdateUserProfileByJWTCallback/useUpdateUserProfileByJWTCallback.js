import { __awaiter } from '../../../../../_virtual/_tslib.js';
import { useCallback } from 'react';
import { useInternalDynamicContext } from '../../../context/DynamicContext/useInternalDynamicContext.js';
import { useCreateUserProfileByJWTCallback } from '../useCreateUserProfileByJWTCallback/useCreateUserProfileByJWTCallback.js';

/**
 * A custom React hook that returns a function to update the user profile using a JSON Web Token (JWT).
 * This hook internally uses the 'useCreateUserProfileByJWTCallback' hook to create the user profile by JWT
 * and the 'useInternalDynamicContext' hook to set the callback for when the user profile is updated.
 * The returned function uses 'useCallback' to memoize the function and optimize performance.
 * @returns An object with the 'updateUserProfileByJWT' function.
 */
const useUpdateUserProfileByJWTCallback = () => {
    const { createUserProfileByJWT } = useCreateUserProfileByJWTCallback();
    const { setCallback } = useInternalDynamicContext();
    const updateUserProfileByJWT = useCallback((jwt) => __awaiter(void 0, void 0, void 0, function* () {
        yield createUserProfileByJWT(jwt);
        setCallback('userProfileUpdate');
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }), []);
    return { updateUserProfileByJWT };
};

export { useUpdateUserProfileByJWTCallback };
