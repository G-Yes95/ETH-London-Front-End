import '@dynamic-labs/sdk-api';
import '../../shared/logger.js';
import { validateType } from '../../shared/utils/functions/validateType/validateType.js';
import '@dynamic-labs/iconic';
import '@dynamic-labs/wallet-connector-core';
import 'react/jsx-runtime';
import '../ViewContext/ViewContext.js';
import 'react';
import '@dynamic-labs/wallet-book';
import '../../utils/constants/colors.js';
import '../../shared/utils/classes/storage/localStorage.js';
import 'viem';
import '@dynamic-labs/utils';
import '../../shared/consts/index.js';

// TODO: need validation for optional fields
// https://linear.app/dynamic-labs/issue/DYN-1461
const validateAuthUser = (data) => validateType(data, {
    environmentId: 'environmentId',
    lastVerifiedCredentialId: 'lastAuthenticatedAccountId',
    userId: 'userId',
    verifiedCredentials: [
        {
            format: 'format',
            id: 'id',
        },
    ],
});
const validateLocalStorageExpiry = (data) => {
    if (!data)
        return false;
    const timeNow = new Date().getTime();
    if (timeNow > data.expiry) {
        return false;
    }
    return true;
};

export { validateAuthUser, validateLocalStorageExpiry };
