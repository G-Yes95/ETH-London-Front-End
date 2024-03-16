'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var runtime = require('../runtime.cjs');
var Webhook = require('./Webhook.cjs');

/* tslint:disable */
function WebhooksResponseFromJSON(json) {
    return WebhooksResponseFromJSONTyped(json);
}
function WebhooksResponseFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'cursor': !runtime.exists(json, 'cursor') ? undefined : json['cursor'],
        'data': !runtime.exists(json, 'data') ? undefined : (json['data'].map(Webhook.WebhookFromJSON)),
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
        'data': value.data === undefined ? undefined : (value.data.map(Webhook.WebhookToJSON)),
    };
}

exports.WebhooksResponseFromJSON = WebhooksResponseFromJSON;
exports.WebhooksResponseFromJSONTyped = WebhooksResponseFromJSONTyped;
exports.WebhooksResponseToJSON = WebhooksResponseToJSON;
