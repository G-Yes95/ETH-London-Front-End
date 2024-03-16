import { exists } from '../runtime.js';
import { AnalyticsSessionsByDateSessionsFromJSON, AnalyticsSessionsByDateSessionsToJSON } from './AnalyticsSessionsByDateSessions.js';

/* tslint:disable */
function AnalyticsSessionsByDateFromJSON(json) {
    return AnalyticsSessionsByDateFromJSONTyped(json);
}
function AnalyticsSessionsByDateFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'totalUnique': !exists(json, 'totalUnique') ? undefined : json['totalUnique'],
        'sessions': !exists(json, 'sessions') ? undefined : (json['sessions'].map(AnalyticsSessionsByDateSessionsFromJSON)),
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
        'sessions': value.sessions === undefined ? undefined : (value.sessions.map(AnalyticsSessionsByDateSessionsToJSON)),
    };
}

export { AnalyticsSessionsByDateFromJSON, AnalyticsSessionsByDateFromJSONTyped, AnalyticsSessionsByDateToJSON };
