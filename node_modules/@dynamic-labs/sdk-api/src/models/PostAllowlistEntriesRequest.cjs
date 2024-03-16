'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var runtime = require('../runtime.cjs');

/* tslint:disable */
function PostAllowlistEntriesRequestFromJSON(json) {
    return PostAllowlistEntriesRequestFromJSONTyped(json);
}
function PostAllowlistEntriesRequestFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'walletPublicKey': !runtime.exists(json, 'walletPublicKey') ? undefined : json['walletPublicKey'],
        'email': !runtime.exists(json, 'email') ? undefined : json['email'],
        'alias': !runtime.exists(json, 'alias') ? undefined : json['alias'],
    };
}
function PostAllowlistEntriesRequestToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'walletPublicKey': value.walletPublicKey,
        'email': value.email,
        'alias': value.alias,
    };
}

exports.PostAllowlistEntriesRequestFromJSON = PostAllowlistEntriesRequestFromJSON;
exports.PostAllowlistEntriesRequestFromJSONTyped = PostAllowlistEntriesRequestFromJSONTyped;
exports.PostAllowlistEntriesRequestToJSON = PostAllowlistEntriesRequestToJSON;
