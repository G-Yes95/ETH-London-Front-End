'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var runtime = require('../runtime.cjs');

/* tslint:disable */
function AnalyticsSessionsByDateSessionsFromJSON(json) {
    return AnalyticsSessionsByDateSessionsFromJSONTyped(json);
}
function AnalyticsSessionsByDateSessionsFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'count': !runtime.exists(json, 'count') ? undefined : json['count'],
        'date': !runtime.exists(json, 'date') ? undefined : json['date'],
    };
}
function AnalyticsSessionsByDateSessionsToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'count': value.count,
        'date': value.date,
    };
}

exports.AnalyticsSessionsByDateSessionsFromJSON = AnalyticsSessionsByDateSessionsFromJSON;
exports.AnalyticsSessionsByDateSessionsFromJSONTyped = AnalyticsSessionsByDateSessionsFromJSONTyped;
exports.AnalyticsSessionsByDateSessionsToJSON = AnalyticsSessionsByDateSessionsToJSON;
