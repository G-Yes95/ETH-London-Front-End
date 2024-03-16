import { exists } from '../runtime.js';
import { ChainEnumFromJSON, ChainEnumToJSON } from './ChainEnum.js';
import { WalletPropertiesFromJSON, WalletPropertiesToJSON } from './WalletProperties.js';
import { WalletProviderEnumFromJSON, WalletProviderEnumToJSON } from './WalletProviderEnum.js';

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
        'chain': ChainEnumFromJSON(json['chain']),
        'publicKey': json['publicKey'],
        'provider': WalletProviderEnumFromJSON(json['provider']),
        'properties': !exists(json, 'properties') ? undefined : WalletPropertiesFromJSON(json['properties']),
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
        'chain': ChainEnumToJSON(value.chain),
        'publicKey': value.publicKey,
        'provider': WalletProviderEnumToJSON(value.provider),
        'properties': WalletPropertiesToJSON(value.properties),
    };
}

export { WalletFromJSON, WalletFromJSONTyped, WalletToJSON };
