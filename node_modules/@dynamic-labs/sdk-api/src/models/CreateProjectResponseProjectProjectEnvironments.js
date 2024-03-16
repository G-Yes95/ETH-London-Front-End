import { exists } from '../runtime.js';

/* tslint:disable */
function CreateProjectResponseProjectProjectEnvironmentsFromJSON(json) {
    return CreateProjectResponseProjectProjectEnvironmentsFromJSONTyped(json);
}
function CreateProjectResponseProjectProjectEnvironmentsFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'id': !exists(json, 'id') ? undefined : json['id'],
        'environmentName': !exists(json, 'environmentName') ? undefined : json['environmentName'],
    };
}
function CreateProjectResponseProjectProjectEnvironmentsToJSON(value) {
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

export { CreateProjectResponseProjectProjectEnvironmentsFromJSON, CreateProjectResponseProjectProjectEnvironmentsFromJSONTyped, CreateProjectResponseProjectProjectEnvironmentsToJSON };
