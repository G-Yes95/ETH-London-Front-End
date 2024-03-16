'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var runtime = require('../runtime.cjs');

/* tslint:disable */
function AllowlistEntryFromJSON(json) {
    return AllowlistEntryFromJSONTyped(json);
}
function AllowlistEntryFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'id': json['id'],
        'allowListId': json['allowListId'],
        'walletPublicKey': !runtime.exists(json, 'walletPublicKey') ? undefined : json['walletPublicKey'],
        'email': !runtime.exists(json, 'email') ? undefined : json['email'],
        'alias': !runtime.exists(json, 'alias') ? undefined : json['alias'],
    };
}
function AllowlistEntryToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'id': value.id,
        'allowListId': value.allowListId,
        'walletPublicKey': value.walletPublicKey,
        'email': value.email,
        'alias': value.alias,
    };
}

exports.AllowlistEntryFromJSON = AllowlistEntryFromJSON;
exports.AllowlistEntryFromJSONTyped = AllowlistEntryFromJSONTyped;
exports.AllowlistEntryToJSON = AllowlistEntryToJSON;
