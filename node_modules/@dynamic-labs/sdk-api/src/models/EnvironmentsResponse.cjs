'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var EnvironmentsResponseEnvironments = require('./EnvironmentsResponseEnvironments.cjs');

/* tslint:disable */
function EnvironmentsResponseFromJSON(json) {
    return EnvironmentsResponseFromJSONTyped(json);
}
function EnvironmentsResponseFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'environments': EnvironmentsResponseEnvironments.EnvironmentsResponseEnvironmentsFromJSON(json['environments']),
    };
}
function EnvironmentsResponseToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'environments': EnvironmentsResponseEnvironments.EnvironmentsResponseEnvironmentsToJSON(value.environments),
    };
}

exports.EnvironmentsResponseFromJSON = EnvironmentsResponseFromJSON;
exports.EnvironmentsResponseFromJSONTyped = EnvironmentsResponseFromJSONTyped;
exports.EnvironmentsResponseToJSON = EnvironmentsResponseToJSON;
