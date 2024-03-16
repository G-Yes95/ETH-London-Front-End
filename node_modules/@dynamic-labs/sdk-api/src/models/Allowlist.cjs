'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var runtime = require('../runtime.cjs');
var AccessOutcomeEnum = require('./AccessOutcomeEnum.cjs');

/* tslint:disable */
function AllowlistFromJSON(json) {
    return AllowlistFromJSONTyped(json);
}
function AllowlistFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'id': json['id'],
        'name': json['name'],
        'enabledAt': !runtime.exists(json, 'enabledAt') ? undefined : (json['enabledAt'] === null ? null : new Date(json['enabledAt'])),
        'projectEnvironmentId': json['projectEnvironmentId'],
        'scope': !runtime.exists(json, 'scope') ? undefined : json['scope'],
        'outcome': !runtime.exists(json, 'outcome') ? undefined : AccessOutcomeEnum.AccessOutcomeEnumFromJSON(json['outcome']),
    };
}
function AllowlistToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'id': value.id,
        'name': value.name,
        'enabledAt': value.enabledAt === undefined ? undefined : (value.enabledAt === null ? null : value.enabledAt.toISOString()),
        'projectEnvironmentId': value.projectEnvironmentId,
        'scope': value.scope,
        'outcome': AccessOutcomeEnum.AccessOutcomeEnumToJSON(value.outcome),
    };
}

exports.AllowlistFromJSON = AllowlistFromJSON;
exports.AllowlistFromJSONTyped = AllowlistFromJSONTyped;
exports.AllowlistToJSON = AllowlistToJSON;
