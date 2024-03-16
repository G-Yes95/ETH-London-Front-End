'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var runtime = require('../runtime.cjs');
var OriginResponse = require('./OriginResponse.cjs');

/* tslint:disable */
function InlineResponse201FromJSON(json) {
    return InlineResponse201FromJSONTyped(json);
}
function InlineResponse201FromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'origin': !runtime.exists(json, 'origin') ? undefined : OriginResponse.OriginResponseFromJSON(json['origin']),
    };
}
function InlineResponse201ToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'origin': OriginResponse.OriginResponseToJSON(value.origin),
    };
}

exports.InlineResponse201FromJSON = InlineResponse201FromJSON;
exports.InlineResponse201FromJSONTyped = InlineResponse201FromJSONTyped;
exports.InlineResponse201ToJSON = InlineResponse201ToJSON;
