import { exists } from '../runtime.js';
import { UserFromJSON, UserToJSON } from './User.js';

/* tslint:disable */
function UserResponseFromJSON(json) {
    return UserResponseFromJSONTyped(json);
}
function UserResponseFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'user': !exists(json, 'user') ? undefined : UserFromJSON(json['user']),
    };
}
function UserResponseToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'user': UserToJSON(value.user),
    };
}

export { UserResponseFromJSON, UserResponseFromJSONTyped, UserResponseToJSON };
