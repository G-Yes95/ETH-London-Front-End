'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var runtime = require('../runtime.cjs');
var Project = require('./Project.cjs');

/* tslint:disable */
function ProjectsResponseFromJSON(json) {
    return ProjectsResponseFromJSONTyped(json);
}
function ProjectsResponseFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'projects': !runtime.exists(json, 'projects') ? undefined : (json['projects'].map(Project.ProjectFromJSON)),
    };
}
function ProjectsResponseToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'projects': value.projects === undefined ? undefined : (value.projects.map(Project.ProjectToJSON)),
    };
}

exports.ProjectsResponseFromJSON = ProjectsResponseFromJSON;
exports.ProjectsResponseFromJSONTyped = ProjectsResponseFromJSONTyped;
exports.ProjectsResponseToJSON = ProjectsResponseToJSON;
