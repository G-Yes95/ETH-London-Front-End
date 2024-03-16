import { useUpdateUser } from './useUpdateUser/useUpdateUser.js';
import { useUpdateUserWithModal } from './useUpdateUserWithModal/useUpdateUserWithModal.js';

/* eslint-disable sort-keys */
// Hook only available internally
const useUserUpdateRequestInternal = ({ validationSchemaStripUnknown, }) => {
    const updateUser = useUpdateUser(validationSchemaStripUnknown);
    const updateUserWithModal = useUpdateUserWithModal(updateUser);
    return { updateUser, updateUserWithModal };
};
// Hook exposed to the clients
// We do not want customers to be able to edit properties such as policiesConsent or captchaToken
const useUserUpdateRequest = () => 
// eslint-disable-next-line react-hooks/rules-of-hooks
useUserUpdateRequestInternal({ validationSchemaStripUnknown: true });

export { useUserUpdateRequest, useUserUpdateRequestInternal };
