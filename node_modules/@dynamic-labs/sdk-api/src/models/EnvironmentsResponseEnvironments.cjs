'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var ProjectEnvironment = require('./ProjectEnvironment.cjs');

/* tslint:disable */
function EnvironmentsResponseEnvironmentsFromJSON(json) {
    return EnvironmentsResponseEnvironmentsFromJSONTyped(json);
}
function EnvironmentsResponseEnvironmentsFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'live': ProjectEnvironment.ProjectEnvironmentFromJSON(json['live']),
        'sandbox': ProjectEnvironment.ProjectEnvironmentFromJSON(json['sandbox']),
    };
}
function EnvironmentsResponseEnvironmentsToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'live': ProjectEnvironment.ProjectEnvironmentToJSON(value.live),
        'sandbox': ProjectEnvironment.ProjectEnvironmentToJSON(value.sandbox),
    };
}

exports.EnvironmentsResponseEnvironmentsFromJSON = EnvironmentsResponseEnvironmentsFromJSON;
exports.EnvironmentsResponseEnvironmentsFromJSONTyped = EnvironmentsResponseEnvironmentsFromJSONTyped;
exports.EnvironmentsResponseEnvironmentsToJSON = EnvironmentsResponseEnvironmentsToJSON;
