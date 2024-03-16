'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var runtime = require('../runtime.cjs');
var ChainEnum = require('./ChainEnum.cjs');
var WalletProviderEnum = require('./WalletProviderEnum.cjs');

/* tslint:disable */
function VisitorFromJSON(json) {
    return VisitorFromJSONTyped(json);
}
function VisitorFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'id': json['id'],
        'address': json['address'],
        'chain': ChainEnum.ChainEnumFromJSON(json['chain']),
        'walletName': json['walletName'],
        'provider': WalletProviderEnum.WalletProviderEnumFromJSON(json['provider']),
        'createdAt': (new Date(json['createdAt'])),
        'projectEnvironmentId': !runtime.exists(json, 'projectEnvironmentId') ? undefined : json['projectEnvironmentId'],
    };
}
function VisitorToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'id': value.id,
        'address': value.address,
        'chain': ChainEnum.ChainEnumToJSON(value.chain),
        'walletName': value.walletName,
        'provider': WalletProviderEnum.WalletProviderEnumToJSON(value.provider),
        'createdAt': (value.createdAt.toISOString()),
        'projectEnvironmentId': value.projectEnvironmentId,
    };
}

exports.VisitorFromJSON = VisitorFromJSON;
exports.VisitorFromJSONTyped = VisitorFromJSONTyped;
exports.VisitorToJSON = VisitorToJSON;
