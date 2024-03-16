'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var runtime = require('../runtime.cjs');
var AnalyticsSessionsByDateSessions = require('./AnalyticsSessionsByDateSessions.cjs');

/* tslint:disable */
function AnalyticsSessionsByDateFromJSON(json) {
    return AnalyticsSessionsByDateFromJSONTyped(json);
}
function AnalyticsSessionsByDateFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'totalUnique': !runtime.exists(json, 'totalUnique') ? undefined : json['totalUnique'],
        'sessions': !runtime.exists(json, 'sessions') ? undefined : (json['sessions'].map(AnalyticsSessionsByDateSessions.AnalyticsSessionsByDateSessionsFromJSON)),
    };
}
function AnalyticsSessionsByDateToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'totalUnique': value.totalUnique,
        'sessions': value.sessions === undefined ? undefined : (value.sessions.map(AnalyticsSessionsByDateSessions.AnalyticsSessionsByDateSessionsToJSON)),
    };
}

exports.AnalyticsSessionsByDateFromJSON = AnalyticsSessionsByDateFromJSON;
exports.AnalyticsSessionsByDateFromJSONTyped = AnalyticsSessionsByDateFromJSONTyped;
exports.AnalyticsSessionsByDateToJSON = AnalyticsSessionsByDateToJSON;
