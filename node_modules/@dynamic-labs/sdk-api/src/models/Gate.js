import { exists } from '../runtime.js';
import { AccessOutcomeEnumFromJSON, AccessOutcomeEnumToJSON } from './AccessOutcomeEnum.js';
import { GateRuleFromJSON, GateRuleToJSON } from './GateRule.js';

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
        'scope': !exists(json, 'scope') ? undefined : json['scope'],
        'enabledAt': !exists(json, 'enabledAt') ? undefined : (json['enabledAt'] === null ? null : new Date(json['enabledAt'])),
        'rules': (json['rules'].map(GateRuleFromJSON)),
        'outcome': AccessOutcomeEnumFromJSON(json['outcome']),
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
        'rules': (value.rules.map(GateRuleToJSON)),
        'outcome': AccessOutcomeEnumToJSON(value.outcome),
    };
}

export { GateFromJSON, GateFromJSONTyped, GateToJSON };
