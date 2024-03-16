'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var runtime = require('../runtime.cjs');
var ChainEnum = require('./ChainEnum.cjs');
var WalletProperties = require('./WalletProperties.cjs');
var WalletProviderEnum = require('./WalletProviderEnum.cjs');

/* tslint:disable */
function WalletFromJSON(json) {
    return WalletFromJSONTyped(json);
}
function WalletFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'id': json['id'],
        'name': json['name'],
        'chain': ChainEnum.ChainEnumFromJSON(json['chain']),
        'publicKey': json['publicKey'],
        'provider': WalletProviderEnum.WalletProviderEnumFromJSON(json['provider']),
        'properties': !runtime.exists(json, 'properties') ? undefined : WalletProperties.WalletPropertiesFromJSON(json['properties']),
    };
}
function WalletToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'id': value.id,
        'name': value.name,
        'chain': ChainEnum.ChainEnumToJSON(value.chain),
        'publicKey': value.publicKey,
        'provider': WalletProviderEnum.WalletProviderEnumToJSON(value.provider),
        'properties': WalletProperties.WalletPropertiesToJSON(value.properties),
    };
}

exports.WalletFromJSON = WalletFromJSON;
exports.WalletFromJSONTyped = WalletFromJSONTyped;
exports.WalletToJSON = WalletToJSON;
