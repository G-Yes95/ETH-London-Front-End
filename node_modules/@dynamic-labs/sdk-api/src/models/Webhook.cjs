'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var runtime = require('../runtime.cjs');

/* tslint:disable */
function WebhookFromJSON(json) {
    return WebhookFromJSONTyped(json);
}
function WebhookFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'environmentId': json['environmentId'],
        'webhookId': json['webhookId'],
        'url': json['url'],
        'secret': !runtime.exists(json, 'secret') ? undefined : json['secret'],
        'events': json['events'],
        'isEnabled': json['isEnabled'],
        'enabledAt': !runtime.exists(json, 'enabledAt') ? undefined : (new Date(json['enabledAt'])),
        'createdAt': (new Date(json['createdAt'])),
        'updatedAt': (new Date(json['updatedAt'])),
    };
}
function WebhookToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'environmentId': value.environmentId,
        'webhookId': value.webhookId,
        'url': value.url,
        'secret': value.secret,
        'events': value.events,
        'isEnabled': value.isEnabled,
        'enabledAt': value.enabledAt === undefined ? undefined : (value.enabledAt.toISOString()),
        'createdAt': (value.createdAt.toISOString()),
        'updatedAt': (value.updatedAt.toISOString()),
    };
}

exports.WebhookFromJSON = WebhookFromJSON;
exports.WebhookFromJSONTyped = WebhookFromJSONTyped;
exports.WebhookToJSON = WebhookToJSON;
