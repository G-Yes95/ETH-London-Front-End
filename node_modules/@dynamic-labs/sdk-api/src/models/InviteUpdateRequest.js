import { InviteStatusEnumFromJSON, InviteStatusEnumToJSON } from './InviteStatusEnum.js';

/* tslint:disable */
function InviteUpdateRequestFromJSON(json) {
    return InviteUpdateRequestFromJSONTyped(json);
}
function InviteUpdateRequestFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'status': InviteStatusEnumFromJSON(json['status']),
    };
}
function InviteUpdateRequestToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'status': InviteStatusEnumToJSON(value.status),
    };
}

export { InviteUpdateRequestFromJSON, InviteUpdateRequestFromJSONTyped, InviteUpdateRequestToJSON };
