import { OrganizationMemberFromJSON, OrganizationMemberToJSON } from './OrganizationMember.js';

/* tslint:disable */
function OrganizationMembersResponseFromJSON(json) {
    return OrganizationMembersResponseFromJSONTyped(json);
}
function OrganizationMembersResponseFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'count': json['count'],
        'members': (json['members'].map(OrganizationMemberFromJSON)),
    };
}
function OrganizationMembersResponseToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'count': value.count,
        'members': (value.members.map(OrganizationMemberToJSON)),
    };
}

export { OrganizationMembersResponseFromJSON, OrganizationMembersResponseFromJSONTyped, OrganizationMembersResponseToJSON };
