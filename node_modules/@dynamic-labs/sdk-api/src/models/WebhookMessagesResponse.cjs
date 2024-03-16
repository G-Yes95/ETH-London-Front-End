'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var runtime = require('../runtime.cjs');
var WebhookMessage = require('./WebhookMessage.cjs');

/* tslint:disable */
function WebhookMessagesResponseFromJSON(json) {
    return WebhookMessagesResponseFromJSONTyped(json);
}
function WebhookMessagesResponseFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'cursor': !runtime.exists(json, 'cursor') ? undefined : json['cursor'],
        'data': !runtime.exists(json, 'data') ? undefined : (json['data'].map(WebhookMessage.WebhookMessageFromJSON)),
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
        'data': value.data === undefined ? undefined : (value.data.map(WebhookMessage.WebhookMessageToJSON)),
    };
}

exports.WebhookMessagesResponseFromJSON = WebhookMessagesResponseFromJSON;
exports.WebhookMessagesResponseFromJSONTyped = WebhookMessagesResponseFromJSONTyped;
exports.WebhookMessagesResponseToJSON = WebhookMessagesResponseToJSON;
