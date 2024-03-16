import { exists } from '../runtime.js';
import { OrganizationResponseOrganizationFromJSON, OrganizationResponseOrganizationToJSON } from './OrganizationResponseOrganization.js';

/* tslint:disable */
function OrganizationResponseFromJSON(json) {
    return OrganizationResponseFromJSONTyped(json);
}
function OrganizationResponseFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'organization': !exists(json, 'organization') ? undefined : OrganizationResponseOrganizationFromJSON(json['organization']),
    };
}
function OrganizationResponseToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'organization': OrganizationResponseOrganizationToJSON(value.organization),
    };
}

export { OrganizationResponseFromJSON, OrganizationResponseFromJSONTyped, OrganizationResponseToJSON };
