'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var runtime = require('../runtime.cjs');
var EnvironmentVisitorsResponseUsers = require('./EnvironmentVisitorsResponseUsers.cjs');

/* tslint:disable */
function EnvironmentVisitorsResponseFromJSON(json) {
    return EnvironmentVisitorsResponseFromJSONTyped(json);
}
function EnvironmentVisitorsResponseFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'users': !runtime.exists(json, 'users') ? undefined : EnvironmentVisitorsResponseUsers.EnvironmentVisitorsResponseUsersFromJSON(json['users']),
        'visitors': !runtime.exists(json, 'visitors') ? undefined : EnvironmentVisitorsResponseUsers.EnvironmentVisitorsResponseUsersFromJSON(json['visitors']),
    };
}
function EnvironmentVisitorsResponseToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'users': EnvironmentVisitorsResponseUsers.EnvironmentVisitorsResponseUsersToJSON(value.users),
        'visitors': EnvironmentVisitorsResponseUsers.EnvironmentVisitorsResponseUsersToJSON(value.visitors),
    };
}

exports.EnvironmentVisitorsResponseFromJSON = EnvironmentVisitorsResponseFromJSON;
exports.EnvironmentVisitorsResponseFromJSONTyped = EnvironmentVisitorsResponseFromJSONTyped;
exports.EnvironmentVisitorsResponseToJSON = EnvironmentVisitorsResponseToJSON;
