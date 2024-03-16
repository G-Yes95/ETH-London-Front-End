'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var runtime = require('../runtime.cjs');

/* tslint:disable */
function TokenWithRawProjectEnvironmentFromJSON(json) {
    return TokenWithRawProjectEnvironmentFromJSONTyped(json);
}
function TokenWithRawProjectEnvironmentFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'id': !runtime.exists(json, 'id') ? undefined : json['id'],
    };
}
function TokenWithRawProjectEnvironmentToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'id': value.id,
    };
}

exports.TokenWithRawProjectEnvironmentFromJSON = TokenWithRawProjectEnvironmentFromJSON;
exports.TokenWithRawProjectEnvironmentFromJSONTyped = TokenWithRawProjectEnvironmentFromJSONTyped;
exports.TokenWithRawProjectEnvironmentToJSON = TokenWithRawProjectEnvironmentToJSON;
