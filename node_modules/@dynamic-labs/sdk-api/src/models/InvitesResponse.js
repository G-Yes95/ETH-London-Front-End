import { exists } from '../runtime.js';
import { InviteFromJSON, InviteToJSON } from './Invite.js';

/* tslint:disable */
function InvitesResponseFromJSON(json) {
    return InvitesResponseFromJSONTyped(json);
}
function InvitesResponseFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'count': !exists(json, 'count') ? undefined : json['count'],
        'invites': !exists(json, 'invites') ? undefined : (json['invites'].map(InviteFromJSON)),
    };
}
function InvitesResponseToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'count': value.count,
        'invites': value.invites === undefined ? undefined : (value.invites.map(InviteToJSON)),
    };
}

export { InvitesResponseFromJSON, InvitesResponseFromJSONTyped, InvitesResponseToJSON };
