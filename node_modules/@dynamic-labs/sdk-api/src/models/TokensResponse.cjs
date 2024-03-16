'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var runtime = require('../runtime.cjs');
var Token = require('./Token.cjs');

/* tslint:disable */
function TokensResponseFromJSON(json) {
    return TokensResponseFromJSONTyped(json);
}
function TokensResponseFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'tokens': !runtime.exists(json, 'tokens') ? undefined : (json['tokens'].map(Token.TokenFromJSON)),
    };
}
function TokensResponseToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'tokens': value.tokens === undefined ? undefined : (value.tokens.map(Token.TokenToJSON)),
    };
}

exports.TokensResponseFromJSON = TokensResponseFromJSON;
exports.TokensResponseFromJSONTyped = TokensResponseFromJSONTyped;
exports.TokensResponseToJSON = TokensResponseToJSON;
