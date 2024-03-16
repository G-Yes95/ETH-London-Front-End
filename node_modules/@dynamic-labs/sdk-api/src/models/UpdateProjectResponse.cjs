'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var runtime = require('../runtime.cjs');

/* tslint:disable */
function UpdateProjectResponseFromJSON(json) {
    return UpdateProjectResponseFromJSONTyped(json);
}
function UpdateProjectResponseFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'id': !runtime.exists(json, 'id') ? undefined : json['id'],
        'name': !runtime.exists(json, 'name') ? undefined : json['name'],
    };
}
function UpdateProjectResponseToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'id': value.id,
        'name': value.name,
    };
}

exports.UpdateProjectResponseFromJSON = UpdateProjectResponseFromJSON;
exports.UpdateProjectResponseFromJSONTyped = UpdateProjectResponseFromJSONTyped;
exports.UpdateProjectResponseToJSON = UpdateProjectResponseToJSON;
