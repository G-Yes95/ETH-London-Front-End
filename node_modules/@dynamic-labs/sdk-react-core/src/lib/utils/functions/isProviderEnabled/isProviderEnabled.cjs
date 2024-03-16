'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const isProviderEnabled = (providers, provider) => providers.some((providerItem) => providerItem.provider === provider && Boolean(providerItem.enabledAt));

exports.isProviderEnabled = isProviderEnabled;
