'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var runtime = require('../runtime.cjs');
var Organization = require('./Organization.cjs');

/* tslint:disable */
function OrganizationsResponseFromJSON(json) {
    return OrganizationsResponseFromJSONTyped(json);
}
function OrganizationsResponseFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'organizations': !runtime.exists(json, 'organizations') ? undefined : (json['organizations'].map(Organization.OrganizationFromJSON)),
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
        'organizations': value.organizations === undefined ? undefined : (value.organizations.map(Organization.OrganizationToJSON)),
    };
}

exports.OrganizationsResponseFromJSON = OrganizationsResponseFromJSON;
exports.OrganizationsResponseFromJSONTyped = OrganizationsResponseFromJSONTyped;
exports.OrganizationsResponseToJSON = OrganizationsResponseToJSON;
