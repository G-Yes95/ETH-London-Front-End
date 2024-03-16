'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var sdkApi = require('@dynamic-labs/sdk-api');
var isProviderEnabled = require('../isProviderEnabled/isProviderEnabled.cjs');

const isEmailProviderEnabled = (providers) => 
// For v0.19 we will support emailOnly and Dynamic as email providers
// For v0.20/v1 we need to remove emailOnly and leave Dynamic as the only one email provider
// Ticket: https://linear.app/dynamic-labs/issue/GVTY-213/remove-emailonly-as-a-provider-from-sdk
// (Blocto and Magic stay as they are)
isProviderEnabled.isProviderEnabled(providers, sdkApi.ProviderEnum.EmailOnly) ||
    isProviderEnabled.isProviderEnabled(providers, sdkApi.ProviderEnum.Dynamic) ||
    isProviderEnabled.isProviderEnabled(providers, sdkApi.ProviderEnum.Blocto) ||
    isProviderEnabled.isProviderEnabled(providers, sdkApi.ProviderEnum.MagicLink);

exports.isEmailProviderEnabled = isEmailProviderEnabled;
