'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const isUnsupportedProviderError = (error) => {
    const isObject = typeof error === 'object';
    if (!isObject)
        return false;
    const isUnsupportedProviderErrorReason = error['reason'] === 'unsupported provider';
    return isUnsupportedProviderErrorReason;
};

exports.isUnsupportedProviderError = isUnsupportedProviderError;
