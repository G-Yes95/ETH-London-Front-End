import { exists } from '../runtime.js';

/* tslint:disable */
function OriginResponseFromJSON(json) {
    return OriginResponseFromJSONTyped(json);
}
function OriginResponseFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'id': !exists(json, 'id') ? undefined : json['id'],
        'origin': !exists(json, 'origin') ? undefined : json['origin'],
        'createdAt': !exists(json, 'createdAt') ? undefined : (new Date(json['createdAt'])),
        'projectEnvironmentId': !exists(json, 'projectEnvironmentId') ? undefined : json['projectEnvironmentId'],
    };
}
function OriginResponseToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'id': value.id,
        'origin': value.origin,
        'createdAt': value.createdAt === undefined ? undefined : (value.createdAt.toISOString()),
        'projectEnvironmentId': value.projectEnvironmentId,
    };
}

export { OriginResponseFromJSON, OriginResponseFromJSONTyped, OriginResponseToJSON };
