import { exists } from '../runtime.js';
import { CreateProjectResponseProjectProjectEnvironmentsFromJSON, CreateProjectResponseProjectProjectEnvironmentsToJSON } from './CreateProjectResponseProjectProjectEnvironments.js';

/* tslint:disable */
function CreateProjectResponseProjectFromJSON(json) {
    return CreateProjectResponseProjectFromJSONTyped(json);
}
function CreateProjectResponseProjectFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'id': !exists(json, 'id') ? undefined : json['id'],
        'name': !exists(json, 'name') ? undefined : json['name'],
        'organizationId': !exists(json, 'organizationId') ? undefined : json['organizationId'],
        'projectEnvironments': !exists(json, 'projectEnvironments') ? undefined : (json['projectEnvironments'].map(CreateProjectResponseProjectProjectEnvironmentsFromJSON)),
    };
}
function CreateProjectResponseProjectToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'id': value.id,
        'name': value.name,
        'organizationId': value.organizationId,
        'projectEnvironments': value.projectEnvironments === undefined ? undefined : (value.projectEnvironments.map(CreateProjectResponseProjectProjectEnvironmentsToJSON)),
    };
}

export { CreateProjectResponseProjectFromJSON, CreateProjectResponseProjectFromJSONTyped, CreateProjectResponseProjectToJSON };
