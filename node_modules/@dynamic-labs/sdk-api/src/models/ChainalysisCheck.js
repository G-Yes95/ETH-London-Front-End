import { ChainalysisCheckResultEnumFromJSON, ChainalysisCheckResultEnumToJSON } from './ChainalysisCheckResultEnum.js';

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
        'result': ChainalysisCheckResultEnumFromJSON(json['result']),
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
        'result': ChainalysisCheckResultEnumToJSON(value.result),
        'walletPublicKey': value.walletPublicKey,
        'response': value.response,
    };
}

export { ChainalysisCheckFromJSON, ChainalysisCheckFromJSONTyped, ChainalysisCheckToJSON };
