import { exists } from '../runtime.js';
import { VisitorFromJSON, VisitorToJSON } from './Visitor.js';

/* tslint:disable */
function VisitorsResponseFromJSON(json) {
    return VisitorsResponseFromJSONTyped(json);
}
function VisitorsResponseFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'count': !exists(json, 'count') ? undefined : json['count'],
        'visitors': !exists(json, 'visitors') ? undefined : (json['visitors'].map(VisitorFromJSON)),
    };
}
function VisitorsResponseToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'count': value.count,
        'visitors': value.visitors === undefined ? undefined : (value.visitors.map(VisitorToJSON)),
    };
}

export { VisitorsResponseFromJSON, VisitorsResponseFromJSONTyped, VisitorsResponseToJSON };
