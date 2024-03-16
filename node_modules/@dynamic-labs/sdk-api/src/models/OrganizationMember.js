import { UserFromJSON, UserToJSON } from './User.js';

/* tslint:disable */
function OrganizationMemberFromJSON(json) {
    return OrganizationMemberFromJSONTyped(json);
}
function OrganizationMemberFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'id': json['id'],
        'user': UserFromJSON(json['user']),
    };
}
function OrganizationMemberToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'id': value.id,
        'user': UserToJSON(value.user),
    };
}

export { OrganizationMemberFromJSON, OrganizationMemberFromJSONTyped, OrganizationMemberToJSON };
