import { exists } from '../runtime.js';

/* tslint:disable */
function GateRuleFilterFromJSON(json) {
    return GateRuleFilterFromJSONTyped(json);
}
function GateRuleFilterFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'amount': !exists(json, 'amount') ? undefined : json['amount'],
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

export { GateRuleFilterFromJSON, GateRuleFilterFromJSONTyped, GateRuleFilterToJSON };
