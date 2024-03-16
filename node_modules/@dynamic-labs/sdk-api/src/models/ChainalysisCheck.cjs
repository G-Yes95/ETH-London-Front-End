'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var ChainalysisCheckResultEnum = require('./ChainalysisCheckResultEnum.cjs');

/* tslint:disable */
function ChainalysisCheckFromJSON(json) {
    return ChainalysisCheckFromJSONTyped(json);
}
function ChainalysisCheckFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'id': json['id'],
        'createdAt': (new Date(json['createdAt'])),
        'result': ChainalysisCheckResultEnum.ChainalysisCheckResultEnumFromJSON(json['result']),
        'walletPublicKey': json['walletPublicKey'],
        'response': json['response'],
    };
}
function ChainalysisCheckToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'id': value.id,
        'createdAt': (value.createdAt.toISOString()),
        'result': ChainalysisCheckResultEnum.ChainalysisCheckResultEnumToJSON(value.result),
        'walletPublicKey': value.walletPublicKey,
        'response': value.response,
    };
}

exports.ChainalysisCheckFromJSON = ChainalysisCheckFromJSON;
exports.ChainalysisCheckFromJSONTyped = ChainalysisCheckFromJSONTyped;
exports.ChainalysisCheckToJSON = ChainalysisCheckToJSON;
