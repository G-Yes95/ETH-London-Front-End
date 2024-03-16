import { exists } from '../runtime.js';
import { WebhookMessageFromJSON, WebhookMessageToJSON } from './WebhookMessage.js';

/* tslint:disable */
function WebhookMessagesResponseFromJSON(json) {
    return WebhookMessagesResponseFromJSONTyped(json);
}
function WebhookMessagesResponseFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'cursor': !exists(json, 'cursor') ? undefined : json['cursor'],
        'data': !exists(json, 'data') ? undefined : (json['data'].map(WebhookMessageFromJSON)),
    };
}
function WebhookMessagesResponseToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'cursor': value.cursor,
        'data': value.data === undefined ? undefined : (value.data.map(WebhookMessageToJSON)),
    };
}

export { WebhookMessagesResponseFromJSON, WebhookMessagesResponseFromJSONTyped, WebhookMessagesResponseToJSON };
