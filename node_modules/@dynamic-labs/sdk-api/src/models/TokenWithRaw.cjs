'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var runtime = require('../runtime.cjs');
var TokenCreatedBy = require('./TokenCreatedBy.cjs');
var TokenWithRawProjectEnvironment = require('./TokenWithRawProjectEnvironment.cjs');

/* tslint:disable */
function TokenWithRawFromJSON(json) {
    return TokenWithRawFromJSONTyped(json);
}
function TokenWithRawFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'id': json['id'],
        'rawToken': json['rawToken'],
        'checksum': json['checksum'],
        'createdBy': TokenCreatedBy.TokenCreatedByFromJSON(json['createdBy']),
        'active': !runtime.exists(json, 'active') ? undefined : json['active'],
        'createdAt': (new Date(json['createdAt'])),
        'note': !runtime.exists(json, 'note') ? undefined : json['note'],
        'projectEnvironmentId': json['projectEnvironmentId'],
        'projectEnvironment': TokenWithRawProjectEnvironment.TokenWithRawProjectEnvironmentFromJSON(json['projectEnvironment']),
    };
}
function TokenWithRawToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'id': value.id,
        'rawToken': value.rawToken,
        'checksum': value.checksum,
        'createdBy': TokenCreatedBy.TokenCreatedByToJSON(value.createdBy),
        'active': value.active,
        'createdAt': (value.createdAt.toISOString()),
        'note': value.note,
        'projectEnvironmentId': value.projectEnvironmentId,
        'projectEnvironment': TokenWithRawProjectEnvironment.TokenWithRawProjectEnvironmentToJSON(value.projectEnvironment),
    };
}

exports.TokenWithRawFromJSON = TokenWithRawFromJSON;
exports.TokenWithRawFromJSONTyped = TokenWithRawFromJSONTyped;
exports.TokenWithRawToJSON = TokenWithRawToJSON;
