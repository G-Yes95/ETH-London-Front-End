'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var runtime = require('../runtime.cjs');
var TokenCreatedBy = require('./TokenCreatedBy.cjs');
var TokenWithRawProjectEnvironment = require('./TokenWithRawProjectEnvironment.cjs');

/* tslint:disable */
function TokenFromJSON(json) {
    return TokenFromJSONTyped(json);
}
function TokenFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'id': json['id'],
        'checksum': json['checksum'],
        'createdBy': TokenCreatedBy.TokenCreatedByFromJSON(json['createdBy']),
        'createdAt': (new Date(json['createdAt'])),
        'note': !runtime.exists(json, 'note') ? undefined : json['note'],
        'projectEnvironmentId': json['projectEnvironmentId'],
        'projectEnvironment': TokenWithRawProjectEnvironment.TokenWithRawProjectEnvironmentFromJSON(json['projectEnvironment']),
    };
}
function TokenToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'id': value.id,
        'checksum': value.checksum,
        'createdBy': TokenCreatedBy.TokenCreatedByToJSON(value.createdBy),
        'createdAt': (value.createdAt.toISOString()),
        'note': value.note,
        'projectEnvironmentId': value.projectEnvironmentId,
        'projectEnvironment': TokenWithRawProjectEnvironment.TokenWithRawProjectEnvironmentToJSON(value.projectEnvironment),
    };
}

exports.TokenFromJSON = TokenFromJSON;
exports.TokenFromJSONTyped = TokenFromJSONTyped;
exports.TokenToJSON = TokenToJSON;
