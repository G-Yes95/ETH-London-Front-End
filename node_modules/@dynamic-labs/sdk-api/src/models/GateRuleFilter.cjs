'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var runtime = require('../runtime.cjs');

/* tslint:disable */
function GateRuleFilterFromJSON(json) {
    return GateRuleFilterFromJSONTyped(json);
}
function GateRuleFilterFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'amount': !runtime.exists(json, 'amount') ? undefined : json['amount'],
    };
}
function GateRuleFilterToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'amount': value.amount,
    };
}

exports.GateRuleFilterFromJSON = GateRuleFilterFromJSON;
exports.GateRuleFilterFromJSONTyped = GateRuleFilterFromJSONTyped;
exports.GateRuleFilterToJSON = GateRuleFilterToJSON;
