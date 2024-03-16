import { exists } from '../runtime.js';

/* tslint:disable */
function AnalyticsSessionsByDateSessionsFromJSON(json) {
    return AnalyticsSessionsByDateSessionsFromJSONTyped(json);
}
function AnalyticsSessionsByDateSessionsFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'count': !exists(json, 'count') ? undefined : json['count'],
        'date': !exists(json, 'date') ? undefined : json['date'],
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

export { AnalyticsSessionsByDateSessionsFromJSON, AnalyticsSessionsByDateSessionsFromJSONTyped, AnalyticsSessionsByDateSessionsToJSON };
