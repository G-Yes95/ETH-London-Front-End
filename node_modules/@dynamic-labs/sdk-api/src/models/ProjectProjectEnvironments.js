import { exists } from '../runtime.js';

/* tslint:disable */
function ProjectProjectEnvironmentsFromJSON(json) {
    return ProjectProjectEnvironmentsFromJSONTyped(json);
}
function ProjectProjectEnvironmentsFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'id': !exists(json, 'id') ? undefined : json['id'],
        'environmentName': !exists(json, 'environmentName') ? undefined : json['environmentName'],
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

export { ProjectProjectEnvironmentsFromJSON, ProjectProjectEnvironmentsFromJSONTyped, ProjectProjectEnvironmentsToJSON };
