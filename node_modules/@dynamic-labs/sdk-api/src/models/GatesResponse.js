import { exists } from '../runtime.js';
import { GateFromJSON, GateToJSON } from './Gate.js';

/* tslint:disable */
function GatesResponseFromJSON(json) {
    return GatesResponseFromJSONTyped(json);
}
function GatesResponseFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'gates': !exists(json, 'gates') ? undefined : (json['gates'].map(GateFromJSON)),
    };
}
function GatesResponseToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'gates': value.gates === undefined ? undefined : (value.gates.map(GateToJSON)),
    };
}

export { GatesResponseFromJSON, GatesResponseFromJSONTyped, GatesResponseToJSON };
