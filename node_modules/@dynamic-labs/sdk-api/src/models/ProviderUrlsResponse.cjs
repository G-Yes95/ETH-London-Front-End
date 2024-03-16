'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var runtime = require('../runtime.cjs');
var ProviderUrl = require('./ProviderUrl.cjs');

/* tslint:disable */
function ProviderUrlsResponseFromJSON(json) {
    return ProviderUrlsResponseFromJSONTyped(json);
}
function ProviderUrlsResponseFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'providerUrls': !runtime.exists(json, 'providerUrls') ? undefined : (json['providerUrls'].map(ProviderUrl.ProviderUrlFromJSON)),
    };
}
function ProviderUrlsResponseToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'providerUrls': value.providerUrls === undefined ? undefined : (value.providerUrls.map(ProviderUrl.ProviderUrlToJSON)),
    };
}

exports.ProviderUrlsResponseFromJSON = ProviderUrlsResponseFromJSON;
exports.ProviderUrlsResponseFromJSONTyped = ProviderUrlsResponseFromJSONTyped;
exports.ProviderUrlsResponseToJSON = ProviderUrlsResponseToJSON;
