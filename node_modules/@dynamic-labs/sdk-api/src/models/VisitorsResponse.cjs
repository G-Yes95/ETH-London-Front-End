'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var runtime = require('../runtime.cjs');
var Visitor = require('./Visitor.cjs');

/* tslint:disable */
function VisitorsResponseFromJSON(json) {
    return VisitorsResponseFromJSONTyped(json);
}
function VisitorsResponseFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'count': !runtime.exists(json, 'count') ? undefined : json['count'],
        'visitors': !runtime.exists(json, 'visitors') ? undefined : (json['visitors'].map(Visitor.VisitorFromJSON)),
    };
}
function VisitorsResponseToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'count': value.count,
        'visitors': value.visitors === undefined ? undefined : (value.visitors.map(Visitor.VisitorToJSON)),
    };
}

exports.VisitorsResponseFromJSON = VisitorsResponseFromJSON;
exports.VisitorsResponseFromJSONTyped = VisitorsResponseFromJSONTyped;
exports.VisitorsResponseToJSON = VisitorsResponseToJSON;
