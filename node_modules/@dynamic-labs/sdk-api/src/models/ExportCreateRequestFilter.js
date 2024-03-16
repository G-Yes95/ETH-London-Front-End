import { exists } from '../runtime.js';
import { UserSearchFilterParamsFromJSON, UserSearchFilterParamsToJSON } from './UserSearchFilterParams.js';

/* tslint:disable */
function ExportCreateRequestFilterFromJSON(json) {
    return ExportCreateRequestFilterFromJSONTyped(json);
}
function ExportCreateRequestFilterFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'users': !exists(json, 'users') ? undefined : UserSearchFilterParamsFromJSON(json['users']),
    };
}
function ExportCreateRequestFilterToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'users': UserSearchFilterParamsToJSON(value.users),
    };
}

export { ExportCreateRequestFilterFromJSON, ExportCreateRequestFilterFromJSONTyped, ExportCreateRequestFilterToJSON };
