import { TokenAddressFromJSON, TokenAddressToJSON } from './TokenAddress.js';

/* tslint:disable */
function ChainTokenFromJSON(json) {
    return ChainTokenFromJSONTyped(json);
}
function ChainTokenFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'name': json['name'],
        'symbol': json['symbol'],
        'tokenAddresses': (json['tokenAddresses'].map(TokenAddressFromJSON)),
    };
}
function ChainTokenToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'name': value.name,
        'symbol': value.symbol,
        'tokenAddresses': (value.tokenAddresses.map(TokenAddressToJSON)),
    };
}

export { ChainTokenFromJSON, ChainTokenFromJSONTyped, ChainTokenToJSON };
