'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var sdkApi = require('@dynamic-labs/sdk-api');

const getApiProviders = (providers) => Object.values(sdkApi.ProviderEnum).reduce((acc, provider) => {
    const foundProvider = providers.find((providerSetting) => providerSetting.provider === provider);
    if (foundProvider) {
        acc[provider] = foundProvider;
    }
    return acc;
}, {});

exports.getApiProviders = getApiProviders;
