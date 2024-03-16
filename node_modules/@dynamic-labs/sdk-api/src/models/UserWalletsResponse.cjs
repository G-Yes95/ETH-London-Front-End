'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var Wallet = require('./Wallet.cjs');

/* tslint:disable */
function UserWalletsResponseFromJSON(json) {
    return UserWalletsResponseFromJSONTyped(json);
}
function UserWalletsResponseFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'count': json['count'],
        'wallets': (json['wallets'].map(Wallet.WalletFromJSON)),
    };
}
function UserWalletsResponseToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'count': value.count,
        'wallets': (value.wallets.map(Wallet.WalletToJSON)),
    };
}

exports.UserWalletsResponseFromJSON = UserWalletsResponseFromJSON;
exports.UserWalletsResponseFromJSONTyped = UserWalletsResponseFromJSONTyped;
exports.UserWalletsResponseToJSON = UserWalletsResponseToJSON;
