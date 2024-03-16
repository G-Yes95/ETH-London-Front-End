'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var runtime = require('../runtime.cjs');

/* tslint:disable */
function OriginResponseFromJSON(json) {
    return OriginResponseFromJSONTyped(json);
}
function OriginResponseFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'id': !runtime.exists(json, 'id') ? undefined : json['id'],
        'origin': !runtime.exists(json, 'origin') ? undefined : json['origin'],
        'createdAt': !runtime.exists(json, 'createdAt') ? undefined : (new Date(json['createdAt'])),
        'projectEnvironmentId': !runtime.exists(json, 'projectEnvironmentId') ? undefined : json['projectEnvironmentId'],
    };
}
function OriginResponseToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'id': value.id,
        'origin': value.origin,
        'createdAt': value.createdAt === undefined ? undefined : (value.createdAt.toISOString()),
        'projectEnvironmentId': value.projectEnvironmentId,
    };
}

exports.OriginResponseFromJSON = OriginResponseFromJSON;
exports.OriginResponseFromJSONTyped = OriginResponseFromJSONTyped;
exports.OriginResponseToJSON = OriginResponseToJSON;
