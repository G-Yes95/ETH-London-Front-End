import { exists } from '../runtime.js';
import { ChainEnumFromJSON, ChainEnumToJSON } from './ChainEnum.js';
import { WalletProviderEnumFromJSON, WalletProviderEnumToJSON } from './WalletProviderEnum.js';

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
        'chain': ChainEnumFromJSON(json['chain']),
        'walletName': json['walletName'],
        'provider': WalletProviderEnumFromJSON(json['provider']),
        'createdAt': (new Date(json['createdAt'])),
        'projectEnvironmentId': !exists(json, 'projectEnvironmentId') ? undefined : json['projectEnvironmentId'],
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
        'chain': ChainEnumToJSON(value.chain),
        'walletName': value.walletName,
        'provider': WalletProviderEnumToJSON(value.provider),
        'createdAt': (value.createdAt.toISOString()),
        'projectEnvironmentId': value.projectEnvironmentId,
    };
}

export { VisitorFromJSON, VisitorFromJSONTyped, VisitorToJSON };
