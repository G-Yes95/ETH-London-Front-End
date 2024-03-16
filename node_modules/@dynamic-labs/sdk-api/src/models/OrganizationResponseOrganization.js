import { exists } from '../runtime.js';

/* tslint:disable */
function OrganizationResponseOrganizationFromJSON(json) {
    return OrganizationResponseOrganizationFromJSONTyped(json);
}
function OrganizationResponseOrganizationFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'id': json['id'],
        'name': json['name'],
        'description': !exists(json, 'description') ? undefined : json['description'],
        'websiteUrl': !exists(json, 'websiteUrl') ? undefined : json['websiteUrl'],
    };
}
function OrganizationResponseOrganizationToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'id': value.id,
        'name': value.name,
        'description': value.description,
        'websiteUrl': value.websiteUrl,
    };
}

export { OrganizationResponseOrganizationFromJSON, OrganizationResponseOrganizationFromJSONTyped, OrganizationResponseOrganizationToJSON };
