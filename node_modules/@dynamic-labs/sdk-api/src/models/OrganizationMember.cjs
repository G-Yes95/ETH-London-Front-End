'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var User = require('./User.cjs');

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
        'user': User.UserFromJSON(json['user']),
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
        'user': User.UserToJSON(value.user),
    };
}

exports.OrganizationMemberFromJSON = OrganizationMemberFromJSON;
exports.OrganizationMemberFromJSONTyped = OrganizationMemberFromJSONTyped;
exports.OrganizationMemberToJSON = OrganizationMemberToJSON;
