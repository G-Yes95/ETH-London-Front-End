'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var utils = require('@dynamic-labs/utils');
var api = require('../../../data/api.cjs');
require('@dynamic-labs/sdk-api');
require('../../../shared/logger.cjs');
require('@dynamic-labs/iconic');
require('@dynamic-labs/wallet-connector-core');
require('react/jsx-runtime');
require('../../../context/ViewContext/ViewContext.cjs');
require('@dynamic-labs/wallet-book');
var localStorage = require('../../constants/localStorage.cjs');
require('../../constants/colors.cjs');
require('../../../shared/utils/classes/storage/localStorage.cjs');
require('viem');
var useLocalStorage = require('../../../shared/utils/hooks/useLocalStorage/useLocalStorage.cjs');
require('../../../shared/consts/index.cjs');
var validators = require('../../../context/DynamicContext/validators.cjs');

const useFetchNonce = (environmentId, maxRetries = 2) => {
    const [lsNonce, setLsNonce, removeLsNonce] = useLocalStorage.useLocalStorage(localStorage.NONCE_STORAGE_KEY, undefined, validators.validateLocalStorageExpiry);
    const [loading, setLoading] = React.useState(false);
    const [retries, setRetries] = React.useState(0);
    const nonceExists = (lsNonce === null || lsNonce === void 0 ? void 0 : lsNonce.value) !== '' && (lsNonce === null || lsNonce === void 0 ? void 0 : lsNonce.value) !== undefined ? true : false;
    if (lsNonce &&
        lsNonce.environmentId &&
        lsNonce.environmentId !== environmentId) {
        removeLsNonce();
    }
    React.useEffect(() => {
        if (!nonceExists && !loading && retries < maxRetries) {
            setLoading(true);
            api.fetchNonce(environmentId)
                .then((response) => {
                if (!response)
                    throw new utils.DynamicError('Nonce is not defined');
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
    const consumeNonce = React.useCallback(() => {
        const nonce = lsNonce === null || lsNonce === void 0 ? void 0 : lsNonce.value;
        removeLsNonce();
        return nonce;
    }, [removeLsNonce, lsNonce === null || lsNonce === void 0 ? void 0 : lsNonce.value]);
    return {
        consumeNonce: () => consumeNonce(),
    };
};

exports.useFetchNonce = useFetchNonce;
