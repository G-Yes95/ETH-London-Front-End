import { exists } from '../runtime.js';
import { CreateProjectResponseProjectFromJSON, CreateProjectResponseProjectToJSON } from './CreateProjectResponseProject.js';

/* tslint:disable */
function CreateProjectResponseFromJSON(json) {
    return CreateProjectResponseFromJSONTyped(json);
}
function CreateProjectResponseFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'project': !exists(json, 'project') ? undefined : CreateProjectResponseProjectFromJSON(json['project']),
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
        'project': CreateProjectResponseProjectToJSON(value.project),
    };
}

export { CreateProjectResponseFromJSON, CreateProjectResponseFromJSONTyped, CreateProjectResponseToJSON };
