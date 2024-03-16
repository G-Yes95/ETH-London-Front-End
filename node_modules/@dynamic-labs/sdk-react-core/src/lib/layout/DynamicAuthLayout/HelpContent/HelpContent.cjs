'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var jsxRuntime = require('react/jsx-runtime');
var React = require('react');
var ViewContext = require('../../../context/ViewContext/ViewContext.cjs');
var useInternalDynamicContext = require('../../../context/DynamicContext/useInternalDynamicContext.cjs');
var WalletListHelpContent = require('./WalletListHelpContent/WalletListHelpContent.cjs');
var WalletMoreInfoContent = require('./WalletMoreInfoContent/WalletMoreInfoContent.cjs');
var EmptyHelpContent = require('./EmptyHelpContent/EmptyHelpContent.cjs');
var HelpHeader = require('./HelpHeader/HelpHeader.cjs');
var PasskeyInfoHelper = require('./PasskeyInfoHelper/PasskeyInfoHelper.cjs');

const HelpContent = () => (jsxRuntime.jsxs("div", { children: [jsxRuntime.jsx(HelpHeader.HelpHeader, {}), jsxRuntime.jsx(HelpContentSwitch, {})] }));
const HelpContentSwitch = () => {
    const { view } = ViewContext.useViewContext();
    const { projectSettings, newToWeb3WalletChainMap, selectedWalletConnector } = useInternalDynamicContext.useInternalDynamicContext();
    const isWalletListTypeView = React.useMemo(() => view === 'wallet-connect-mobile-wallets-list' ||
        view === 'wallet-list' ||
        view === 'login-with-email-or-wallet-full-wallet-list' ||
        view === 'login-with-wallet-only', [view]);
    const isPendingSignatureTypeView = React.useMemo(() => view === 'pending-signature-without-back-button' ||
        view === 'pending-signature', [view]);
    const isPendingConnectTypeView = React.useMemo(() => view === 'pending-connect' || view === 'qr-code', [view]);
    const isPasskeyIntroView = React.useMemo(() => view === 'passkey-intro', [view]);
    if (isWalletListTypeView) {
        return (jsxRuntime.jsx(WalletListHelpContent.WalletListHelpContent, { chains: projectSettings === null || projectSettings === void 0 ? void 0 : projectSettings.chains, newToWeb3WalletChainMap: newToWeb3WalletChainMap }));
    }
    if (isPendingSignatureTypeView) {
        return (jsxRuntime.jsx(WalletMoreInfoContent.WalletMoreInfoContent, { variant: 'sign', walletName: selectedWalletConnector === null || selectedWalletConnector === void 0 ? void 0 : selectedWalletConnector.name }));
    }
    if (isPendingConnectTypeView) {
        return jsxRuntime.jsx(WalletMoreInfoContent.WalletMoreInfoContent, { variant: 'connect' });
    }
    if (isPasskeyIntroView) {
        return jsxRuntime.jsx(PasskeyInfoHelper.PasskeyInfoHelper, {});
    }
    return jsxRuntime.jsx(EmptyHelpContent.EmptyHelpContent, {});
};

exports.HelpContent = HelpContent;
