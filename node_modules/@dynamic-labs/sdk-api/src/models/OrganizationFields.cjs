'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var runtime = require('../runtime.cjs');

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
        'description': !runtime.exists(json, 'description') ? undefined : json['description'],
        'websiteUrl': !runtime.exists(json, 'websiteUrl') ? undefined : json['websiteUrl'],
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

exports.OrganizationFieldsFromJSON = OrganizationFieldsFromJSON;
exports.OrganizationFieldsFromJSONTyped = OrganizationFieldsFromJSONTyped;
exports.OrganizationFieldsToJSON = OrganizationFieldsToJSON;
