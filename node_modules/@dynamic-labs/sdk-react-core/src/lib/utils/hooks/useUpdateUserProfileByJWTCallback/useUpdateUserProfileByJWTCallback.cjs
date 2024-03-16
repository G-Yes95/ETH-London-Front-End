'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _tslib = require('../../../../../_virtual/_tslib.cjs');
var React = require('react');
var useInternalDynamicContext = require('../../../context/DynamicContext/useInternalDynamicContext.cjs');
var useCreateUserProfileByJWTCallback = require('../useCreateUserProfileByJWTCallback/useCreateUserProfileByJWTCallback.cjs');

/**
 * A custom React hook that returns a function to update the user profile using a JSON Web Token (JWT).
 * This hook internally uses the 'useCreateUserProfileByJWTCallback' hook to create the user profile by JWT
 * and the 'useInternalDynamicContext' hook to set the callback for when the user profile is updated.
 * The returned function uses 'useCallback' to memoize the function and optimize performance.
 * @returns An object with the 'updateUserProfileByJWT' function.
 */
const useUpdateUserProfileByJWTCallback = () => {
    const { createUserProfileByJWT } = useCreateUserProfileByJWTCallback.useCreateUserProfileByJWTCallback();
    const { setCallback } = useInternalDynamicContext.useInternalDynamicContext();
    const updateUserProfileByJWT = React.useCallback((jwt) => _tslib.__awaiter(void 0, void 0, void 0, function* () {
        yield createUserProfileByJWT(jwt);
        setCallback('userProfileUpdate');
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }), []);
    return { updateUserProfileByJWT };
};

exports.useUpdateUserProfileByJWTCallback = useUpdateUserProfileByJWTCallback;
