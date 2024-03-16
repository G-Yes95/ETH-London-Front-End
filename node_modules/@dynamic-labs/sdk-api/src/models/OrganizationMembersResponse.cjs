'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var OrganizationMember = require('./OrganizationMember.cjs');

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
        'members': (json['members'].map(OrganizationMember.OrganizationMemberFromJSON)),
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
        'members': (value.members.map(OrganizationMember.OrganizationMemberToJSON)),
    };
}

exports.OrganizationMembersResponseFromJSON = OrganizationMembersResponseFromJSON;
exports.OrganizationMembersResponseFromJSONTyped = OrganizationMembersResponseFromJSONTyped;
exports.OrganizationMembersResponseToJSON = OrganizationMembersResponseToJSON;
