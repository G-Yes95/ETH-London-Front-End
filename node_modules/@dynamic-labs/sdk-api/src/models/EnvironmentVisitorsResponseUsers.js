import { exists } from '../runtime.js';

/* tslint:disable */
function EnvironmentVisitorsResponseUsersFromJSON(json) {
    return EnvironmentVisitorsResponseUsersFromJSONTyped(json);
}
function EnvironmentVisitorsResponseUsersFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'count': !exists(json, 'count') ? undefined : json['count'],
    };
}
function EnvironmentVisitorsResponseUsersToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'count': value.count,
    };
}

export { EnvironmentVisitorsResponseUsersFromJSON, EnvironmentVisitorsResponseUsersFromJSONTyped, EnvironmentVisitorsResponseUsersToJSON };
