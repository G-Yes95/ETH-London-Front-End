import { exists } from '../runtime.js';
import { AccessOutcomeEnumFromJSON, AccessOutcomeEnumToJSON } from './AccessOutcomeEnum.js';

/* tslint:disable */
function AllowlistFromJSON(json) {
    return AllowlistFromJSONTyped(json);
}
function AllowlistFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'id': json['id'],
        'name': json['name'],
        'enabledAt': !exists(json, 'enabledAt') ? undefined : (json['enabledAt'] === null ? null : new Date(json['enabledAt'])),
        'projectEnvironmentId': json['projectEnvironmentId'],
        'scope': !exists(json, 'scope') ? undefined : json['scope'],
        'outcome': !exists(json, 'outcome') ? undefined : AccessOutcomeEnumFromJSON(json['outcome']),
    };
}
function AllowlistToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'id': value.id,
        'name': value.name,
        'enabledAt': value.enabledAt === undefined ? undefined : (value.enabledAt === null ? null : value.enabledAt.toISOString()),
        'projectEnvironmentId': value.projectEnvironmentId,
        'scope': value.scope,
        'outcome': AccessOutcomeEnumToJSON(value.outcome),
    };
}

export { AllowlistFromJSON, AllowlistFromJSONTyped, AllowlistToJSON };
