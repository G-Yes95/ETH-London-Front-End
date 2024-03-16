import { exists } from '../runtime.js';
import { AccessOutcomeEnumFromJSON, AccessOutcomeEnumToJSON } from './AccessOutcomeEnum.js';
import { GateRuleFromJSON, GateRuleToJSON } from './GateRule.js';

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
        'outcome': AccessOutcomeEnumFromJSON(json['outcome']),
        'scope': !exists(json, 'scope') ? undefined : json['scope'],
        'rules': (json['rules'].map(GateRuleFromJSON)),
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
        'outcome': AccessOutcomeEnumToJSON(value.outcome),
        'scope': value.scope,
        'rules': (value.rules.map(GateRuleToJSON)),
    };
}

export { GateCreateRequestFromJSON, GateCreateRequestFromJSONTyped, GateCreateRequestToJSON };
