'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var runtime = require('../runtime.cjs');

/* tslint:disable */
function WebhookMessageRedeliveryResponseFromJSON(json) {
    return WebhookMessageRedeliveryResponseFromJSONTyped(json);
}
function WebhookMessageRedeliveryResponseFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'message': !runtime.exists(json, 'message') ? undefined : json['message'],
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

exports.WebhookMessageRedeliveryResponseFromJSON = WebhookMessageRedeliveryResponseFromJSON;
exports.WebhookMessageRedeliveryResponseFromJSONTyped = WebhookMessageRedeliveryResponseFromJSONTyped;
exports.WebhookMessageRedeliveryResponseToJSON = WebhookMessageRedeliveryResponseToJSON;
