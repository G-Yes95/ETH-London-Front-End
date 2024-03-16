'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var InviteStatusEnum = require('./InviteStatusEnum.cjs');

/* tslint:disable */
function InviteUpdateRequestFromJSON(json) {
    return InviteUpdateRequestFromJSONTyped(json);
}
function InviteUpdateRequestFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'status': InviteStatusEnum.InviteStatusEnumFromJSON(json['status']),
    };
}
function InviteUpdateRequestToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'status': InviteStatusEnum.InviteStatusEnumToJSON(value.status),
    };
}

exports.InviteUpdateRequestFromJSON = InviteUpdateRequestFromJSON;
exports.InviteUpdateRequestFromJSONTyped = InviteUpdateRequestFromJSONTyped;
exports.InviteUpdateRequestToJSON = InviteUpdateRequestToJSON;
