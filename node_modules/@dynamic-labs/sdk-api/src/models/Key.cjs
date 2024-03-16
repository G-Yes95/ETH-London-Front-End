'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var runtime = require('../runtime.cjs');

/* tslint:disable */
function KeyFromJSON(json) {
    return KeyFromJSONTyped(json);
}
function KeyFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'id': !runtime.exists(json, 'id') ? undefined : json['id'],
        'publicKey': !runtime.exists(json, 'publicKey') ? undefined : json['publicKey'],
    };
}
function KeyToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'id': value.id,
        'publicKey': value.publicKey,
    };
}

exports.KeyFromJSON = KeyFromJSON;
exports.KeyFromJSONTyped = KeyFromJSONTyped;
exports.KeyToJSON = KeyToJSON;
