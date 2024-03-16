import { ChainEnumFromJSON, ChainEnumToJSON } from './ChainEnum.js';
import { WalletProviderEnumFromJSON, WalletProviderEnumToJSON } from './WalletProviderEnum.js';

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
        'chain': ChainEnumFromJSON(json['chain']),
        'walletName': json['walletName'],
        'walletProvider': WalletProviderEnumFromJSON(json['walletProvider']),
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
        'chain': ChainEnumToJSON(value.chain),
        'walletName': value.walletName,
        'walletProvider': WalletProviderEnumToJSON(value.walletProvider),
    };
}

export { CreateWalletRequestFromJSON, CreateWalletRequestFromJSONTyped, CreateWalletRequestToJSON };
