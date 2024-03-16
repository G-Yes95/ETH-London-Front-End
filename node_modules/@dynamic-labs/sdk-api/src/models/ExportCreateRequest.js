import { exists } from '../runtime.js';
import { ExportCreateRequestFilterFromJSON, ExportCreateRequestFilterToJSON } from './ExportCreateRequestFilter.js';
import { ExportFormatEnumFromJSON, ExportFormatEnumToJSON } from './ExportFormatEnum.js';
import { ExportModelEnumFromJSON, ExportModelEnumToJSON } from './ExportModelEnum.js';

/* tslint:disable */
function ExportCreateRequestFromJSON(json) {
    return ExportCreateRequestFromJSONTyped(json);
}
function ExportCreateRequestFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'format': ExportFormatEnumFromJSON(json['format']),
        'model': ExportModelEnumFromJSON(json['model']),
        'filter': !exists(json, 'filter') ? undefined : ExportCreateRequestFilterFromJSON(json['filter']),
    };
}
function ExportCreateRequestToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'format': ExportFormatEnumToJSON(value.format),
        'model': ExportModelEnumToJSON(value.model),
        'filter': ExportCreateRequestFilterToJSON(value.filter),
    };
}

export { ExportCreateRequestFromJSON, ExportCreateRequestFromJSONTyped, ExportCreateRequestToJSON };
