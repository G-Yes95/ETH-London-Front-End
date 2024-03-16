import { exists } from '../runtime.js';
import { DurationFromJSON, DurationToJSON } from './Duration.js';
import { HCaptchaSettingsFromJSON, HCaptchaSettingsToJSON } from './HCaptchaSettings.js';

/* tslint:disable */
function ProjectSettingsSecurityFromJSON(json) {
    return ProjectSettingsSecurityFromJSONTyped(json);
}
function ProjectSettingsSecurityFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'jwtDuration': !exists(json, 'jwtDuration') ? undefined : DurationFromJSON(json['jwtDuration']),
        'hCaptcha': !exists(json, 'hCaptcha') ? undefined : HCaptchaSettingsFromJSON(json['hCaptcha']),
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
        'jwtDuration': DurationToJSON(value.jwtDuration),
        'hCaptcha': HCaptchaSettingsToJSON(value.hCaptcha),
    };
}

export { ProjectSettingsSecurityFromJSON, ProjectSettingsSecurityFromJSONTyped, ProjectSettingsSecurityToJSON };
