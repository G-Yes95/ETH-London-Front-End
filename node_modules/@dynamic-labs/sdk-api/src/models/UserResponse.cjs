'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var runtime = require('../runtime.cjs');
var User = require('./User.cjs');

/* tslint:disable */
function UserResponseFromJSON(json) {
    return UserResponseFromJSONTyped(json);
}
function UserResponseFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'user': !runtime.exists(json, 'user') ? undefined : User.UserFromJSON(json['user']),
    };
}
function UserResponseToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'user': User.UserToJSON(value.user),
    };
}

exports.UserResponseFromJSON = UserResponseFromJSON;
exports.UserResponseFromJSONTyped = UserResponseFromJSONTyped;
exports.UserResponseToJSON = UserResponseToJSON;
