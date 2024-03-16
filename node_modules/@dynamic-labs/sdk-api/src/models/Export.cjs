'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var runtime = require('../runtime.cjs');
var ExportCreateRequestFilter = require('./ExportCreateRequestFilter.cjs');
var ExportFormatEnum = require('./ExportFormatEnum.cjs');
var ExportModelEnum = require('./ExportModelEnum.cjs');
var ExportStatusEnum = require('./ExportStatusEnum.cjs');

/* tslint:disable */
function ExportFromJSON(json) {
    return ExportFromJSONTyped(json);
}
function ExportFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'id': json['id'],
        'format': ExportFormatEnum.ExportFormatEnumFromJSON(json['format']),
        'model': ExportModelEnum.ExportModelEnumFromJSON(json['model']),
        'status': ExportStatusEnum.ExportStatusEnumFromJSON(json['status']),
        'filter': ExportCreateRequestFilter.ExportCreateRequestFilterFromJSON(json['filter']),
        'createdAt': (new Date(json['createdAt'])),
        'startedAt': !runtime.exists(json, 'startedAt') ? undefined : (json['startedAt'] === null ? null : new Date(json['startedAt'])),
        'completedAt': !runtime.exists(json, 'completedAt') ? undefined : (json['completedAt'] === null ? null : new Date(json['completedAt'])),
        'downloadUrl': !runtime.exists(json, 'downloadUrl') ? undefined : json['downloadUrl'],
        'error': !runtime.exists(json, 'error') ? undefined : json['error'],
    };
}
function ExportToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'id': value.id,
        'format': ExportFormatEnum.ExportFormatEnumToJSON(value.format),
        'model': ExportModelEnum.ExportModelEnumToJSON(value.model),
        'status': ExportStatusEnum.ExportStatusEnumToJSON(value.status),
        'filter': ExportCreateRequestFilter.ExportCreateRequestFilterToJSON(value.filter),
        'createdAt': (value.createdAt.toISOString()),
        'startedAt': value.startedAt === undefined ? undefined : (value.startedAt === null ? null : value.startedAt.toISOString()),
        'completedAt': value.completedAt === undefined ? undefined : (value.completedAt === null ? null : value.completedAt.toISOString()),
        'downloadUrl': value.downloadUrl,
        'error': value.error,
    };
}

exports.ExportFromJSON = ExportFromJSON;
exports.ExportFromJSONTyped = ExportFromJSONTyped;
exports.ExportToJSON = ExportToJSON;
