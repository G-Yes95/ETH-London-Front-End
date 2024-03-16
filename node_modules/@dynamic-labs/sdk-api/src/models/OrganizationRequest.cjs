'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var runtime = require('../runtime.cjs');
var WhenToImplementEnum = require('./WhenToImplementEnum.cjs');

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
        'description': !runtime.exists(json, 'description') ? undefined : json['description'],
        'websiteUrl': !runtime.exists(json, 'websiteUrl') ? undefined : json['websiteUrl'],
        'implementationTimeline': !runtime.exists(json, 'implementationTimeline') ? undefined : WhenToImplementEnum.WhenToImplementEnumFromJSON(json['implementationTimeline']),
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
        'implementationTimeline': WhenToImplementEnum.WhenToImplementEnumToJSON(value.implementationTimeline),
    };
}

exports.OrganizationRequestFromJSON = OrganizationRequestFromJSON;
exports.OrganizationRequestFromJSONTyped = OrganizationRequestFromJSONTyped;
exports.OrganizationRequestToJSON = OrganizationRequestToJSON;
