'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var runtime = require('../runtime.cjs');
var AccessOutcomeEnum = require('./AccessOutcomeEnum.cjs');
var GateRule = require('./GateRule.cjs');

/* tslint:disable */
function GateCreateRequestFromJSON(json) {
    return GateCreateRequestFromJSONTyped(json);
}
function GateCreateRequestFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'name': json['name'],
        'outcome': AccessOutcomeEnum.AccessOutcomeEnumFromJSON(json['outcome']),
        'scope': !runtime.exists(json, 'scope') ? undefined : json['scope'],
        'rules': (json['rules'].map(GateRule.GateRuleFromJSON)),
    };
}
function GateCreateRequestToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'name': value.name,
        'outcome': AccessOutcomeEnum.AccessOutcomeEnumToJSON(value.outcome),
        'scope': value.scope,
        'rules': (value.rules.map(GateRule.GateRuleToJSON)),
    };
}

exports.GateCreateRequestFromJSON = GateCreateRequestFromJSON;
exports.GateCreateRequestFromJSONTyped = GateCreateRequestFromJSONTyped;
exports.GateCreateRequestToJSON = GateCreateRequestToJSON;
