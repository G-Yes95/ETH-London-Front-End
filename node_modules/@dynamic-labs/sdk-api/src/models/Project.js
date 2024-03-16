import { exists } from '../runtime.js';
import { ProjectProjectEnvironmentsFromJSON, ProjectProjectEnvironmentsToJSON } from './ProjectProjectEnvironments.js';

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
        'projectEnvironments': !exists(json, 'projectEnvironments') ? undefined : (json['projectEnvironments'].map(ProjectProjectEnvironmentsFromJSON)),
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
        'projectEnvironments': value.projectEnvironments === undefined ? undefined : (value.projectEnvironments.map(ProjectProjectEnvironmentsToJSON)),
    };
}

export { ProjectFromJSON, ProjectFromJSONTyped, ProjectToJSON };
