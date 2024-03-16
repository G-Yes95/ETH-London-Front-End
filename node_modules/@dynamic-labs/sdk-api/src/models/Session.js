import { exists } from '../runtime.js';

/* tslint:disable */
function SessionFromJSON(json) {
    return SessionFromJSONTyped(json);
}
function SessionFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'id': !exists(json, 'id') ? undefined : json['id'],
        'createdAt': !exists(json, 'createdAt') ? undefined : (new Date(json['createdAt'])),
        'ipAddress': !exists(json, 'ipAddress') ? undefined : json['ipAddress'],
        'revokedAt': !exists(json, 'revokedAt') ? undefined : (json['revokedAt'] === null ? null : new Date(json['revokedAt'])),
    };
}
function SessionToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'id': value.id,
        'createdAt': value.createdAt === undefined ? undefined : (value.createdAt.toISOString()),
        'ipAddress': value.ipAddress,
        'revokedAt': value.revokedAt === undefined ? undefined : (value.revokedAt === null ? null : value.revokedAt.toISOString()),
    };
}

export { SessionFromJSON, SessionFromJSONTyped, SessionToJSON };
