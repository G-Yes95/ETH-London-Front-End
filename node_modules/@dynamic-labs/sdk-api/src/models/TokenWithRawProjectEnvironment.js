import { exists } from '../runtime.js';

/* tslint:disable */
function TokenWithRawProjectEnvironmentFromJSON(json) {
    return TokenWithRawProjectEnvironmentFromJSONTyped(json);
}
function TokenWithRawProjectEnvironmentFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'id': !exists(json, 'id') ? undefined : json['id'],
    };
}
function TokenWithRawProjectEnvironmentToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'id': value.id,
    };
}

export { TokenWithRawProjectEnvironmentFromJSON, TokenWithRawProjectEnvironmentFromJSONTyped, TokenWithRawProjectEnvironmentToJSON };
