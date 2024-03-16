'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var runtime = require('../runtime.cjs');
var ChainEnum = require('./ChainEnum.cjs');
var UserFilterableFieldsEnum = require('./UserFilterableFieldsEnum.cjs');

/* tslint:disable */
function UserSearchFilterParamsFromJSON(json) {
    return UserSearchFilterParamsFromJSONTyped(json);
}
function UserSearchFilterParamsFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'filterValue': !runtime.exists(json, 'filterValue') ? undefined : json['filterValue'],
        'filterColumn': !runtime.exists(json, 'filterColumn') ? undefined : UserFilterableFieldsEnum.UserFilterableFieldsEnumFromJSON(json['filterColumn']),
        'chain': !runtime.exists(json, 'chain') ? undefined : ChainEnum.ChainEnumFromJSON(json['chain']),
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
        'filterColumn': UserFilterableFieldsEnum.UserFilterableFieldsEnumToJSON(value.filterColumn),
        'chain': ChainEnum.ChainEnumToJSON(value.chain),
    };
}

exports.UserSearchFilterParamsFromJSON = UserSearchFilterParamsFromJSON;
exports.UserSearchFilterParamsFromJSONTyped = UserSearchFilterParamsFromJSONTyped;
exports.UserSearchFilterParamsToJSON = UserSearchFilterParamsToJSON;
