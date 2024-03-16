'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var ProviderEnum = require('./ProviderEnum.cjs');

/* tslint:disable */
function ProviderUrlFromJSON(json) {
    return ProviderUrlFromJSONTyped(json);
}
function ProviderUrlFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'provider': ProviderEnum.ProviderEnumFromJSON(json['provider']),
        'authorizationUrl': json['authorizationUrl'],
        'redirectUrl': json['redirectUrl'],
    };
}
function ProviderUrlToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'provider': ProviderEnum.ProviderEnumToJSON(value.provider),
        'authorizationUrl': value.authorizationUrl,
        'redirectUrl': value.redirectUrl,
    };
}

exports.ProviderUrlFromJSON = ProviderUrlFromJSON;
exports.ProviderUrlFromJSONTyped = ProviderUrlFromJSONTyped;
exports.ProviderUrlToJSON = ProviderUrlToJSON;
