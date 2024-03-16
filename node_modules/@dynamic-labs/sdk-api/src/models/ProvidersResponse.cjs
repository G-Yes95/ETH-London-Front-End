'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var runtime = require('../runtime.cjs');
var Provider = require('./Provider.cjs');

/* tslint:disable */
function ProvidersResponseFromJSON(json) {
    return ProvidersResponseFromJSONTyped(json);
}
function ProvidersResponseFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'providers': !runtime.exists(json, 'providers') ? undefined : (json['providers'].map(Provider.ProviderFromJSON)),
    };
}
function ProvidersResponseToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'providers': value.providers === undefined ? undefined : (value.providers.map(Provider.ProviderToJSON)),
    };
}

exports.ProvidersResponseFromJSON = ProvidersResponseFromJSON;
exports.ProvidersResponseFromJSONTyped = ProvidersResponseFromJSONTyped;
exports.ProvidersResponseToJSON = ProvidersResponseToJSON;
