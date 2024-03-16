import { exists } from '../runtime.js';
import { ChainEnumFromJSON, ChainEnumToJSON } from './ChainEnum.js';
import { ChainalysisCheckFromJSON, ChainalysisCheckToJSON } from './ChainalysisCheck.js';
import { OAuthAccountFromJSON, OAuthAccountToJSON } from './OAuthAccount.js';
import { SessionFromJSON, SessionToJSON } from './Session.js';
import { WalletFromJSON, WalletToJSON } from './Wallet.js';

/* tslint:disable */
function UserAllOfFromJSON(json) {
    return UserAllOfFromJSONTyped(json);
}
function UserAllOfFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'walletPublicKey': !exists(json, 'walletPublicKey') ? undefined : json['walletPublicKey'],
        'wallet': !exists(json, 'wallet') ? undefined : json['wallet'],
        'chain': !exists(json, 'chain') ? undefined : ChainEnumFromJSON(json['chain']),
        'createdAt': !exists(json, 'createdAt') ? undefined : (new Date(json['createdAt'])),
        'updatedAt': !exists(json, 'updatedAt') ? undefined : (new Date(json['updatedAt'])),
        'sessions': !exists(json, 'sessions') ? undefined : (json['sessions'].map(SessionFromJSON)),
        'wallets': !exists(json, 'wallets') ? undefined : (json['wallets'].map(WalletFromJSON)),
        'chainalysisChecks': !exists(json, 'chainalysisChecks') ? undefined : (json['chainalysisChecks'].map(ChainalysisCheckFromJSON)),
        'oauthAccounts': !exists(json, 'oauthAccounts') ? undefined : (json['oauthAccounts'].map(OAuthAccountFromJSON)),
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
        'chain': ChainEnumToJSON(value.chain),
        'createdAt': value.createdAt === undefined ? undefined : (value.createdAt.toISOString()),
        'updatedAt': value.updatedAt === undefined ? undefined : (value.updatedAt.toISOString()),
        'sessions': value.sessions === undefined ? undefined : (value.sessions.map(SessionToJSON)),
        'wallets': value.wallets === undefined ? undefined : (value.wallets.map(WalletToJSON)),
        'chainalysisChecks': value.chainalysisChecks === undefined ? undefined : (value.chainalysisChecks.map(ChainalysisCheckToJSON)),
        'oauthAccounts': value.oauthAccounts === undefined ? undefined : (value.oauthAccounts.map(OAuthAccountToJSON)),
    };
}

export { UserAllOfFromJSON, UserAllOfFromJSONTyped, UserAllOfToJSON };
