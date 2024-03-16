import { ProviderEnumFromJSON, ProviderEnumToJSON } from './ProviderEnum.js';

/* tslint:disable */
function ProviderUrlFromJSON(json) {
    return ProviderUrlFromJSONTyped(json);
}
function ProviderUrlFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'provider': ProviderEnumFromJSON(json['provider']),
        'authorizationUrl': json['authorizationUrl'],
        'redirectUrl': json['redirectUrl'],
    };
}
function ProviderUrlToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'provider': ProviderEnumToJSON(value.provider),
        'authorizationUrl': value.authorizationUrl,
        'redirectUrl': value.redirectUrl,
    };
}

export { ProviderUrlFromJSON, ProviderUrlFromJSONTyped, ProviderUrlToJSON };
