import { exists } from '../runtime.js';

/* tslint:disable */
function AllowlistEntryFromJSON(json) {
    return AllowlistEntryFromJSONTyped(json);
}
function AllowlistEntryFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'id': json['id'],
        'allowListId': json['allowListId'],
        'walletPublicKey': !exists(json, 'walletPublicKey') ? undefined : json['walletPublicKey'],
        'email': !exists(json, 'email') ? undefined : json['email'],
        'alias': !exists(json, 'alias') ? undefined : json['alias'],
    };
}
function AllowlistEntryToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'id': value.id,
        'allowListId': value.allowListId,
        'walletPublicKey': value.walletPublicKey,
        'email': value.email,
        'alias': value.alias,
    };
}

export { AllowlistEntryFromJSON, AllowlistEntryFromJSONTyped, AllowlistEntryToJSON };
