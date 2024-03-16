import { exists } from '../runtime.js';
import { WhenToImplementEnumFromJSON, WhenToImplementEnumToJSON } from './WhenToImplementEnum.js';

/* tslint:disable */
function OrganizationRequestFromJSON(json) {
    return OrganizationRequestFromJSONTyped(json);
}
function OrganizationRequestFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'name': json['name'],
        'description': !exists(json, 'description') ? undefined : json['description'],
        'websiteUrl': !exists(json, 'websiteUrl') ? undefined : json['websiteUrl'],
        'implementationTimeline': !exists(json, 'implementationTimeline') ? undefined : WhenToImplementEnumFromJSON(json['implementationTimeline']),
    };
}
function OrganizationRequestToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'name': value.name,
        'description': value.description,
        'websiteUrl': value.websiteUrl,
        'implementationTimeline': WhenToImplementEnumToJSON(value.implementationTimeline),
    };
}

export { OrganizationRequestFromJSON, OrganizationRequestFromJSONTyped, OrganizationRequestToJSON };
