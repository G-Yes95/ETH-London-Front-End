export declare const useUserUpdateRequestInternal: ({ validationSchemaStripUnknown, }: {
    validationSchemaStripUnknown: boolean;
}) => {
    updateUser: (userFields: import("./useUpdateUser").UpdateUserFieldsArg, userEnvironmentId?: string | undefined) => Promise<import("./useUpdateUser").UpdateUserReturnPayload>;
    updateUserWithModal: (fields: import("./useUpdateUserWithModal").UpdateUserWithModalFields, options?: import("./useUpdateUserWithModal").UpdateUserWithModalOptions | undefined) => Promise<import("@dynamic-labs/sdk-api").UserFields>;
};
export declare const useUserUpdateRequest: () => {
    updateUser: (userFields: import("./useUpdateUser").UpdateUserFieldsArg, userEnvironmentId?: string | undefined) => Promise<import("./useUpdateUser").UpdateUserReturnPayload>;
    updateUserWithModal: (fields: import("./useUpdateUserWithModal").UpdateUserWithModalFields, options?: import("./useUpdateUserWithModal").UpdateUserWithModalOptions | undefined) => Promise<import("@dynamic-labs/sdk-api").UserFields>;
};
