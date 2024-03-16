import { exists } from '../runtime.js';
import { ChainEnumFromJSON, ChainEnumToJSON } from './ChainEnum.js';
import { UserFilterableFieldsEnumFromJSON, UserFilterableFieldsEnumToJSON } from './UserFilterableFieldsEnum.js';

/* tslint:disable */
function UserSearchFilterParamsFromJSON(json) {
    return UserSearchFilterParamsFromJSONTyped(json);
}
function UserSearchFilterParamsFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'filterValue': !exists(json, 'filterValue') ? undefined : json['filterValue'],
        'filterColumn': !exists(json, 'filterColumn') ? undefined : UserFilterableFieldsEnumFromJSON(json['filterColumn']),
        'chain': !exists(json, 'chain') ? undefined : ChainEnumFromJSON(json['chain']),
    };
}
function UserSearchFilterParamsToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'filterValue': value.filterValue,
        'filterColumn': UserFilterableFieldsEnumToJSON(value.filterColumn),
        'chain': ChainEnumToJSON(value.chain),
    };
}

export { UserSearchFilterParamsFromJSON, UserSearchFilterParamsFromJSONTyped, UserSearchFilterParamsToJSON };
