import { exists } from '../runtime.js';
import { TokenCreatedByFromJSON, TokenCreatedByToJSON } from './TokenCreatedBy.js';
import { TokenWithRawProjectEnvironmentFromJSON, TokenWithRawProjectEnvironmentToJSON } from './TokenWithRawProjectEnvironment.js';

/* tslint:disable */
function TokenWithRawFromJSON(json) {
    return TokenWithRawFromJSONTyped(json);
}
function TokenWithRawFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'id': json['id'],
        'rawToken': json['rawToken'],
        'checksum': json['checksum'],
        'createdBy': TokenCreatedByFromJSON(json['createdBy']),
        'active': !exists(json, 'active') ? undefined : json['active'],
        'createdAt': (new Date(json['createdAt'])),
        'note': !exists(json, 'note') ? undefined : json['note'],
        'projectEnvironmentId': json['projectEnvironmentId'],
        'projectEnvironment': TokenWithRawProjectEnvironmentFromJSON(json['projectEnvironment']),
    };
}
function TokenWithRawToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'id': value.id,
        'rawToken': value.rawToken,
        'checksum': value.checksum,
        'createdBy': TokenCreatedByToJSON(value.createdBy),
        'active': value.active,
        'createdAt': (value.createdAt.toISOString()),
        'note': value.note,
        'projectEnvironmentId': value.projectEnvironmentId,
        'projectEnvironment': TokenWithRawProjectEnvironmentToJSON(value.projectEnvironment),
    };
}

export { TokenWithRawFromJSON, TokenWithRawFromJSONTyped, TokenWithRawToJSON };
