import { TokenWithRawFromJSON, TokenWithRawToJSON } from './TokenWithRaw.js';

/* tslint:disable */
function CreateTokenResponseFromJSON(json) {
    return CreateTokenResponseFromJSONTyped(json);
}
function CreateTokenResponseFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'token': TokenWithRawFromJSON(json['token']),
    };
}
function CreateTokenResponseToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'token': TokenWithRawToJSON(value.token),
    };
}

export { CreateTokenResponseFromJSON, CreateTokenResponseFromJSONTyped, CreateTokenResponseToJSON };
