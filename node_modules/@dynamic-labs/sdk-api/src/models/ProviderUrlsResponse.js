import { exists } from '../runtime.js';
import { ProviderUrlFromJSON, ProviderUrlToJSON } from './ProviderUrl.js';

/* tslint:disable */
function ProviderUrlsResponseFromJSON(json) {
    return ProviderUrlsResponseFromJSONTyped(json);
}
function ProviderUrlsResponseFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'providerUrls': !exists(json, 'providerUrls') ? undefined : (json['providerUrls'].map(ProviderUrlFromJSON)),
    };
}
function ProviderUrlsResponseToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'providerUrls': value.providerUrls === undefined ? undefined : (value.providerUrls.map(ProviderUrlToJSON)),
    };
}

export { ProviderUrlsResponseFromJSON, ProviderUrlsResponseFromJSONTyped, ProviderUrlsResponseToJSON };
