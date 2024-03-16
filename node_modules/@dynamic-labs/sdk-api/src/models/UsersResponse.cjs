'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var runtime = require('../runtime.cjs');
var User = require('./User.cjs');

/* tslint:disable */
function UsersResponseFromJSON(json) {
    return UsersResponseFromJSONTyped(json);
}
function UsersResponseFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'count': !runtime.exists(json, 'count') ? undefined : json['count'],
        'users': !runtime.exists(json, 'users') ? undefined : (json['users'].map(User.UserFromJSON)),
    };
}
function UsersResponseToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'count': value.count,
        'users': value.users === undefined ? undefined : (value.users.map(User.UserToJSON)),
    };
}

exports.UsersResponseFromJSON = UsersResponseFromJSON;
exports.UsersResponseFromJSONTyped = UsersResponseFromJSONTyped;
exports.UsersResponseToJSON = UsersResponseToJSON;
