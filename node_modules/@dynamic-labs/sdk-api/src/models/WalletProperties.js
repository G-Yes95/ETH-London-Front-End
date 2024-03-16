import { TurnkeyWalletPropertiesFromJSONTyped, TurnkeyWalletPropertiesToJSON } from './TurnkeyWalletProperties.js';

/* tslint:disable */
function WalletPropertiesFromJSON(json) {
    return WalletPropertiesFromJSONTyped(json);
}
function WalletPropertiesFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return Object.assign({}, TurnkeyWalletPropertiesFromJSONTyped(json));
}
function WalletPropertiesToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return Object.assign({}, TurnkeyWalletPropertiesToJSON(value));
}

export { WalletPropertiesFromJSON, WalletPropertiesFromJSONTyped, WalletPropertiesToJSON };
