'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var runtime = require('../runtime.cjs');

/* tslint:disable */
function InlineResponse400FromJSON(json) {
    return InlineResponse400FromJSONTyped(json);
}
function InlineResponse400FromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'error': !runtime.exists(json, 'error') ? undefined : json['error'],
        'status': !runtime.exists(json, 'status') ? undefined : json['status'],
    };
}
function InlineResponse400ToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'error': value.error,
        'status': value.status,
    };
}

exports.InlineResponse400FromJSON = InlineResponse400FromJSON;
exports.InlineResponse400FromJSONTyped = InlineResponse400FromJSONTyped;
exports.InlineResponse400ToJSON = InlineResponse400ToJSON;
