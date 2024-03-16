import { exists } from '../runtime.js';
import { ProjectFromJSON, ProjectToJSON } from './Project.js';

/* tslint:disable */
function ProjectsResponseFromJSON(json) {
    return ProjectsResponseFromJSONTyped(json);
}
function ProjectsResponseFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'projects': !exists(json, 'projects') ? undefined : (json['projects'].map(ProjectFromJSON)),
    };
}
function ProjectsResponseToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'projects': value.projects === undefined ? undefined : (value.projects.map(ProjectToJSON)),
    };
}

export { ProjectsResponseFromJSON, ProjectsResponseFromJSONTyped, ProjectsResponseToJSON };
