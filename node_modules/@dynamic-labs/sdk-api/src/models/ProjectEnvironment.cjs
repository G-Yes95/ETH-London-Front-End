'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var runtime = require('../runtime.cjs');
var ProjectSettings = require('./ProjectSettings.cjs');

/* tslint:disable */
function ProjectEnvironmentFromJSON(json) {
    return ProjectEnvironmentFromJSONTyped(json);
}
function ProjectEnvironmentFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'id': json['id'],
        'settings': !runtime.exists(json, 'settings') ? undefined : ProjectSettings.ProjectSettingsFromJSON(json['settings']),
        'createdAt': !runtime.exists(json, 'createdAt') ? undefined : (new Date(json['createdAt'])),
        'updatedAt': !runtime.exists(json, 'updatedAt') ? undefined : (new Date(json['updatedAt'])),
        'sdkVersion': !runtime.exists(json, 'sdkVersion') ? undefined : json['sdkVersion'],
    };
}
function ProjectEnvironmentToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'id': value.id,
        'settings': ProjectSettings.ProjectSettingsToJSON(value.settings),
        'createdAt': value.createdAt === undefined ? undefined : (value.createdAt.toISOString()),
        'updatedAt': value.updatedAt === undefined ? undefined : (value.updatedAt.toISOString()),
        'sdkVersion': value.sdkVersion,
    };
}

exports.ProjectEnvironmentFromJSON = ProjectEnvironmentFromJSON;
exports.ProjectEnvironmentFromJSONTyped = ProjectEnvironmentFromJSONTyped;
exports.ProjectEnvironmentToJSON = ProjectEnvironmentToJSON;
