'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var runtime = require('../runtime.cjs');
var CreateProjectResponseProjectProjectEnvironments = require('./CreateProjectResponseProjectProjectEnvironments.cjs');

/* tslint:disable */
function CreateProjectResponseProjectFromJSON(json) {
    return CreateProjectResponseProjectFromJSONTyped(json);
}
function CreateProjectResponseProjectFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'id': !runtime.exists(json, 'id') ? undefined : json['id'],
        'name': !runtime.exists(json, 'name') ? undefined : json['name'],
        'organizationId': !runtime.exists(json, 'organizationId') ? undefined : json['organizationId'],
        'projectEnvironments': !runtime.exists(json, 'projectEnvironments') ? undefined : (json['projectEnvironments'].map(CreateProjectResponseProjectProjectEnvironments.CreateProjectResponseProjectProjectEnvironmentsFromJSON)),
    };
}
function CreateProjectResponseProjectToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'id': value.id,
        'name': value.name,
        'organizationId': value.organizationId,
        'projectEnvironments': value.projectEnvironments === undefined ? undefined : (value.projectEnvironments.map(CreateProjectResponseProjectProjectEnvironments.CreateProjectResponseProjectProjectEnvironmentsToJSON)),
    };
}

exports.CreateProjectResponseProjectFromJSON = CreateProjectResponseProjectFromJSON;
exports.CreateProjectResponseProjectFromJSONTyped = CreateProjectResponseProjectFromJSONTyped;
exports.CreateProjectResponseProjectToJSON = CreateProjectResponseProjectToJSON;
