import { exists } from '../runtime.js';
import { OrganizationFromJSON, OrganizationToJSON } from './Organization.js';

/* tslint:disable */
function OrganizationsResponseFromJSON(json) {
    return OrganizationsResponseFromJSONTyped(json);
}
function OrganizationsResponseFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'organizations': !exists(json, 'organizations') ? undefined : (json['organizations'].map(OrganizationFromJSON)),
    };
}
function OrganizationsResponseToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'organizations': value.organizations === undefined ? undefined : (value.organizations.map(OrganizationToJSON)),
    };
}

export { OrganizationsResponseFromJSON, OrganizationsResponseFromJSONTyped, OrganizationsResponseToJSON };
