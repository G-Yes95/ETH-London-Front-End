'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var runtime = require('../runtime.cjs');
var BillingSubscriptionPlanTypeEnum = require('./BillingSubscriptionPlanTypeEnum.cjs');

/* tslint:disable */
function BillingSubscriptionFromJSON(json) {
    return BillingSubscriptionFromJSONTyped(json);
}
function BillingSubscriptionFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'billingPortalUrl': !runtime.exists(json, 'billingPortalUrl') ? undefined : json['billingPortalUrl'],
        'billingPortalAddPaymentMethodUrl': !runtime.exists(json, 'billingPortalAddPaymentMethodUrl') ? undefined : json['billingPortalAddPaymentMethodUrl'],
        'hasPaymentMethod': json['hasPaymentMethod'],
        'planType': BillingSubscriptionPlanTypeEnum.BillingSubscriptionPlanTypeEnumFromJSON(json['planType']),
        'inTrial': json['inTrial'],
        'scope': json['scope'],
        'trialStart': !runtime.exists(json, 'trialStart') ? undefined : (new Date(json['trialStart'])),
        'trialEnd': !runtime.exists(json, 'trialEnd') ? undefined : (new Date(json['trialEnd'])),
        'trialDaysLeft': !runtime.exists(json, 'trialDaysLeft') ? undefined : json['trialDaysLeft'],
    };
}
function BillingSubscriptionToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'billingPortalUrl': value.billingPortalUrl,
        'billingPortalAddPaymentMethodUrl': value.billingPortalAddPaymentMethodUrl,
        'hasPaymentMethod': value.hasPaymentMethod,
        'planType': BillingSubscriptionPlanTypeEnum.BillingSubscriptionPlanTypeEnumToJSON(value.planType),
        'inTrial': value.inTrial,
        'scope': value.scope,
        'trialStart': value.trialStart === undefined ? undefined : (value.trialStart.toISOString()),
        'trialEnd': value.trialEnd === undefined ? undefined : (value.trialEnd.toISOString()),
        'trialDaysLeft': value.trialDaysLeft,
    };
}

exports.BillingSubscriptionFromJSON = BillingSubscriptionFromJSON;
exports.BillingSubscriptionFromJSONTyped = BillingSubscriptionFromJSONTyped;
exports.BillingSubscriptionToJSON = BillingSubscriptionToJSON;
