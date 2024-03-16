import { exists } from '../runtime.js';
import { TokenCreatedByFromJSON, TokenCreatedByToJSON } from './TokenCreatedBy.js';
import { TokenWithRawProjectEnvironmentFromJSON, TokenWithRawProjectEnvironmentToJSON } from './TokenWithRawProjectEnvironment.js';

/* tslint:disable */
function TokenFromJSON(json) {
    return TokenFromJSONTyped(json);
}
function TokenFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'id': json['id'],
        'checksum': json['checksum'],
        'createdBy': TokenCreatedByFromJSON(json['createdBy']),
        'createdAt': (new Date(json['createdAt'])),
        'note': !exists(json, 'note') ? undefined : json['note'],
        'projectEnvironmentId': json['projectEnvironmentId'],
        'projectEnvironment': TokenWithRawProjectEnvironmentFromJSON(json['projectEnvironment']),
    };
}
function TokenToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'id': value.id,
        'checksum': value.checksum,
        'createdBy': TokenCreatedByToJSON(value.createdBy),
        'createdAt': (value.createdAt.toISOString()),
        'note': value.note,
        'projectEnvironmentId': value.projectEnvironmentId,
        'projectEnvironment': TokenWithRawProjectEnvironmentToJSON(value.projectEnvironment),
    };
}

export { TokenFromJSON, TokenFromJSONTyped, TokenToJSON };
