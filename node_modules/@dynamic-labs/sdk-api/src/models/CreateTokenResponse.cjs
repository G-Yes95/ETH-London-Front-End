'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var TokenWithRaw = require('./TokenWithRaw.cjs');

/* tslint:disable */
function CreateTokenResponseFromJSON(json) {
    return CreateTokenResponseFromJSONTyped(json);
}
function CreateTokenResponseFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'token': TokenWithRaw.TokenWithRawFromJSON(json['token']),
    };
}
function CreateTokenResponseToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'token': TokenWithRaw.TokenWithRawToJSON(value.token),
    };
}

exports.CreateTokenResponseFromJSON = CreateTokenResponseFromJSON;
exports.CreateTokenResponseFromJSONTyped = CreateTokenResponseFromJSONTyped;
exports.CreateTokenResponseToJSON = CreateTokenResponseToJSON;
