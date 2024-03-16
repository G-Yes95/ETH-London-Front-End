import { exists } from '../runtime.js';
import { ProviderFromJSON, ProviderToJSON } from './Provider.js';

/* tslint:disable */
function ProvidersResponseFromJSON(json) {
    return ProvidersResponseFromJSONTyped(json);
}
function ProvidersResponseFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'providers': !exists(json, 'providers') ? undefined : (json['providers'].map(ProviderFromJSON)),
    };
}
function ProvidersResponseToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'providers': value.providers === undefined ? undefined : (value.providers.map(ProviderToJSON)),
    };
}

export { ProvidersResponseFromJSON, ProvidersResponseFromJSONTyped, ProvidersResponseToJSON };
