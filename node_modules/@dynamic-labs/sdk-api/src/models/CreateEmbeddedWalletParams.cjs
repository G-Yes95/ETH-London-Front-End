'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var runtime = require('../runtime.cjs');
var ChainEnum = require('./ChainEnum.cjs');
var CreateEmbeddedWalletSpecificOpts = require('./CreateEmbeddedWalletSpecificOpts.cjs');
var EmbeddedWalletProviderEnum = require('./EmbeddedWalletProviderEnum.cjs');

/* tslint:disable */
function CreateEmbeddedWalletParamsFromJSON(json) {
    return CreateEmbeddedWalletParamsFromJSONTyped(json);
}
function CreateEmbeddedWalletParamsFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'chain': ChainEnum.ChainEnumFromJSON(json['chain']),
        'embeddedWalletProvider': EmbeddedWalletProviderEnum.EmbeddedWalletProviderEnumFromJSON(json['embeddedWalletProvider']),
        'embeddedWalletSpecificOpts': !runtime.exists(json, 'embeddedWalletSpecificOpts') ? undefined : CreateEmbeddedWalletSpecificOpts.CreateEmbeddedWalletSpecificOptsFromJSON(json['embeddedWalletSpecificOpts']),
        'isAuthenticatorAttached': !runtime.exists(json, 'isAuthenticatorAttached') ? undefined : json['isAuthenticatorAttached'],
    };
}
function CreateEmbeddedWalletParamsToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'chain': ChainEnum.ChainEnumToJSON(value.chain),
        'embeddedWalletProvider': EmbeddedWalletProviderEnum.EmbeddedWalletProviderEnumToJSON(value.embeddedWalletProvider),
        'embeddedWalletSpecificOpts': CreateEmbeddedWalletSpecificOpts.CreateEmbeddedWalletSpecificOptsToJSON(value.embeddedWalletSpecificOpts),
        'isAuthenticatorAttached': value.isAuthenticatorAttached,
    };
}

exports.CreateEmbeddedWalletParamsFromJSON = CreateEmbeddedWalletParamsFromJSON;
exports.CreateEmbeddedWalletParamsFromJSONTyped = CreateEmbeddedWalletParamsFromJSONTyped;
exports.CreateEmbeddedWalletParamsToJSON = CreateEmbeddedWalletParamsToJSON;
