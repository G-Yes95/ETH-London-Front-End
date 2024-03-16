'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var runtime = require('../runtime.cjs');
var UserSearchFilterParams = require('./UserSearchFilterParams.cjs');

/* tslint:disable */
function ExportCreateRequestFilterFromJSON(json) {
    return ExportCreateRequestFilterFromJSONTyped(json);
}
function ExportCreateRequestFilterFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'users': !runtime.exists(json, 'users') ? undefined : UserSearchFilterParams.UserSearchFilterParamsFromJSON(json['users']),
    };
}
function ExportCreateRequestFilterToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'users': UserSearchFilterParams.UserSearchFilterParamsToJSON(value.users),
    };
}

exports.ExportCreateRequestFilterFromJSON = ExportCreateRequestFilterFromJSON;
exports.ExportCreateRequestFilterFromJSONTyped = ExportCreateRequestFilterFromJSONTyped;
exports.ExportCreateRequestFilterToJSON = ExportCreateRequestFilterToJSON;
