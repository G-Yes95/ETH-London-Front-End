import { exists } from '../runtime.js';

/* tslint:disable */
function InviteSendRequestFromJSON(json) {
    return InviteSendRequestFromJSONTyped(json);
}
function InviteSendRequestFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'walletPublicKey': !exists(json, 'walletPublicKey') ? undefined : json['walletPublicKey'],
        'alias': !exists(json, 'alias') ? undefined : json['alias'],
        'email': !exists(json, 'email') ? undefined : json['email'],
    };
}
function InviteSendRequestToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'walletPublicKey': value.walletPublicKey,
        'alias': value.alias,
        'email': value.email,
    };
}

export { InviteSendRequestFromJSON, InviteSendRequestFromJSONTyped, InviteSendRequestToJSON };
