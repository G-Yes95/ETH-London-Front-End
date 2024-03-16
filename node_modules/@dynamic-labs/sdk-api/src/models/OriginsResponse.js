import { exists } from '../runtime.js';
import { OriginResponseFromJSON, OriginResponseToJSON } from './OriginResponse.js';

/* tslint:disable */
function OriginsResponseFromJSON(json) {
    return OriginsResponseFromJSONTyped(json);
}
function OriginsResponseFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'origins': !exists(json, 'origins') ? undefined : (json['origins'].map(OriginResponseFromJSON)),
    };
}
function OriginsResponseToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'origins': value.origins === undefined ? undefined : (value.origins.map(OriginResponseToJSON)),
    };
}

export { OriginsResponseFromJSON, OriginsResponseFromJSONTyped, OriginsResponseToJSON };
