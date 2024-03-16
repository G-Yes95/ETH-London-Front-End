import { exists } from '../runtime.js';
import { ChainEnumFromJSON, ChainEnumToJSON } from './ChainEnum.js';
import { VisitorFilterableFieldsEnumFromJSON, VisitorFilterableFieldsEnumToJSON } from './VisitorFilterableFieldsEnum.js';

/* tslint:disable */
function VisitorSearchFilterParamsFromJSON(json) {
    return VisitorSearchFilterParamsFromJSONTyped(json);
}
function VisitorSearchFilterParamsFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'filterValue': !exists(json, 'filterValue') ? undefined : json['filterValue'],
        'filterColumn': !exists(json, 'filterColumn') ? undefined : VisitorFilterableFieldsEnumFromJSON(json['filterColumn']),
        'chain': !exists(json, 'chain') ? undefined : ChainEnumFromJSON(json['chain']),
    };
}
function VisitorSearchFilterParamsToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'filterValue': value.filterValue,
        'filterColumn': VisitorFilterableFieldsEnumToJSON(value.filterColumn),
        'chain': ChainEnumToJSON(value.chain),
    };
}

export { VisitorSearchFilterParamsFromJSON, VisitorSearchFilterParamsFromJSONTyped, VisitorSearchFilterParamsToJSON };
