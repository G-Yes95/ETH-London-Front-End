import { exists } from '../runtime.js';
import { OriginResponseFromJSON, OriginResponseToJSON } from './OriginResponse.js';

/* tslint:disable */
function InlineResponse201FromJSON(json) {
    return InlineResponse201FromJSONTyped(json);
}
function InlineResponse201FromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'origin': !exists(json, 'origin') ? undefined : OriginResponseFromJSON(json['origin']),
    };
}
function InlineResponse201ToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'origin': OriginResponseToJSON(value.origin),
    };
}

export { InlineResponse201FromJSON, InlineResponse201FromJSONTyped, InlineResponse201ToJSON };
