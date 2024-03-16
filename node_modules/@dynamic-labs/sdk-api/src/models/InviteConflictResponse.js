import { exists } from '../runtime.js';

/* tslint:disable */
function InviteConflictResponseFromJSON(json) {
    return InviteConflictResponseFromJSONTyped(json);
}
function InviteConflictResponseFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'message': !exists(json, 'message') ? undefined : json['message'],
    };
}
function InviteConflictResponseToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'message': value.message,
    };
}

export { InviteConflictResponseFromJSON, InviteConflictResponseFromJSONTyped, InviteConflictResponseToJSON };
