import { exists } from '../runtime.js';

/* tslint:disable */
function EmailVerificationVerifyRequestFromJSON(json) {
    return EmailVerificationVerifyRequestFromJSONTyped(json);
}
function EmailVerificationVerifyRequestFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'verificationUUID': json['verificationUUID'],
        'verificationToken': json['verificationToken'],
        'captchaToken': !exists(json, 'captchaToken') ? undefined : json['captchaToken'],
    };
}
function EmailVerificationVerifyRequestToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'verificationUUID': value.verificationUUID,
        'verificationToken': value.verificationToken,
        'captchaToken': value.captchaToken,
    };
}

export { EmailVerificationVerifyRequestFromJSON, EmailVerificationVerifyRequestFromJSONTyped, EmailVerificationVerifyRequestToJSON };
