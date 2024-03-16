import { exists } from '../runtime.js';

/* tslint:disable */
function TokenCreatedByFromJSON(json) {
    return TokenCreatedByFromJSONTyped(json);
}
function TokenCreatedByFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'id': json['id'],
        'alias': !exists(json, 'alias') ? undefined : json['alias'],
        'firstName': !exists(json, 'firstName') ? undefined : json['firstName'],
        'lastName': !exists(json, 'lastName') ? undefined : json['lastName'],
        'email': !exists(json, 'email') ? undefined : json['email'],
    };
}
function TokenCreatedByToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'id': value.id,
        'alias': value.alias,
        'firstName': value.firstName,
        'lastName': value.lastName,
        'email': value.email,
    };
}

export { TokenCreatedByFromJSON, TokenCreatedByFromJSONTyped, TokenCreatedByToJSON };
