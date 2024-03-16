import { jsxs, jsx } from 'react/jsx-runtime';
import { useMemo } from 'react';
import { useViewContext } from '../../../context/ViewContext/ViewContext.js';
import { useInternalDynamicContext } from '../../../context/DynamicContext/useInternalDynamicContext.js';
import { WalletListHelpContent } from './WalletListHelpContent/WalletListHelpContent.js';
import { WalletMoreInfoContent } from './WalletMoreInfoContent/WalletMoreInfoContent.js';
import { EmptyHelpContent } from './EmptyHelpContent/EmptyHelpContent.js';
import { HelpHeader } from './HelpHeader/HelpHeader.js';
import { PasskeyInfoHelper } from './PasskeyInfoHelper/PasskeyInfoHelper.js';

const HelpContent = () => (jsxs("div", { children: [jsx(HelpHeader, {}), jsx(HelpContentSwitch, {})] }));
const HelpContentSwitch = () => {
    const { view } = useViewContext();
    const { projectSettings, newToWeb3WalletChainMap, selectedWalletConnector } = useInternalDynamicContext();
    const isWalletListTypeView = useMemo(() => view === 'wallet-connect-mobile-wallets-list' ||
        view === 'wallet-list' ||
        view === 'login-with-email-or-wallet-full-wallet-list' ||
        view === 'login-with-wallet-only', [view]);
    const isPendingSignatureTypeView = useMemo(() => view === 'pending-signature-without-back-button' ||
        view === 'pending-signature', [view]);
    const isPendingConnectTypeView = useMemo(() => view === 'pending-connect' || view === 'qr-code', [view]);
    const isPasskeyIntroView = useMemo(() => view === 'passkey-intro', [view]);
    if (isWalletListTypeView) {
        return (jsx(WalletListHelpContent, { chains: projectSettings === null || projectSettings === void 0 ? void 0 : projectSettings.chains, newToWeb3WalletChainMap: newToWeb3WalletChainMap }));
    }
    if (isPendingSignatureTypeView) {
        return (jsx(WalletMoreInfoContent, { variant: 'sign', walletName: selectedWalletConnector === null || selectedWalletConnector === void 0 ? void 0 : selectedWalletConnector.name }));
    }
    if (isPendingConnectTypeView) {
        return jsx(WalletMoreInfoContent, { variant: 'connect' });
    }
    if (isPasskeyIntroView) {
        return jsx(PasskeyInfoHelper, {});
    }
    return jsx(EmptyHelpContent, {});
};

export { HelpContent };
