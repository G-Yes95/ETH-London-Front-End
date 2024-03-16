'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var runtime = require('../runtime.cjs');
var ChainEnum = require('./ChainEnum.cjs');
var ChainalysisCheck = require('./ChainalysisCheck.cjs');
var OAuthAccount = require('./OAuthAccount.cjs');
var Session = require('./Session.cjs');
var Wallet = require('./Wallet.cjs');

/* tslint:disable */
function UserAllOfFromJSON(json) {
    return UserAllOfFromJSONTyped(json);
}
function UserAllOfFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'walletPublicKey': !runtime.exists(json, 'walletPublicKey') ? undefined : json['walletPublicKey'],
        'wallet': !runtime.exists(json, 'wallet') ? undefined : json['wallet'],
        'chain': !runtime.exists(json, 'chain') ? undefined : ChainEnum.ChainEnumFromJSON(json['chain']),
        'createdAt': !runtime.exists(json, 'createdAt') ? undefined : (new Date(json['createdAt'])),
        'updatedAt': !runtime.exists(json, 'updatedAt') ? undefined : (new Date(json['updatedAt'])),
        'sessions': !runtime.exists(json, 'sessions') ? undefined : (json['sessions'].map(Session.SessionFromJSON)),
        'wallets': !runtime.exists(json, 'wallets') ? undefined : (json['wallets'].map(Wallet.WalletFromJSON)),
        'chainalysisChecks': !runtime.exists(json, 'chainalysisChecks') ? undefined : (json['chainalysisChecks'].map(ChainalysisCheck.ChainalysisCheckFromJSON)),
        'oauthAccounts': !runtime.exists(json, 'oauthAccounts') ? undefined : (json['oauthAccounts'].map(OAuthAccount.OAuthAccountFromJSON)),
    };
}
function UserAllOfToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'walletPublicKey': value.walletPublicKey,
        'wallet': value.wallet,
        'chain': ChainEnum.ChainEnumToJSON(value.chain),
        'createdAt': value.createdAt === undefined ? undefined : (value.createdAt.toISOString()),
        'updatedAt': value.updatedAt === undefined ? undefined : (value.updatedAt.toISOString()),
        'sessions': value.sessions === undefined ? undefined : (value.sessions.map(Session.SessionToJSON)),
        'wallets': value.wallets === undefined ? undefined : (value.wallets.map(Wallet.WalletToJSON)),
        'chainalysisChecks': value.chainalysisChecks === undefined ? undefined : (value.chainalysisChecks.map(ChainalysisCheck.ChainalysisCheckToJSON)),
        'oauthAccounts': value.oauthAccounts === undefined ? undefined : (value.oauthAccounts.map(OAuthAccount.OAuthAccountToJSON)),
    };
}

exports.UserAllOfFromJSON = UserAllOfFromJSON;
exports.UserAllOfFromJSONTyped = UserAllOfFromJSONTyped;
exports.UserAllOfToJSON = UserAllOfToJSON;
