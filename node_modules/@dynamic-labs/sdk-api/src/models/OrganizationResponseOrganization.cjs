'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var runtime = require('../runtime.cjs');

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
        'description': !runtime.exists(json, 'description') ? undefined : json['description'],
        'websiteUrl': !runtime.exists(json, 'websiteUrl') ? undefined : json['websiteUrl'],
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

exports.OrganizationResponseOrganizationFromJSON = OrganizationResponseOrganizationFromJSON;
exports.OrganizationResponseOrganizationFromJSONTyped = OrganizationResponseOrganizationFromJSONTyped;
exports.OrganizationResponseOrganizationToJSON = OrganizationResponseOrganizationToJSON;
