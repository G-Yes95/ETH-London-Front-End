/**
 * A custom React hook that returns a function to update the user profile using a JSON Web Token (JWT).
 * This hook internally uses the 'useCreateUserProfileByJWTCallback' hook to create the user profile by JWT
 * and the 'useInternalDynamicContext' hook to set the callback for when the user profile is updated.
 * The returned function uses 'useCallback' to memoize the function and optimize performance.
 * @returns An object with the 'updateUserProfileByJWT' function.
 */
export declare const useUpdateUserProfileByJWTCallback: () => {
    updateUserProfileByJWT: (jwt: string) => Promise<void>;
};
