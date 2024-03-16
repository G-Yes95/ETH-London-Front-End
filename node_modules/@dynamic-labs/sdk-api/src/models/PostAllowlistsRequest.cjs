'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var runtime = require('../runtime.cjs');
var AccessOutcomeEnum = require('./AccessOutcomeEnum.cjs');

/* tslint:disable */
function PostAllowlistsRequestFromJSON(json) {
    return PostAllowlistsRequestFromJSONTyped(json);
}
function PostAllowlistsRequestFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'name': !runtime.exists(json, 'name') ? undefined : json['name'],
        'scope': !runtime.exists(json, 'scope') ? undefined : json['scope'],
        'outcome': !runtime.exists(json, 'outcome') ? undefined : AccessOutcomeEnum.AccessOutcomeEnumFromJSON(json['outcome']),
    };
}
function PostAllowlistsRequestToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'name': value.name,
        'scope': value.scope,
        'outcome': AccessOutcomeEnum.AccessOutcomeEnumToJSON(value.outcome),
    };
}

exports.PostAllowlistsRequestFromJSON = PostAllowlistsRequestFromJSON;
exports.PostAllowlistsRequestFromJSONTyped = PostAllowlistsRequestFromJSONTyped;
exports.PostAllowlistsRequestToJSON = PostAllowlistsRequestToJSON;
