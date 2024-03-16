import { exists } from '../runtime.js';

/* tslint:disable */
function OrganizationFieldsFromJSON(json) {
    return OrganizationFieldsFromJSONTyped(json);
}
function OrganizationFieldsFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'name': json['name'],
        'description': !exists(json, 'description') ? undefined : json['description'],
        'websiteUrl': !exists(json, 'websiteUrl') ? undefined : json['websiteUrl'],
    };
}
function OrganizationFieldsToJSON(value) {
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
    };
}

export { OrganizationFieldsFromJSON, OrganizationFieldsFromJSONTyped, OrganizationFieldsToJSON };
