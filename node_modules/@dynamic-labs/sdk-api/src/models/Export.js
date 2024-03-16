import { exists } from '../runtime.js';
import { ExportCreateRequestFilterFromJSON, ExportCreateRequestFilterToJSON } from './ExportCreateRequestFilter.js';
import { ExportFormatEnumFromJSON, ExportFormatEnumToJSON } from './ExportFormatEnum.js';
import { ExportModelEnumFromJSON, ExportModelEnumToJSON } from './ExportModelEnum.js';
import { ExportStatusEnumFromJSON, ExportStatusEnumToJSON } from './ExportStatusEnum.js';

/* tslint:disable */
function ExportFromJSON(json) {
    return ExportFromJSONTyped(json);
}
function ExportFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'id': json['id'],
        'format': ExportFormatEnumFromJSON(json['format']),
        'model': ExportModelEnumFromJSON(json['model']),
        'status': ExportStatusEnumFromJSON(json['status']),
        'filter': ExportCreateRequestFilterFromJSON(json['filter']),
        'createdAt': (new Date(json['createdAt'])),
        'startedAt': !exists(json, 'startedAt') ? undefined : (json['startedAt'] === null ? null : new Date(json['startedAt'])),
        'completedAt': !exists(json, 'completedAt') ? undefined : (json['completedAt'] === null ? null : new Date(json['completedAt'])),
        'downloadUrl': !exists(json, 'downloadUrl') ? undefined : json['downloadUrl'],
        'error': !exists(json, 'error') ? undefined : json['error'],
    };
}
function ExportToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'id': value.id,
        'format': ExportFormatEnumToJSON(value.format),
        'model': ExportModelEnumToJSON(value.model),
        'status': ExportStatusEnumToJSON(value.status),
        'filter': ExportCreateRequestFilterToJSON(value.filter),
        'createdAt': (value.createdAt.toISOString()),
        'startedAt': value.startedAt === undefined ? undefined : (value.startedAt === null ? null : value.startedAt.toISOString()),
        'completedAt': value.completedAt === undefined ? undefined : (value.completedAt === null ? null : value.completedAt.toISOString()),
        'downloadUrl': value.downloadUrl,
        'error': value.error,
    };
}

export { ExportFromJSON, ExportFromJSONTyped, ExportToJSON };
