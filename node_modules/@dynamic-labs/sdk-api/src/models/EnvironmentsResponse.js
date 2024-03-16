import { EnvironmentsResponseEnvironmentsFromJSON, EnvironmentsResponseEnvironmentsToJSON } from './EnvironmentsResponseEnvironments.js';

/* tslint:disable */
function EnvironmentsResponseFromJSON(json) {
    return EnvironmentsResponseFromJSONTyped(json);
}
function EnvironmentsResponseFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'environments': EnvironmentsResponseEnvironmentsFromJSON(json['environments']),
    };
}
function EnvironmentsResponseToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'environments': EnvironmentsResponseEnvironmentsToJSON(value.environments),
    };
}

export { EnvironmentsResponseFromJSON, EnvironmentsResponseFromJSONTyped, EnvironmentsResponseToJSON };
