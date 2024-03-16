'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var runtime = require('../runtime.cjs');

/* tslint:disable */
function InviteSendRequestFromJSON(json) {
    return InviteSendRequestFromJSONTyped(json);
}
function InviteSendRequestFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'walletPublicKey': !runtime.exists(json, 'walletPublicKey') ? undefined : json['walletPublicKey'],
        'alias': !runtime.exists(json, 'alias') ? undefined : json['alias'],
        'email': !runtime.exists(json, 'email') ? undefined : json['email'],
    };
}
function InviteSendRequestToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'walletPublicKey': value.walletPublicKey,
        'alias': value.alias,
        'email': value.email,
    };
}

exports.InviteSendRequestFromJSON = InviteSendRequestFromJSON;
exports.InviteSendRequestFromJSONTyped = InviteSendRequestFromJSONTyped;
exports.InviteSendRequestToJSON = InviteSendRequestToJSON;
