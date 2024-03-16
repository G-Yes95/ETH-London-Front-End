'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var runtime = require('../runtime.cjs');
var ChainEnum = require('./ChainEnum.cjs');
var VisitorFilterableFieldsEnum = require('./VisitorFilterableFieldsEnum.cjs');

/* tslint:disable */
function VisitorSearchFilterParamsFromJSON(json) {
    return VisitorSearchFilterParamsFromJSONTyped(json);
}
function VisitorSearchFilterParamsFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'filterValue': !runtime.exists(json, 'filterValue') ? undefined : json['filterValue'],
        'filterColumn': !runtime.exists(json, 'filterColumn') ? undefined : VisitorFilterableFieldsEnum.VisitorFilterableFieldsEnumFromJSON(json['filterColumn']),
        'chain': !runtime.exists(json, 'chain') ? undefined : ChainEnum.ChainEnumFromJSON(json['chain']),
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
        'filterColumn': VisitorFilterableFieldsEnum.VisitorFilterableFieldsEnumToJSON(value.filterColumn),
        'chain': ChainEnum.ChainEnumToJSON(value.chain),
    };
}

exports.VisitorSearchFilterParamsFromJSON = VisitorSearchFilterParamsFromJSON;
exports.VisitorSearchFilterParamsFromJSONTyped = VisitorSearchFilterParamsFromJSONTyped;
exports.VisitorSearchFilterParamsToJSON = VisitorSearchFilterParamsToJSON;
