import { exists } from '../runtime.js';
import { EnvironmentVisitorsResponseUsersFromJSON, EnvironmentVisitorsResponseUsersToJSON } from './EnvironmentVisitorsResponseUsers.js';

/* tslint:disable */
function EnvironmentVisitorsResponseFromJSON(json) {
    return EnvironmentVisitorsResponseFromJSONTyped(json);
}
function EnvironmentVisitorsResponseFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'users': !exists(json, 'users') ? undefined : EnvironmentVisitorsResponseUsersFromJSON(json['users']),
        'visitors': !exists(json, 'visitors') ? undefined : EnvironmentVisitorsResponseUsersFromJSON(json['visitors']),
    };
}
function EnvironmentVisitorsResponseToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'users': EnvironmentVisitorsResponseUsersToJSON(value.users),
        'visitors': EnvironmentVisitorsResponseUsersToJSON(value.visitors),
    };
}

export { EnvironmentVisitorsResponseFromJSON, EnvironmentVisitorsResponseFromJSONTyped, EnvironmentVisitorsResponseToJSON };
