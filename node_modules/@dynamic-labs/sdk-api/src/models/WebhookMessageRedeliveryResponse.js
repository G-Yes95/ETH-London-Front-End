import { exists } from '../runtime.js';

/* tslint:disable */
function WebhookMessageRedeliveryResponseFromJSON(json) {
    return WebhookMessageRedeliveryResponseFromJSONTyped(json);
}
function WebhookMessageRedeliveryResponseFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'message': !exists(json, 'message') ? undefined : json['message'],
    };
}
function WebhookMessageRedeliveryResponseToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'message': value.message,
    };
}

export { WebhookMessageRedeliveryResponseFromJSON, WebhookMessageRedeliveryResponseFromJSONTyped, WebhookMessageRedeliveryResponseToJSON };
