import { exists } from '../runtime.js';
import { KeyFromJSON, KeyToJSON } from './Key.js';

/* tslint:disable */
function KeyResponseFromJSON(json) {
    return KeyResponseFromJSONTyped(json);
}
function KeyResponseFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'key': !exists(json, 'key') ? undefined : KeyFromJSON(json['key']),
    };
}
function KeyResponseToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'key': KeyToJSON(value.key),
    };
}

export { KeyResponseFromJSON, KeyResponseFromJSONTyped, KeyResponseToJSON };
