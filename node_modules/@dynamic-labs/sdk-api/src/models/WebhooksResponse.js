import { exists } from '../runtime.js';
import { WebhookFromJSON, WebhookToJSON } from './Webhook.js';

/* tslint:disable */
function WebhooksResponseFromJSON(json) {
    return WebhooksResponseFromJSONTyped(json);
}
function WebhooksResponseFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'cursor': !exists(json, 'cursor') ? undefined : json['cursor'],
        'data': !exists(json, 'data') ? undefined : (json['data'].map(WebhookFromJSON)),
    };
}
function WebhooksResponseToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'cursor': value.cursor,
        'data': value.data === undefined ? undefined : (value.data.map(WebhookToJSON)),
    };
}

export { WebhooksResponseFromJSON, WebhooksResponseFromJSONTyped, WebhooksResponseToJSON };
