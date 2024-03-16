'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var runtime = require('../runtime.cjs');
var AccessOutcomeEnum = require('./AccessOutcomeEnum.cjs');
var GateRule = require('./GateRule.cjs');

/* tslint:disable */
function GateUpdateRequestFromJSON(json) {
    return GateUpdateRequestFromJSONTyped(json);
}
function GateUpdateRequestFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'name': !runtime.exists(json, 'name') ? undefined : json['name'],
        'outcome': !runtime.exists(json, 'outcome') ? undefined : AccessOutcomeEnum.AccessOutcomeEnumFromJSON(json['outcome']),
        'scope': !runtime.exists(json, 'scope') ? undefined : json['scope'],
        'rules': !runtime.exists(json, 'rules') ? undefined : (json['rules'].map(GateRule.GateRuleFromJSON)),
    };
}
function GateUpdateRequestToJSON(value) {
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
        'rules': value.rules === undefined ? undefined : (value.rules.map(GateRule.GateRuleToJSON)),
    };
}

exports.GateUpdateRequestFromJSON = GateUpdateRequestFromJSON;
exports.GateUpdateRequestFromJSONTyped = GateUpdateRequestFromJSONTyped;
exports.GateUpdateRequestToJSON = GateUpdateRequestToJSON;
