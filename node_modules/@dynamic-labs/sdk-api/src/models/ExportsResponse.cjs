'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var runtime = require('../runtime.cjs');
var Export = require('./Export.cjs');

/* tslint:disable */
function ExportsResponseFromJSON(json) {
    return ExportsResponseFromJSONTyped(json);
}
function ExportsResponseFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'exports': !runtime.exists(json, 'exports') ? undefined : (json['exports'].map(Export.ExportFromJSON)),
    };
}
function ExportsResponseToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'exports': value.exports === undefined ? undefined : (value.exports.map(Export.ExportToJSON)),
    };
}

exports.ExportsResponseFromJSON = ExportsResponseFromJSON;
exports.ExportsResponseFromJSONTyped = ExportsResponseFromJSONTyped;
exports.ExportsResponseToJSON = ExportsResponseToJSON;
