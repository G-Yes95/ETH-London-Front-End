import { exists } from '../runtime.js';
import { AccessOutcomeEnumFromJSON, AccessOutcomeEnumToJSON } from './AccessOutcomeEnum.js';
import { GateRuleFromJSON, GateRuleToJSON } from './GateRule.js';

/* tslint:disable */
function GateUpdateRequestFromJSON(json) {
    return GateUpdateRequestFromJSONTyped(json);
}
function GateUpdateRequestFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'name': !exists(json, 'name') ? undefined : json['name'],
        'outcome': !exists(json, 'outcome') ? undefined : AccessOutcomeEnumFromJSON(json['outcome']),
        'scope': !exists(json, 'scope') ? undefined : json['scope'],
        'rules': !exists(json, 'rules') ? undefined : (json['rules'].map(GateRuleFromJSON)),
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
        'outcome': AccessOutcomeEnumToJSON(value.outcome),
        'scope': value.scope,
        'rules': value.rules === undefined ? undefined : (value.rules.map(GateRuleToJSON)),
    };
}

export { GateUpdateRequestFromJSON, GateUpdateRequestFromJSONTyped, GateUpdateRequestToJSON };
