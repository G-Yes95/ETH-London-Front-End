import { exists } from '../runtime.js';
import { AllowlistEntryFromJSON, AllowlistEntryToJSON } from './AllowlistEntry.js';

/* tslint:disable */
function AllowlistEntriesResponseFromJSON(json) {
    return AllowlistEntriesResponseFromJSONTyped(json);
}
function AllowlistEntriesResponseFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'count': !exists(json, 'count') ? undefined : json['count'],
        'entries': !exists(json, 'entries') ? undefined : (json['entries'].map(AllowlistEntryFromJSON)),
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
        'entries': value.entries === undefined ? undefined : (value.entries.map(AllowlistEntryToJSON)),
    };
}

export { AllowlistEntriesResponseFromJSON, AllowlistEntriesResponseFromJSONTyped, AllowlistEntriesResponseToJSON };
