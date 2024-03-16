'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var runtime = require('../runtime.cjs');

/* tslint:disable */
function InviteConflictResponseFromJSON(json) {
    return InviteConflictResponseFromJSONTyped(json);
}
function InviteConflictResponseFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'message': !runtime.exists(json, 'message') ? undefined : json['message'],
    };
}
function InviteConflictResponseToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'message': value.message,
    };
}

exports.InviteConflictResponseFromJSON = InviteConflictResponseFromJSON;
exports.InviteConflictResponseFromJSONTyped = InviteConflictResponseFromJSONTyped;
exports.InviteConflictResponseToJSON = InviteConflictResponseToJSON;
