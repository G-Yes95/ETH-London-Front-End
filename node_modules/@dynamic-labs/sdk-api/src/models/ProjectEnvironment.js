import { exists } from '../runtime.js';
import { ProjectSettingsFromJSON, ProjectSettingsToJSON } from './ProjectSettings.js';

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
        'settings': !exists(json, 'settings') ? undefined : ProjectSettingsFromJSON(json['settings']),
        'createdAt': !exists(json, 'createdAt') ? undefined : (new Date(json['createdAt'])),
        'updatedAt': !exists(json, 'updatedAt') ? undefined : (new Date(json['updatedAt'])),
        'sdkVersion': !exists(json, 'sdkVersion') ? undefined : json['sdkVersion'],
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
        'settings': ProjectSettingsToJSON(value.settings),
        'createdAt': value.createdAt === undefined ? undefined : (value.createdAt.toISOString()),
        'updatedAt': value.updatedAt === undefined ? undefined : (value.updatedAt.toISOString()),
        'sdkVersion': value.sdkVersion,
    };
}

export { ProjectEnvironmentFromJSON, ProjectEnvironmentFromJSONTyped, ProjectEnvironmentToJSON };
