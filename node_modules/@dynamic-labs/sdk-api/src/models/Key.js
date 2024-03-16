import { exists } from '../runtime.js';

/* tslint:disable */
function KeyFromJSON(json) {
    return KeyFromJSONTyped(json);
}
function KeyFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'id': !exists(json, 'id') ? undefined : json['id'],
        'publicKey': !exists(json, 'publicKey') ? undefined : json['publicKey'],
    };
}
function KeyToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'id': value.id,
        'publicKey': value.publicKey,
    };
}

export { KeyFromJSON, KeyFromJSONTyped, KeyToJSON };
