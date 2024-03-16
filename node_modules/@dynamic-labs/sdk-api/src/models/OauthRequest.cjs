'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var runtime = require('../runtime.cjs');

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
        'codeVerifier': !runtime.exists(json, 'codeVerifier') ? undefined : json['codeVerifier'],
        'state': !runtime.exists(json, 'state') ? undefined : json['state'],
        'captchaToken': !runtime.exists(json, 'captchaToken') ? undefined : json['captchaToken'],
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

exports.OauthRequestFromJSON = OauthRequestFromJSON;
exports.OauthRequestFromJSONTyped = OauthRequestFromJSONTyped;
exports.OauthRequestToJSON = OauthRequestToJSON;
