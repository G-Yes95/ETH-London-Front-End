'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var runtime = require('../runtime.cjs');
var AccessOutcomeEnum = require('./AccessOutcomeEnum.cjs');
var GateRule = require('./GateRule.cjs');

/* tslint:disable */
function GateFromJSON(json) {
    return GateFromJSONTyped(json);
}
function GateFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'id': json['id'],
        'name': json['name'],
        'scope': !runtime.exists(json, 'scope') ? undefined : json['scope'],
        'enabledAt': !runtime.exists(json, 'enabledAt') ? undefined : (json['enabledAt'] === null ? null : new Date(json['enabledAt'])),
        'rules': (json['rules'].map(GateRule.GateRuleFromJSON)),
        'outcome': AccessOutcomeEnum.AccessOutcomeEnumFromJSON(json['outcome']),
    };
}
function GateToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'id': value.id,
        'name': value.name,
        'scope': value.scope,
        'enabledAt': value.enabledAt === undefined ? undefined : (value.enabledAt === null ? null : value.enabledAt.toISOString()),
        'rules': (value.rules.map(GateRule.GateRuleToJSON)),
        'outcome': AccessOutcomeEnum.AccessOutcomeEnumToJSON(value.outcome),
    };
}

exports.GateFromJSON = GateFromJSON;
exports.GateFromJSONTyped = GateFromJSONTyped;
exports.GateToJSON = GateToJSON;
