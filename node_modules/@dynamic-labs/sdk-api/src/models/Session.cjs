'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var runtime = require('../runtime.cjs');

/* tslint:disable */
function SessionFromJSON(json) {
    return SessionFromJSONTyped(json);
}
function SessionFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'id': !runtime.exists(json, 'id') ? undefined : json['id'],
        'createdAt': !runtime.exists(json, 'createdAt') ? undefined : (new Date(json['createdAt'])),
        'ipAddress': !runtime.exists(json, 'ipAddress') ? undefined : json['ipAddress'],
        'revokedAt': !runtime.exists(json, 'revokedAt') ? undefined : (json['revokedAt'] === null ? null : new Date(json['revokedAt'])),
    };
}
function SessionToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'id': value.id,
        'createdAt': value.createdAt === undefined ? undefined : (value.createdAt.toISOString()),
        'ipAddress': value.ipAddress,
        'revokedAt': value.revokedAt === undefined ? undefined : (value.revokedAt === null ? null : value.revokedAt.toISOString()),
    };
}

exports.SessionFromJSON = SessionFromJSON;
exports.SessionFromJSONTyped = SessionFromJSONTyped;
exports.SessionToJSON = SessionToJSON;
