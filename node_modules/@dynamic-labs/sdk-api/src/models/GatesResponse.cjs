'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var runtime = require('../runtime.cjs');
var Gate = require('./Gate.cjs');

/* tslint:disable */
function GatesResponseFromJSON(json) {
    return GatesResponseFromJSONTyped(json);
}
function GatesResponseFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'gates': !runtime.exists(json, 'gates') ? undefined : (json['gates'].map(Gate.GateFromJSON)),
    };
}
function GatesResponseToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'gates': value.gates === undefined ? undefined : (value.gates.map(Gate.GateToJSON)),
    };
}

exports.GatesResponseFromJSON = GatesResponseFromJSON;
exports.GatesResponseFromJSONTyped = GatesResponseFromJSONTyped;
exports.GatesResponseToJSON = GatesResponseToJSON;
