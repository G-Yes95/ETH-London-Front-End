'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var TurnkeyWalletProperties = require('./TurnkeyWalletProperties.cjs');

/* tslint:disable */
function WalletPropertiesFromJSON(json) {
    return WalletPropertiesFromJSONTyped(json);
}
function WalletPropertiesFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return Object.assign({}, TurnkeyWalletProperties.TurnkeyWalletPropertiesFromJSONTyped(json));
}
function WalletPropertiesToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return Object.assign({}, TurnkeyWalletProperties.TurnkeyWalletPropertiesToJSON(value));
}

exports.WalletPropertiesFromJSON = WalletPropertiesFromJSON;
exports.WalletPropertiesFromJSONTyped = WalletPropertiesFromJSONTyped;
exports.WalletPropertiesToJSON = WalletPropertiesToJSON;
