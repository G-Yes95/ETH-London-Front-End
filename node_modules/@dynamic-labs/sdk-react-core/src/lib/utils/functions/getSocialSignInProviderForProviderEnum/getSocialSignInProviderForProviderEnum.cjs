'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var sdkApi = require('@dynamic-labs/sdk-api');

const getSocialSignInProviderForProviderEnum = (provider) => {
    if (!provider)
        return;
    const values = Object.values(sdkApi.SocialSignInProviderEnum);
    for (const value of values) {
        if (value === provider) {
            return value;
        }
    }
    return undefined;
};

exports.getSocialSignInProviderForProviderEnum = getSocialSignInProviderForProviderEnum;
