import { exists } from '../runtime.js';
import { GateRuleFilterFromJSON, GateRuleFilterToJSON } from './GateRuleFilter.js';
import { GateRuleTypeFromJSON, GateRuleTypeToJSON } from './GateRuleType.js';
import { TokenAddressFromJSON, TokenAddressToJSON } from './TokenAddress.js';

/* tslint:disable */
function GateRuleFromJSON(json) {
    return GateRuleFromJSONTyped(json);
}
function GateRuleFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'type': GateRuleTypeFromJSON(json['type']),
        'address': TokenAddressFromJSON(json['address']),
        'filter': !exists(json, 'filter') ? undefined : GateRuleFilterFromJSON(json['filter']),
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
        'type': GateRuleTypeToJSON(value.type),
        'address': TokenAddressToJSON(value.address),
        'filter': GateRuleFilterToJSON(value.filter),
    };
}

export { GateRuleFromJSON, GateRuleFromJSONTyped, GateRuleToJSON };
