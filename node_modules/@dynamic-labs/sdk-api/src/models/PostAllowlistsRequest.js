import { exists } from '../runtime.js';
import { AccessOutcomeEnumFromJSON, AccessOutcomeEnumToJSON } from './AccessOutcomeEnum.js';

/* tslint:disable */
function PostAllowlistsRequestFromJSON(json) {
    return PostAllowlistsRequestFromJSONTyped(json);
}
function PostAllowlistsRequestFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'name': !exists(json, 'name') ? undefined : json['name'],
        'scope': !exists(json, 'scope') ? undefined : json['scope'],
        'outcome': !exists(json, 'outcome') ? undefined : AccessOutcomeEnumFromJSON(json['outcome']),
    };
}
function PostAllowlistsRequestToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'name': value.name,
        'scope': value.scope,
        'outcome': AccessOutcomeEnumToJSON(value.outcome),
    };
}

export { PostAllowlistsRequestFromJSON, PostAllowlistsRequestFromJSONTyped, PostAllowlistsRequestToJSON };
