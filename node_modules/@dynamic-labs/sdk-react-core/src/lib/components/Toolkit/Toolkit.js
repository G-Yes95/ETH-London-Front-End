import { jsx, jsxs, Fragment } from 'react/jsx-runtime';
import { useMemo } from 'react';
import { Typography } from '../Typography/Typography.js';
import '@dynamic-labs/sdk-api';
import '../../shared/logger.js';
import '@dynamic-labs/iconic';
import '@dynamic-labs/wallet-connector-core';
import '../../context/ViewContext/ViewContext.js';
import '@dynamic-labs/wallet-book';
import '../../utils/constants/colors.js';
import '../../shared/utils/classes/storage/localStorage.js';
import 'viem';
import '@dynamic-labs/utils';
import { toolkitZIndex } from '../../shared/consts/index.js';
import { useInternalDynamicContext } from '../../context/DynamicContext/useInternalDynamicContext.js';
import '@dynamic-labs/multi-wallet';
import { isEmailProviderEnabled } from '../../utils/functions/isEmailProviderEnabled/isEmailProviderEnabled.js';
import { ShadowDOM } from '../ShadowDOM/ShadowDOM.js';
import { ThemeSwitch } from './components/ThemeSwitch.js';
import { PrimaryColorInput } from './components/PrimaryColorInput.js';
import { AuthModeSwitch } from './components/AuthModeSwitch.js';
import { LoginWithEmailSwitch } from './components/LoginWithEmailSwitch.js';
import { LoginWithEmailViewDisplayPriorityOrderSwitch } from './components/LoginWithEmailViewDisplayPriorityOrderSwitch.js';
import { TemplateSelect } from './components/TemplateSelect.js';
import { MultiWalletSwitch } from './components/MultiWalletSwitch.js';

const Toolkit = () => {
    const { projectSettings, user, showAuthFlow, showDynamicUserProfile, toolkitEnabled, authMode, setAuthMode, multiWallet, setMultiWallet, } = useInternalDynamicContext();
    const isToolkitVisible = useMemo(() => {
        if (!toolkitEnabled)
            return false;
        return showDynamicUserProfile || showAuthFlow;
    }, [showAuthFlow, showDynamicUserProfile, toolkitEnabled]);
    if (!isToolkitVisible)
        return null;
    return (jsx(ShadowDOM, { dataTestId: 'toolkit-shadowdom', className: 'toolkit-shadowdom', zIndex: toolkitZIndex, children: jsxs("div", { className: 'toolkit__container', children: [jsxs("div", { className: 'toolkit__switcher', children: [jsx(Typography, { className: 'switcher__copy', as: 'h2', variant: 'body_normal', children: "Theme" }), jsx(ThemeSwitch, {})] }), jsxs("div", { className: 'toolkit__switcher', children: [jsx(Typography, { className: 'switcher__copy', as: 'h2', variant: 'body_normal', children: "Template" }), jsx(TemplateSelect, {})] }), jsxs("div", { className: 'toolkit__switcher', children: [jsx(Typography, { className: 'switcher__copy', as: 'h2', variant: 'body_normal', children: "Primary Color" }), jsx(PrimaryColorInput, {})] }), !user && (jsxs(Fragment, { children: [jsxs("div", { className: 'toolkit__switcher', children: [jsx(Typography, { className: 'switcher__copy', as: 'h2', variant: 'body_normal', children: "Auth mode" }), jsx(AuthModeSwitch, { authMode: authMode, setAuthMode: setAuthMode })] }), jsxs("div", { className: 'toolkit__switcher', children: [jsx(Typography, { className: 'switcher__copy', as: 'h2', variant: 'body_normal', children: "Multi Wallet" }), jsx(MultiWalletSwitch, { multiWallet: multiWallet, setMultiWallet: setMultiWallet })] })] })), isEmailProviderEnabled((projectSettings === null || projectSettings === void 0 ? void 0 : projectSettings.providers) || []) && !user && (jsxs(Fragment, { children: [jsxs("div", { className: 'toolkit__switcher', children: [jsx(Typography, { className: 'switcher__copy', as: 'h2', variant: 'body_normal', children: "Log in with Email" }), jsx(LoginWithEmailSwitch, {})] }), jsxs("div", { className: 'toolkit__switcher', children: [jsx(Typography, { className: 'switcher__copy', as: 'h2', variant: 'body_normal', children: "Email vs Wallet priority" }), jsx(LoginWithEmailViewDisplayPriorityOrderSwitch, {})] })] }))] }) }));
};

export { Toolkit };
