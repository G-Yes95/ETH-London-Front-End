'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var runtime = require('../runtime.cjs');
var Duration = require('./Duration.cjs');
var HCaptchaSettings = require('./HCaptchaSettings.cjs');

/* tslint:disable */
function ProjectSettingsSecurityFromJSON(json) {
    return ProjectSettingsSecurityFromJSONTyped(json);
}
function ProjectSettingsSecurityFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'jwtDuration': !runtime.exists(json, 'jwtDuration') ? undefined : Duration.DurationFromJSON(json['jwtDuration']),
        'hCaptcha': !runtime.exists(json, 'hCaptcha') ? undefined : HCaptchaSettings.HCaptchaSettingsFromJSON(json['hCaptcha']),
    };
}
function ProjectSettingsSecurityToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'jwtDuration': Duration.DurationToJSON(value.jwtDuration),
        'hCaptcha': HCaptchaSettings.HCaptchaSettingsToJSON(value.hCaptcha),
    };
}

exports.ProjectSettingsSecurityFromJSON = ProjectSettingsSecurityFromJSON;
exports.ProjectSettingsSecurityFromJSONTyped = ProjectSettingsSecurityFromJSONTyped;
exports.ProjectSettingsSecurityToJSON = ProjectSettingsSecurityToJSON;
