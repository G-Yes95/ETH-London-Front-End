'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var runtime = require('../runtime.cjs');
var InviteStatusEnum = require('./InviteStatusEnum.cjs');

/* tslint:disable */
function InviteFromJSON(json) {
    return InviteFromJSONTyped(json);
}
function InviteFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'id': !runtime.exists(json, 'id') ? undefined : json['id'],
        'organizationId': json['organizationId'],
        'organizationName': json['organizationName'],
        'status': InviteStatusEnum.InviteStatusEnumFromJSON(json['status']),
        'email': !runtime.exists(json, 'email') ? undefined : json['email'],
        'alias': !runtime.exists(json, 'alias') ? undefined : json['alias'],
        'walletPublicKey': !runtime.exists(json, 'walletPublicKey') ? undefined : json['walletPublicKey'],
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
        'status': InviteStatusEnum.InviteStatusEnumToJSON(value.status),
        'email': value.email,
        'alias': value.alias,
        'walletPublicKey': value.walletPublicKey,
    };
}

exports.InviteFromJSON = InviteFromJSON;
exports.InviteFromJSONTyped = InviteFromJSONTyped;
exports.InviteToJSON = InviteToJSON;
