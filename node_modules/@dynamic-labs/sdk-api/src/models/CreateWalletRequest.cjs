'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var ChainEnum = require('./ChainEnum.cjs');
var WalletProviderEnum = require('./WalletProviderEnum.cjs');

/* tslint:disable */
function CreateWalletRequestFromJSON(json) {
    return CreateWalletRequestFromJSONTyped(json);
}
function CreateWalletRequestFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'publicWalletAddress': json['publicWalletAddress'],
        'chain': ChainEnum.ChainEnumFromJSON(json['chain']),
        'walletName': json['walletName'],
        'walletProvider': WalletProviderEnum.WalletProviderEnumFromJSON(json['walletProvider']),
    };
}
function CreateWalletRequestToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'publicWalletAddress': value.publicWalletAddress,
        'chain': ChainEnum.ChainEnumToJSON(value.chain),
        'walletName': value.walletName,
        'walletProvider': WalletProviderEnum.WalletProviderEnumToJSON(value.walletProvider),
    };
}

exports.CreateWalletRequestFromJSON = CreateWalletRequestFromJSON;
exports.CreateWalletRequestFromJSONTyped = CreateWalletRequestFromJSONTyped;
exports.CreateWalletRequestToJSON = CreateWalletRequestToJSON;
