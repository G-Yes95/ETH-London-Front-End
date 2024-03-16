import { exists } from '../runtime.js';
import { InviteStatusEnumFromJSON, InviteStatusEnumToJSON } from './InviteStatusEnum.js';

/* tslint:disable */
function InviteFromJSON(json) {
    return InviteFromJSONTyped(json);
}
function InviteFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'id': !exists(json, 'id') ? undefined : json['id'],
        'organizationId': json['organizationId'],
        'organizationName': json['organizationName'],
        'status': InviteStatusEnumFromJSON(json['status']),
        'email': !exists(json, 'email') ? undefined : json['email'],
        'alias': !exists(json, 'alias') ? undefined : json['alias'],
        'walletPublicKey': !exists(json, 'walletPublicKey') ? undefined : json['walletPublicKey'],
    };
}
function InviteToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'id': value.id,
        'organizationId': value.organizationId,
        'organizationName': value.organizationName,
        'status': InviteStatusEnumToJSON(value.status),
        'email': value.email,
        'alias': value.alias,
        'walletPublicKey': value.walletPublicKey,
    };
}

export { InviteFromJSON, InviteFromJSONTyped, InviteToJSON };
