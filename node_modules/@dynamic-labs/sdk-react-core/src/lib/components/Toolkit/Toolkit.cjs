'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var jsxRuntime = require('react/jsx-runtime');
var React = require('react');
var Typography = require('../Typography/Typography.cjs');
require('@dynamic-labs/sdk-api');
require('../../shared/logger.cjs');
require('@dynamic-labs/iconic');
require('@dynamic-labs/wallet-connector-core');
require('../../context/ViewContext/ViewContext.cjs');
require('@dynamic-labs/wallet-book');
require('../../utils/constants/colors.cjs');
require('../../shared/utils/classes/storage/localStorage.cjs');
require('viem');
require('@dynamic-labs/utils');
var index = require('../../shared/consts/index.cjs');
var useInternalDynamicContext = require('../../context/DynamicContext/useInternalDynamicContext.cjs');
require('@dynamic-labs/multi-wallet');
var isEmailProviderEnabled = require('../../utils/functions/isEmailProviderEnabled/isEmailProviderEnabled.cjs');
var ShadowDOM = require('../ShadowDOM/ShadowDOM.cjs');
var ThemeSwitch = require('./components/ThemeSwitch.cjs');
var PrimaryColorInput = require('./components/PrimaryColorInput.cjs');
var AuthModeSwitch = require('./components/AuthModeSwitch.cjs');
var LoginWithEmailSwitch = require('./components/LoginWithEmailSwitch.cjs');
var LoginWithEmailViewDisplayPriorityOrderSwitch = require('./components/LoginWithEmailViewDisplayPriorityOrderSwitch.cjs');
var TemplateSelect = require('./components/TemplateSelect.cjs');
var MultiWalletSwitch = require('./components/MultiWalletSwitch.cjs');

const Toolkit = () => {
    const { projectSettings, user, showAuthFlow, showDynamicUserProfile, toolkitEnabled, authMode, setAuthMode, multiWallet, setMultiWallet, } = useInternalDynamicContext.useInternalDynamicContext();
    const isToolkitVisible = React.useMemo(() => {
        if (!toolkitEnabled)
            return false;
        return showDynamicUserProfile || showAuthFlow;
    }, [showAuthFlow, showDynamicUserProfile, toolkitEnabled]);
    if (!isToolkitVisible)
        return null;
    return (jsxRuntime.jsx(ShadowDOM.ShadowDOM, { dataTestId: 'toolkit-shadowdom', className: 'toolkit-shadowdom', zIndex: index.toolkitZIndex, children: jsxRuntime.jsxs("div", { className: 'toolkit__container', children: [jsxRuntime.jsxs("div", { className: 'toolkit__switcher', children: [jsxRuntime.jsx(Typography.Typography, { className: 'switcher__copy', as: 'h2', variant: 'body_normal', children: "Theme" }), jsxRuntime.jsx(ThemeSwitch.ThemeSwitch, {})] }), jsxRuntime.jsxs("div", { className: 'toolkit__switcher', children: [jsxRuntime.jsx(Typography.Typography, { className: 'switcher__copy', as: 'h2', variant: 'body_normal', children: "Template" }), jsxRuntime.jsx(TemplateSelect.TemplateSelect, {})] }), jsxRuntime.jsxs("div", { className: 'toolkit__switcher', children: [jsxRuntime.jsx(Typography.Typography, { className: 'switcher__copy', as: 'h2', variant: 'body_normal', children: "Primary Color" }), jsxRuntime.jsx(PrimaryColorInput.PrimaryColorInput, {})] }), !user && (jsxRuntime.jsxs(jsxRuntime.Fragment, { children: [jsxRuntime.jsxs("div", { className: 'toolkit__switcher', children: [jsxRuntime.jsx(Typography.Typography, { className: 'switcher__copy', as: 'h2', variant: 'body_normal', children: "Auth mode" }), jsxRuntime.jsx(AuthModeSwitch.AuthModeSwitch, { authMode: authMode, setAuthMode: setAuthMode })] }), jsxRuntime.jsxs("div", { className: 'toolkit__switcher', children: [jsxRuntime.jsx(Typography.Typography, { className: 'switcher__copy', as: 'h2', variant: 'body_normal', children: "Multi Wallet" }), jsxRuntime.jsx(MultiWalletSwitch.MultiWalletSwitch, { multiWallet: multiWallet, setMultiWallet: setMultiWallet })] })] })), isEmailProviderEnabled.isEmailProviderEnabled((projectSettings === null || projectSettings === void 0 ? void 0 : projectSettings.providers) || []) && !user && (jsxRuntime.jsxs(jsxRuntime.Fragment, { children: [jsxRuntime.jsxs("div", { className: 'toolkit__switcher', children: [jsxRuntime.jsx(Typography.Typography, { className: 'switcher__copy', as: 'h2', variant: 'body_normal', children: "Log in with Email" }), jsxRuntime.jsx(LoginWithEmailSwitch.LoginWithEmailSwitch, {})] }), jsxRuntime.jsxs("div", { className: 'toolkit__switcher', children: [jsxRuntime.jsx(Typography.Typography, { className: 'switcher__copy', as: 'h2', variant: 'body_normal', children: "Email vs Wallet priority" }), jsxRuntime.jsx(LoginWithEmailViewDisplayPriorityOrderSwitch.LoginWithEmailViewDisplayPriorityOrderSwitch, {})] })] }))] }) }));
};

exports.Toolkit = Toolkit;
