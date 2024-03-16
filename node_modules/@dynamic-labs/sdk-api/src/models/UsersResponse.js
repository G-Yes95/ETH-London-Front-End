import { exists } from '../runtime.js';
import { UserFromJSON, UserToJSON } from './User.js';

/* tslint:disable */
function UsersResponseFromJSON(json) {
    return UsersResponseFromJSONTyped(json);
}
function UsersResponseFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'count': !exists(json, 'count') ? undefined : json['count'],
        'users': !exists(json, 'users') ? undefined : (json['users'].map(UserFromJSON)),
    };
}
function UsersResponseToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'count': value.count,
        'users': value.users === undefined ? undefined : (value.users.map(UserToJSON)),
    };
}

export { UsersResponseFromJSON, UsersResponseFromJSONTyped, UsersResponseToJSON };
