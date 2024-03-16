import { useState, useEffect, useCallback } from 'react';
import { DynamicError } from '@dynamic-labs/utils';
import { fetchNonce } from '../../../data/api.js';
import '@dynamic-labs/sdk-api';
import '../../../shared/logger.js';
import '@dynamic-labs/iconic';
import '@dynamic-labs/wallet-connector-core';
import 'react/jsx-runtime';
import '../../../context/ViewContext/ViewContext.js';
import '@dynamic-labs/wallet-book';
import { NONCE_STORAGE_KEY } from '../../constants/localStorage.js';
import '../../constants/colors.js';
import '../../../shared/utils/classes/storage/localStorage.js';
import 'viem';
import { useLocalStorage } from '../../../shared/utils/hooks/useLocalStorage/useLocalStorage.js';
import '../../../shared/consts/index.js';
import { validateLocalStorageExpiry } from '../../../context/DynamicContext/validators.js';

const useFetchNonce = (environmentId, maxRetries = 2) => {
    const [lsNonce, setLsNonce, removeLsNonce] = useLocalStorage(NONCE_STORAGE_KEY, undefined, validateLocalStorageExpiry);
    const [loading, setLoading] = useState(false);
    const [retries, setRetries] = useState(0);
    const nonceExists = (lsNonce === null || lsNonce === void 0 ? void 0 : lsNonce.value) !== '' && (lsNonce === null || lsNonce === void 0 ? void 0 : lsNonce.value) !== undefined ? true : false;
    if (lsNonce &&
        lsNonce.environmentId &&
        lsNonce.environmentId !== environmentId) {
        removeLsNonce();
    }
    useEffect(() => {
        if (!nonceExists && !loading && retries < maxRetries) {
            setLoading(true);
            fetchNonce(environmentId)
                .then((response) => {
                if (!response)
                    throw new DynamicError('Nonce is not defined');
                const expiry = new Date().getTime() + 60000 * 60 * 24;
                setLsNonce({ environmentId, expiry: expiry, value: response });
            })
                .catch(() => {
                setRetries((currentRetries) => currentRetries + 1);
            })
                .finally(() => {
                setLoading(false);
            });
        }
    }, [loading, setLoading, nonceExists, retries, environmentId, maxRetries]);
    const consumeNonce = useCallback(() => {
        const nonce = lsNonce === null || lsNonce === void 0 ? void 0 : lsNonce.value;
        removeLsNonce();
        return nonce;
    }, [removeLsNonce, lsNonce === null || lsNonce === void 0 ? void 0 : lsNonce.value]);
    return {
        consumeNonce: () => consumeNonce(),
    };
};

export { useFetchNonce };
