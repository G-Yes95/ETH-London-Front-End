import { exists } from '../runtime.js';

/* tslint:disable */
function UpdateProjectResponseFromJSON(json) {
    return UpdateProjectResponseFromJSONTyped(json);
}
function UpdateProjectResponseFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'id': !exists(json, 'id') ? undefined : json['id'],
        'name': !exists(json, 'name') ? undefined : json['name'],
    };
}
function UpdateProjectResponseToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'id': value.id,
        'name': value.name,
    };
}

export { UpdateProjectResponseFromJSON, UpdateProjectResponseFromJSONTyped, UpdateProjectResponseToJSON };
