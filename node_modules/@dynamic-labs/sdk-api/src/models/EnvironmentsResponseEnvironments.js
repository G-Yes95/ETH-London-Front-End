import { ProjectEnvironmentFromJSON, ProjectEnvironmentToJSON } from './ProjectEnvironment.js';

/* tslint:disable */
function EnvironmentsResponseEnvironmentsFromJSON(json) {
    return EnvironmentsResponseEnvironmentsFromJSONTyped(json);
}
function EnvironmentsResponseEnvironmentsFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'live': ProjectEnvironmentFromJSON(json['live']),
        'sandbox': ProjectEnvironmentFromJSON(json['sandbox']),
    };
}
function EnvironmentsResponseEnvironmentsToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'live': ProjectEnvironmentToJSON(value.live),
        'sandbox': ProjectEnvironmentToJSON(value.sandbox),
    };
}

export { EnvironmentsResponseEnvironmentsFromJSON, EnvironmentsResponseEnvironmentsFromJSONTyped, EnvironmentsResponseEnvironmentsToJSON };
