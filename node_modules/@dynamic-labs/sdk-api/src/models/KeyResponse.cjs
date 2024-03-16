'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var runtime = require('../runtime.cjs');
var Key = require('./Key.cjs');

/* tslint:disable */
function KeyResponseFromJSON(json) {
    return KeyResponseFromJSONTyped(json);
}
function KeyResponseFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'key': !runtime.exists(json, 'key') ? undefined : Key.KeyFromJSON(json['key']),
    };
}
function KeyResponseToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'key': Key.KeyToJSON(value.key),
    };
}

exports.KeyResponseFromJSON = KeyResponseFromJSON;
exports.KeyResponseFromJSONTyped = KeyResponseFromJSONTyped;
exports.KeyResponseToJSON = KeyResponseToJSON;
