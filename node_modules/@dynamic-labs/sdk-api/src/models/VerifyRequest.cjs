'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var runtime = require('../runtime.cjs');
var ChainEnum = require('./ChainEnum.cjs');
var OauthProviderRequest = require('./OauthProviderRequest.cjs');
var WalletProviderEnum = require('./WalletProviderEnum.cjs');

/* tslint:disable */
function VerifyRequestFromJSON(json) {
    return VerifyRequestFromJSONTyped(json);
}
function VerifyRequestFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'oauth': !runtime.exists(json, 'oauth') ? undefined : OauthProviderRequest.OauthProviderRequestFromJSON(json['oauth']),
        'signedMessage': json['signedMessage'],
        'messageToSign': json['messageToSign'],
        'publicWalletAddress': json['publicWalletAddress'],
        'chain': ChainEnum.ChainEnumFromJSON(json['chain']),
        'walletName': json['walletName'],
        'walletProvider': WalletProviderEnum.WalletProviderEnumFromJSON(json['walletProvider']),
        'skipEmptyAccountCheck': !runtime.exists(json, 'skipEmptyAccountCheck') ? undefined : json['skipEmptyAccountCheck'],
        'captchaToken': !runtime.exists(json, 'captchaToken') ? undefined : json['captchaToken'],
        'network': !runtime.exists(json, 'network') ? undefined : json['network'],
    };
}
function VerifyRequestToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'oauth': OauthProviderRequest.OauthProviderRequestToJSON(value.oauth),
        'signedMessage': value.signedMessage,
        'messageToSign': value.messageToSign,
        'publicWalletAddress': value.publicWalletAddress,
        'chain': ChainEnum.ChainEnumToJSON(value.chain),
        'walletName': value.walletName,
        'walletProvider': WalletProviderEnum.WalletProviderEnumToJSON(value.walletProvider),
        'skipEmptyAccountCheck': value.skipEmptyAccountCheck,
        'captchaToken': value.captchaToken,
        'network': value.network,
    };
}

exports.VerifyRequestFromJSON = VerifyRequestFromJSON;
exports.VerifyRequestFromJSONTyped = VerifyRequestFromJSONTyped;
exports.VerifyRequestToJSON = VerifyRequestToJSON;
