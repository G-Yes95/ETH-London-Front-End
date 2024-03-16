import { jsxs, Fragment, jsx } from 'react/jsx-runtime';
import { useInternalDynamicContext } from '../../context/DynamicContext/useInternalDynamicContext.js';
import '@dynamic-labs/utils';
import { isConnectOnly } from '../../utils/hooks/authenticationHooks/helpers/isConnectOnly.js';
import { Typography } from '../Typography/Typography.js';

const TosAndPp = () => {
    const { user, authMode, customPrivacyPolicy, customTermsOfServices, privacyPolicyUrl, termsOfServiceUrl, } = useInternalDynamicContext();
    const connectionType = isConnectOnly(user, authMode)
        ? 'connecting'
        : 'logging in';
    const renderTermsOfServices = () => {
        if (!termsOfServiceUrl) {
            return;
        }
        return (jsx("a", { className: 'tos-and-pp__link', href: termsOfServiceUrl, target: '_blank', rel: 'noreferrer', children: "Terms of Service" }));
    };
    const renderPrivacyPolicy = () => {
        if (!privacyPolicyUrl) {
            return;
        }
        return (jsxs(Fragment, { children: [termsOfServiceUrl && jsx(Fragment, { children: "\u00A0&\u00A0" }), jsx("a", { className: 'tos-and-pp__link', href: privacyPolicyUrl, target: '_blank', rel: 'noreferrer', children: "Privacy Policy" })] }));
    };
    return (jsxs(Fragment, { children: [(privacyPolicyUrl || termsOfServiceUrl) && (jsxs(Typography, { variant: 'body_small', weight: 'regular', className: 'tos-and-pp__text', children: ["By ", connectionType, ", you agree to", jsx("br", {}), "our\u00A0", renderTermsOfServices(), renderPrivacyPolicy(), "."] })), customTermsOfServices, customPrivacyPolicy] }));
};

export { TosAndPp };
