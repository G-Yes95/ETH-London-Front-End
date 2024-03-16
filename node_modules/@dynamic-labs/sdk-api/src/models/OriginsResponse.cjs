'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var runtime = require('../runtime.cjs');
var OriginResponse = require('./OriginResponse.cjs');

/* tslint:disable */
function OriginsResponseFromJSON(json) {
    return OriginsResponseFromJSONTyped(json);
}
function OriginsResponseFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'origins': !runtime.exists(json, 'origins') ? undefined : (json['origins'].map(OriginResponse.OriginResponseFromJSON)),
    };
}
function OriginsResponseToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'origins': value.origins === undefined ? undefined : (value.origins.map(OriginResponse.OriginResponseToJSON)),
    };
}

exports.OriginsResponseFromJSON = OriginsResponseFromJSON;
exports.OriginsResponseFromJSONTyped = OriginsResponseFromJSONTyped;
exports.OriginsResponseToJSON = OriginsResponseToJSON;
