'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var runtime = require('../runtime.cjs');
var CreateProjectResponseProject = require('./CreateProjectResponseProject.cjs');

/* tslint:disable */
function CreateProjectResponseFromJSON(json) {
    return CreateProjectResponseFromJSONTyped(json);
}
function CreateProjectResponseFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'project': !runtime.exists(json, 'project') ? undefined : CreateProjectResponseProject.CreateProjectResponseProjectFromJSON(json['project']),
    };
}
function CreateProjectResponseToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'project': CreateProjectResponseProject.CreateProjectResponseProjectToJSON(value.project),
    };
}

exports.CreateProjectResponseFromJSON = CreateProjectResponseFromJSON;
exports.CreateProjectResponseFromJSONTyped = CreateProjectResponseFromJSONTyped;
exports.CreateProjectResponseToJSON = CreateProjectResponseToJSON;
