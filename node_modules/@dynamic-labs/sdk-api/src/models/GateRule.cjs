'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var runtime = require('../runtime.cjs');
var GateRuleFilter = require('./GateRuleFilter.cjs');
var GateRuleType = require('./GateRuleType.cjs');
var TokenAddress = require('./TokenAddress.cjs');

/* tslint:disable */
function GateRuleFromJSON(json) {
    return GateRuleFromJSONTyped(json);
}
function GateRuleFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'type': GateRuleType.GateRuleTypeFromJSON(json['type']),
        'address': TokenAddress.TokenAddressFromJSON(json['address']),
        'filter': !runtime.exists(json, 'filter') ? undefined : GateRuleFilter.GateRuleFilterFromJSON(json['filter']),
    };
}
function GateRuleToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'type': GateRuleType.GateRuleTypeToJSON(value.type),
        'address': TokenAddress.TokenAddressToJSON(value.address),
        'filter': GateRuleFilter.GateRuleFilterToJSON(value.filter),
    };
}

exports.GateRuleFromJSON = GateRuleFromJSON;
exports.GateRuleFromJSONTyped = GateRuleFromJSONTyped;
exports.GateRuleToJSON = GateRuleToJSON;
