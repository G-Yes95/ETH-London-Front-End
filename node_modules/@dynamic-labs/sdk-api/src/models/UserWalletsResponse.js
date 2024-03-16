import { WalletFromJSON, WalletToJSON } from './Wallet.js';

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
        'wallets': (json['wallets'].map(WalletFromJSON)),
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
        'wallets': (value.wallets.map(WalletToJSON)),
    };
}

export { UserWalletsResponseFromJSON, UserWalletsResponseFromJSONTyped, UserWalletsResponseToJSON };
