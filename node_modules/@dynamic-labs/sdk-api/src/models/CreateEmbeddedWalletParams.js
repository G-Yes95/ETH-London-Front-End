import { exists } from '../runtime.js';
import { ChainEnumFromJSON, ChainEnumToJSON } from './ChainEnum.js';
import { CreateEmbeddedWalletSpecificOptsFromJSON, CreateEmbeddedWalletSpecificOptsToJSON } from './CreateEmbeddedWalletSpecificOpts.js';
import { EmbeddedWalletProviderEnumFromJSON, EmbeddedWalletProviderEnumToJSON } from './EmbeddedWalletProviderEnum.js';

/* tslint:disable */
function CreateEmbeddedWalletParamsFromJSON(json) {
    return CreateEmbeddedWalletParamsFromJSONTyped(json);
}
function CreateEmbeddedWalletParamsFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'chain': ChainEnumFromJSON(json['chain']),
        'embeddedWalletProvider': EmbeddedWalletProviderEnumFromJSON(json['embeddedWalletProvider']),
        'embeddedWalletSpecificOpts': !exists(json, 'embeddedWalletSpecificOpts') ? undefined : CreateEmbeddedWalletSpecificOptsFromJSON(json['embeddedWalletSpecificOpts']),
        'isAuthenticatorAttached': !exists(json, 'isAuthenticatorAttached') ? undefined : json['isAuthenticatorAttached'],
    };
}
function CreateEmbeddedWalletParamsToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'chain': ChainEnumToJSON(value.chain),
        'embeddedWalletProvider': EmbeddedWalletProviderEnumToJSON(value.embeddedWalletProvider),
        'embeddedWalletSpecificOpts': CreateEmbeddedWalletSpecificOptsToJSON(value.embeddedWalletSpecificOpts),
        'isAuthenticatorAttached': value.isAuthenticatorAttached,
    };
}

export { CreateEmbeddedWalletParamsFromJSON, CreateEmbeddedWalletParamsFromJSONTyped, CreateEmbeddedWalletParamsToJSON };
