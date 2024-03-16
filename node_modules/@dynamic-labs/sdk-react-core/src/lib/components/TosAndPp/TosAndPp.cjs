'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var jsxRuntime = require('react/jsx-runtime');
var useInternalDynamicContext = require('../../context/DynamicContext/useInternalDynamicContext.cjs');
require('@dynamic-labs/utils');
var isConnectOnly = require('../../utils/hooks/authenticationHooks/helpers/isConnectOnly.cjs');
var Typography = require('../Typography/Typography.cjs');

const TosAndPp = () => {
    const { user, authMode, customPrivacyPolicy, customTermsOfServices, privacyPolicyUrl, termsOfServiceUrl, } = useInternalDynamicContext.useInternalDynamicContext();
    const connectionType = isConnectOnly.isConnectOnly(user, authMode)
        ? 'connecting'
        : 'logging in';
    const renderTermsOfServices = () => {
        if (!termsOfServiceUrl) {
            return;
        }
        return (jsxRuntime.jsx("a", { className: 'tos-and-pp__link', href: termsOfServiceUrl, target: '_blank', rel: 'noreferrer', children: "Terms of Service" }));
    };
    const renderPrivacyPolicy = () => {
        if (!privacyPolicyUrl) {
            return;
        }
        return (jsxRuntime.jsxs(jsxRuntime.Fragment, { children: [termsOfServiceUrl && jsxRuntime.jsx(jsxRuntime.Fragment, { children: "\u00A0&\u00A0" }), jsxRuntime.jsx("a", { className: 'tos-and-pp__link', href: privacyPolicyUrl, target: '_blank', rel: 'noreferrer', children: "Privacy Policy" })] }));
    };
    return (jsxRuntime.jsxs(jsxRuntime.Fragment, { children: [(privacyPolicyUrl || termsOfServiceUrl) && (jsxRuntime.jsxs(Typography.Typography, { variant: 'body_small', weight: 'regular', className: 'tos-and-pp__text', children: ["By ", connectionType, ", you agree to", jsxRuntime.jsx("br", {}), "our\u00A0", renderTermsOfServices(), renderPrivacyPolicy(), "."] })), customTermsOfServices, customPrivacyPolicy] }));
};

exports.TosAndPp = TosAndPp;
