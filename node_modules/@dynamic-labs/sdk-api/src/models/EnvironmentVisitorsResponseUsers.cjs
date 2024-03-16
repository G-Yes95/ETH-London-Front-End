'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var runtime = require('../runtime.cjs');

/* tslint:disable */
function EnvironmentVisitorsResponseUsersFromJSON(json) {
    return EnvironmentVisitorsResponseUsersFromJSONTyped(json);
}
function EnvironmentVisitorsResponseUsersFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'count': !runtime.exists(json, 'count') ? undefined : json['count'],
    };
}
function EnvironmentVisitorsResponseUsersToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'count': value.count,
    };
}

exports.EnvironmentVisitorsResponseUsersFromJSON = EnvironmentVisitorsResponseUsersFromJSON;
exports.EnvironmentVisitorsResponseUsersFromJSONTyped = EnvironmentVisitorsResponseUsersFromJSONTyped;
exports.EnvironmentVisitorsResponseUsersToJSON = EnvironmentVisitorsResponseUsersToJSON;
