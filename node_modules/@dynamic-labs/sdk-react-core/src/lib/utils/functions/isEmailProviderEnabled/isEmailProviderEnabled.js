import { ProviderEnum } from '@dynamic-labs/sdk-api';
import { isProviderEnabled } from '../isProviderEnabled/isProviderEnabled.js';

const isEmailProviderEnabled = (providers) => 
// For v0.19 we will support emailOnly and Dynamic as email providers
// For v0.20/v1 we need to remove emailOnly and leave Dynamic as the only one email provider
// Ticket: https://linear.app/dynamic-labs/issue/GVTY-213/remove-emailonly-as-a-provider-from-sdk
// (Blocto and Magic stay as they are)
isProviderEnabled(providers, ProviderEnum.EmailOnly) ||
    isProviderEnabled(providers, ProviderEnum.Dynamic) ||
    isProviderEnabled(providers, ProviderEnum.Blocto) ||
    isProviderEnabled(providers, ProviderEnum.MagicLink);

export { isEmailProviderEnabled };
