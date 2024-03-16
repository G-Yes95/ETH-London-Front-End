import { isAuthTokenExpired } from '../../../context/DynamicContext/helpers.js';
import '@dynamic-labs/sdk-api';
import '../../../shared/logger.js';
import '@dynamic-labs/iconic';
import '@dynamic-labs/wallet-connector-core';
import 'react/jsx-runtime';
import '../../../context/ViewContext/ViewContext.js';
import 'react';
import '@dynamic-labs/wallet-book';
import { AUTH_TOKEN } from '../../constants/localStorage.js';
import '../../constants/colors.js';
import { LocalStorage } from '../../../shared/utils/classes/storage/localStorage.js';
import 'viem';
import '@dynamic-labs/utils';
import '../../../shared/consts/index.js';

const getAuthToken = () => {
    if (typeof window === 'undefined') {
        return undefined;
    }
    const token = LocalStorage.getFromLS(AUTH_TOKEN, true);
    if (!token) {
        return undefined;
    }
    if (isAuthTokenExpired(token)) {
        return undefined;
    }
    return token;
};

export { getAuthToken };
