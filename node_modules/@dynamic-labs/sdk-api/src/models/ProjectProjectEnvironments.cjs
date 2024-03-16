'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var runtime = require('../runtime.cjs');

/* tslint:disable */
function ProjectProjectEnvironmentsFromJSON(json) {
    return ProjectProjectEnvironmentsFromJSONTyped(json);
}
function ProjectProjectEnvironmentsFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'id': !runtime.exists(json, 'id') ? undefined : json['id'],
        'environmentName': !runtime.exists(json, 'environmentName') ? undefined : json['environmentName'],
    };
}
function ProjectProjectEnvironmentsToJSON(value) {
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

exports.ProjectProjectEnvironmentsFromJSON = ProjectProjectEnvironmentsFromJSON;
exports.ProjectProjectEnvironmentsFromJSONTyped = ProjectProjectEnvironmentsFromJSONTyped;
exports.ProjectProjectEnvironmentsToJSON = ProjectProjectEnvironmentsToJSON;
