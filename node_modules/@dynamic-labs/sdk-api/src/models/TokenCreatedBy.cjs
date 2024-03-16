'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var runtime = require('../runtime.cjs');

/* tslint:disable */
function TokenCreatedByFromJSON(json) {
    return TokenCreatedByFromJSONTyped(json);
}
function TokenCreatedByFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'id': json['id'],
        'alias': !runtime.exists(json, 'alias') ? undefined : json['alias'],
        'firstName': !runtime.exists(json, 'firstName') ? undefined : json['firstName'],
        'lastName': !runtime.exists(json, 'lastName') ? undefined : json['lastName'],
        'email': !runtime.exists(json, 'email') ? undefined : json['email'],
    };
}
function TokenCreatedByToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'id': value.id,
        'alias': value.alias,
        'firstName': value.firstName,
        'lastName': value.lastName,
        'email': value.email,
    };
}

exports.TokenCreatedByFromJSON = TokenCreatedByFromJSON;
exports.TokenCreatedByFromJSONTyped = TokenCreatedByFromJSONTyped;
exports.TokenCreatedByToJSON = TokenCreatedByToJSON;
