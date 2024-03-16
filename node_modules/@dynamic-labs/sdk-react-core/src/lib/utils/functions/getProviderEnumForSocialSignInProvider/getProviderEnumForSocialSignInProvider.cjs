'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var sdkApi = require('@dynamic-labs/sdk-api');

const getProviderEnumForSocialSignInProvider = (provider) => {
    if (!provider)
        return null;
    const values = Object.values(sdkApi.ProviderEnum);
    for (const value of values) {
        if (value === provider) {
            return value;
        }
    }
    return null;
};

exports.getProviderEnumForSocialSignInProvider = getProviderEnumForSocialSignInProvider;
