'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var runtime = require('../runtime.cjs');
var OrganizationResponseOrganization = require('./OrganizationResponseOrganization.cjs');

/* tslint:disable */
function OrganizationResponseFromJSON(json) {
    return OrganizationResponseFromJSONTyped(json);
}
function OrganizationResponseFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'organization': !runtime.exists(json, 'organization') ? undefined : OrganizationResponseOrganization.OrganizationResponseOrganizationFromJSON(json['organization']),
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
        'organization': OrganizationResponseOrganization.OrganizationResponseOrganizationToJSON(value.organization),
    };
}

exports.OrganizationResponseFromJSON = OrganizationResponseFromJSON;
exports.OrganizationResponseFromJSONTyped = OrganizationResponseFromJSONTyped;
exports.OrganizationResponseToJSON = OrganizationResponseToJSON;
