import { exists } from '../runtime.js';
import { ProviderEnumFromJSON, ProviderEnumToJSON } from './ProviderEnum.js';

/* tslint:disable */
function UnprocessableEntityErrorPayloadFromJSON(json) {
    return UnprocessableEntityErrorPayloadFromJSONTyped(json);
}
function UnprocessableEntityErrorPayloadFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'email': !exists(json, 'email') ? undefined : json['email'],
        'loginProvider': !exists(json, 'loginProvider') ? undefined : ProviderEnumFromJSON(json['loginProvider']),
        'embeddedWalletName': !exists(json, 'embeddedWalletName') ? undefined : json['embeddedWalletName'],
        'embeddedSocialSigninProvider': !exists(json, 'embeddedSocialSigninProvider') ? undefined : ProviderEnumFromJSON(json['embeddedSocialSigninProvider']),
    };
}
function UnprocessableEntityErrorPayloadToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'email': value.email,
        'loginProvider': ProviderEnumToJSON(value.loginProvider),
        'embeddedWalletName': value.embeddedWalletName,
        'embeddedSocialSigninProvider': ProviderEnumToJSON(value.embeddedSocialSigninProvider),
    };
}

export { UnprocessableEntityErrorPayloadFromJSON, UnprocessableEntityErrorPayloadFromJSONTyped, UnprocessableEntityErrorPayloadToJSON };
