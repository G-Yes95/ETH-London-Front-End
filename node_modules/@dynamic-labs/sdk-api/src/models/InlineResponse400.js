import { exists } from '../runtime.js';

/* tslint:disable */
function InlineResponse400FromJSON(json) {
    return InlineResponse400FromJSONTyped(json);
}
function InlineResponse400FromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'error': !exists(json, 'error') ? undefined : json['error'],
        'status': !exists(json, 'status') ? undefined : json['status'],
    };
}
function InlineResponse400ToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'error': value.error,
        'status': value.status,
    };
}

export { InlineResponse400FromJSON, InlineResponse400FromJSONTyped, InlineResponse400ToJSON };
