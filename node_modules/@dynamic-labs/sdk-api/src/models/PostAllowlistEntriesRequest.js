import { exists } from '../runtime.js';

/* tslint:disable */
function PostAllowlistEntriesRequestFromJSON(json) {
    return PostAllowlistEntriesRequestFromJSONTyped(json);
}
function PostAllowlistEntriesRequestFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'walletPublicKey': !exists(json, 'walletPublicKey') ? undefined : json['walletPublicKey'],
        'email': !exists(json, 'email') ? undefined : json['email'],
        'alias': !exists(json, 'alias') ? undefined : json['alias'],
    };
}
function PostAllowlistEntriesRequestToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'walletPublicKey': value.walletPublicKey,
        'email': value.email,
        'alias': value.alias,
    };
}

export { PostAllowlistEntriesRequestFromJSON, PostAllowlistEntriesRequestFromJSONTyped, PostAllowlistEntriesRequestToJSON };
