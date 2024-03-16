import { exists } from '../runtime.js';

/* tslint:disable */
function OauthRequestFromJSON(json) {
    return OauthRequestFromJSONTyped(json);
}
function OauthRequestFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'code': json['code'],
        'codeVerifier': !exists(json, 'codeVerifier') ? undefined : json['codeVerifier'],
        'state': !exists(json, 'state') ? undefined : json['state'],
        'captchaToken': !exists(json, 'captchaToken') ? undefined : json['captchaToken'],
    };
}
function OauthRequestToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'code': value.code,
        'codeVerifier': value.codeVerifier,
        'state': value.state,
        'captchaToken': value.captchaToken,
    };
}

export { OauthRequestFromJSON, OauthRequestFromJSONTyped, OauthRequestToJSON };
