'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var runtime = require('../runtime.cjs');
var AllowlistEntry = require('./AllowlistEntry.cjs');

/* tslint:disable */
function AllowlistEntriesResponseFromJSON(json) {
    return AllowlistEntriesResponseFromJSONTyped(json);
}
function AllowlistEntriesResponseFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'count': !runtime.exists(json, 'count') ? undefined : json['count'],
        'entries': !runtime.exists(json, 'entries') ? undefined : (json['entries'].map(AllowlistEntry.AllowlistEntryFromJSON)),
    };
}
function AllowlistEntriesResponseToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'count': value.count,
        'entries': value.entries === undefined ? undefined : (value.entries.map(AllowlistEntry.AllowlistEntryToJSON)),
    };
}

exports.AllowlistEntriesResponseFromJSON = AllowlistEntriesResponseFromJSON;
exports.AllowlistEntriesResponseFromJSONTyped = AllowlistEntriesResponseFromJSONTyped;
exports.AllowlistEntriesResponseToJSON = AllowlistEntriesResponseToJSON;
