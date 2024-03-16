'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var runtime = require('../runtime.cjs');
var AnalyticsSessionsByDate = require('./AnalyticsSessionsByDate.cjs');

/* tslint:disable */
function AnalyticsVisitResponseFromJSON(json) {
    return AnalyticsVisitResponseFromJSONTyped(json);
}
function AnalyticsVisitResponseFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'summedSessionsCount': !runtime.exists(json, 'summedSessionsCount') ? undefined : json['summedSessionsCount'],
        'summedTotalUniqueCount': !runtime.exists(json, 'summedTotalUniqueCount') ? undefined : json['summedTotalUniqueCount'],
        'users': !runtime.exists(json, 'users') ? undefined : AnalyticsSessionsByDate.AnalyticsSessionsByDateFromJSON(json['users']),
        'visits': !runtime.exists(json, 'visits') ? undefined : AnalyticsSessionsByDate.AnalyticsSessionsByDateFromJSON(json['visits']),
    };
}
function AnalyticsVisitResponseToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'summedSessionsCount': value.summedSessionsCount,
        'summedTotalUniqueCount': value.summedTotalUniqueCount,
        'users': AnalyticsSessionsByDate.AnalyticsSessionsByDateToJSON(value.users),
        'visits': AnalyticsSessionsByDate.AnalyticsSessionsByDateToJSON(value.visits),
    };
}

exports.AnalyticsVisitResponseFromJSON = AnalyticsVisitResponseFromJSON;
exports.AnalyticsVisitResponseFromJSONTyped = AnalyticsVisitResponseFromJSONTyped;
exports.AnalyticsVisitResponseToJSON = AnalyticsVisitResponseToJSON;
