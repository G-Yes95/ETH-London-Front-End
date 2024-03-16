import { exists } from '../runtime.js';
import { ExportFromJSON, ExportToJSON } from './Export.js';

/* tslint:disable */
function ExportsResponseFromJSON(json) {
    return ExportsResponseFromJSONTyped(json);
}
function ExportsResponseFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'exports': !exists(json, 'exports') ? undefined : (json['exports'].map(ExportFromJSON)),
    };
}
function ExportsResponseToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'exports': value.exports === undefined ? undefined : (value.exports.map(ExportToJSON)),
    };
}

export { ExportsResponseFromJSON, ExportsResponseFromJSONTyped, ExportsResponseToJSON };
