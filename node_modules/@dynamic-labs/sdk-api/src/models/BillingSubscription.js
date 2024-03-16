import { exists } from '../runtime.js';
import { BillingSubscriptionPlanTypeEnumFromJSON, BillingSubscriptionPlanTypeEnumToJSON } from './BillingSubscriptionPlanTypeEnum.js';

/* tslint:disable */
function BillingSubscriptionFromJSON(json) {
    return BillingSubscriptionFromJSONTyped(json);
}
function BillingSubscriptionFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'billingPortalUrl': !exists(json, 'billingPortalUrl') ? undefined : json['billingPortalUrl'],
        'billingPortalAddPaymentMethodUrl': !exists(json, 'billingPortalAddPaymentMethodUrl') ? undefined : json['billingPortalAddPaymentMethodUrl'],
        'hasPaymentMethod': json['hasPaymentMethod'],
        'planType': BillingSubscriptionPlanTypeEnumFromJSON(json['planType']),
        'inTrial': json['inTrial'],
        'scope': json['scope'],
        'trialStart': !exists(json, 'trialStart') ? undefined : (new Date(json['trialStart'])),
        'trialEnd': !exists(json, 'trialEnd') ? undefined : (new Date(json['trialEnd'])),
        'trialDaysLeft': !exists(json, 'trialDaysLeft') ? undefined : json['trialDaysLeft'],
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
        'planType': BillingSubscriptionPlanTypeEnumToJSON(value.planType),
        'inTrial': value.inTrial,
        'scope': value.scope,
        'trialStart': value.trialStart === undefined ? undefined : (value.trialStart.toISOString()),
        'trialEnd': value.trialEnd === undefined ? undefined : (value.trialEnd.toISOString()),
        'trialDaysLeft': value.trialDaysLeft,
    };
}

export { BillingSubscriptionFromJSON, BillingSubscriptionFromJSONTyped, BillingSubscriptionToJSON };
