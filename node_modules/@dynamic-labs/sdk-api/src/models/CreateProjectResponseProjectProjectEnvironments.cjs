'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var runtime = require('../runtime.cjs');

/* tslint:disable */
function CreateProjectResponseProjectProjectEnvironmentsFromJSON(json) {
    return CreateProjectResponseProjectProjectEnvironmentsFromJSONTyped(json);
}
function CreateProjectResponseProjectProjectEnvironmentsFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'id': !runtime.exists(json, 'id') ? undefined : json['id'],
        'environmentName': !runtime.exists(json, 'environmentName') ? undefined : json['environmentName'],
    };
}
function CreateProjectResponseProjectProjectEnvironmentsToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'id': value.id,
        'environmentName': value.environmentName,
    };
}

exports.CreateProjectResponseProjectProjectEnvironmentsFromJSON = CreateProjectResponseProjectProjectEnvironmentsFromJSON;
exports.CreateProjectResponseProjectProjectEnvironmentsFromJSONTyped = CreateProjectResponseProjectProjectEnvironmentsFromJSONTyped;
exports.CreateProjectResponseProjectProjectEnvironmentsToJSON = CreateProjectResponseProjectProjectEnvironmentsToJSON;
