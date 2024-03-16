import { exists } from '../runtime.js';
import { AnalyticsSessionsByDateFromJSON, AnalyticsSessionsByDateToJSON } from './AnalyticsSessionsByDate.js';

/* tslint:disable */
function AnalyticsVisitResponseFromJSON(json) {
    return AnalyticsVisitResponseFromJSONTyped(json);
}
function AnalyticsVisitResponseFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'summedSessionsCount': !exists(json, 'summedSessionsCount') ? undefined : json['summedSessionsCount'],
        'summedTotalUniqueCount': !exists(json, 'summedTotalUniqueCount') ? undefined : json['summedTotalUniqueCount'],
        'users': !exists(json, 'users') ? undefined : AnalyticsSessionsByDateFromJSON(json['users']),
        'visits': !exists(json, 'visits') ? undefined : AnalyticsSessionsByDateFromJSON(json['visits']),
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
        'users': AnalyticsSessionsByDateToJSON(value.users),
        'visits': AnalyticsSessionsByDateToJSON(value.visits),
    };
}

export { AnalyticsVisitResponseFromJSON, AnalyticsVisitResponseFromJSONTyped, AnalyticsVisitResponseToJSON };
