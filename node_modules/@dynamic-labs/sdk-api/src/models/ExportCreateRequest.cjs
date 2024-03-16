'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var runtime = require('../runtime.cjs');
var ExportCreateRequestFilter = require('./ExportCreateRequestFilter.cjs');
var ExportFormatEnum = require('./ExportFormatEnum.cjs');
var ExportModelEnum = require('./ExportModelEnum.cjs');

/* tslint:disable */
function ExportCreateRequestFromJSON(json) {
    return ExportCreateRequestFromJSONTyped(json);
}
function ExportCreateRequestFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'format': ExportFormatEnum.ExportFormatEnumFromJSON(json['format']),
        'model': ExportModelEnum.ExportModelEnumFromJSON(json['model']),
        'filter': !runtime.exists(json, 'filter') ? undefined : ExportCreateRequestFilter.ExportCreateRequestFilterFromJSON(json['filter']),
    };
}
function ExportCreateRequestToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'format': ExportFormatEnum.ExportFormatEnumToJSON(value.format),
        'model': ExportModelEnum.ExportModelEnumToJSON(value.model),
        'filter': ExportCreateRequestFilter.ExportCreateRequestFilterToJSON(value.filter),
    };
}

exports.ExportCreateRequestFromJSON = ExportCreateRequestFromJSON;
exports.ExportCreateRequestFromJSONTyped = ExportCreateRequestFromJSONTyped;
exports.ExportCreateRequestToJSON = ExportCreateRequestToJSON;
