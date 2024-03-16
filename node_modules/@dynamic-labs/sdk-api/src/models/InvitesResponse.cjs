'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var runtime = require('../runtime.cjs');
var Invite = require('./Invite.cjs');

/* tslint:disable */
function InvitesResponseFromJSON(json) {
    return InvitesResponseFromJSONTyped(json);
}
function InvitesResponseFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'count': !runtime.exists(json, 'count') ? undefined : json['count'],
        'invites': !runtime.exists(json, 'invites') ? undefined : (json['invites'].map(Invite.InviteFromJSON)),
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
        'invites': value.invites === undefined ? undefined : (value.invites.map(Invite.InviteToJSON)),
    };
}

exports.InvitesResponseFromJSON = InvitesResponseFromJSON;
exports.InvitesResponseFromJSONTyped = InvitesResponseFromJSONTyped;
exports.InvitesResponseToJSON = InvitesResponseToJSON;
