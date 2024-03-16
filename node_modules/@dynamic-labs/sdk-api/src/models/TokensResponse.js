import { exists } from '../runtime.js';
import { TokenFromJSON, TokenToJSON } from './Token.js';

/* tslint:disable */
function TokensResponseFromJSON(json) {
    return TokensResponseFromJSONTyped(json);
}
function TokensResponseFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'tokens': !exists(json, 'tokens') ? undefined : (json['tokens'].map(TokenFromJSON)),
    };
}
function TokensResponseToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'tokens': value.tokens === undefined ? undefined : (value.tokens.map(TokenToJSON)),
    };
}

export { TokensResponseFromJSON, TokensResponseFromJSONTyped, TokensResponseToJSON };
