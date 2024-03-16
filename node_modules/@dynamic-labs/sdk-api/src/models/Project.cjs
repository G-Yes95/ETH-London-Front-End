'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var runtime = require('../runtime.cjs');
var ProjectProjectEnvironments = require('./ProjectProjectEnvironments.cjs');

/* tslint:disable */
function ProjectFromJSON(json) {
    return ProjectFromJSONTyped(json);
}
function ProjectFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'name': json['name'],
        'id': json['id'],
        'organizationId': json['organizationId'],
        'projectEnvironments': !runtime.exists(json, 'projectEnvironments') ? undefined : (json['projectEnvironments'].map(ProjectProjectEnvironments.ProjectProjectEnvironmentsFromJSON)),
    };
}
function ProjectToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'name': value.name,
        'id': value.id,
        'organizationId': value.organizationId,
        'projectEnvironments': value.projectEnvironments === undefined ? undefined : (value.projectEnvironments.map(ProjectProjectEnvironments.ProjectProjectEnvironmentsToJSON)),
    };
}

exports.ProjectFromJSON = ProjectFromJSON;
exports.ProjectFromJSONTyped = ProjectFromJSONTyped;
exports.ProjectToJSON = ProjectToJSON;
