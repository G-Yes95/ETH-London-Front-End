import { jsxs, jsx } from 'react/jsx-runtime';
import { useMemo } from 'react';
import { getChainInfo } from '@dynamic-labs/wallet-connector-core';
import { LedgerIcon } from '@dynamic-labs/iconic';
import '@dynamic-labs/sdk-api';
import '../../../../shared/logger.js';
import { getChainIcon } from '../../../../shared/utils/functions/chain/getChainIcon.js';
import '@dynamic-labs/wallet-book';
import { getWalletListItemLabel } from '../../../../shared/utils/functions/getWalletListItemLabel/getWalletListItemLabel.js';
import 'viem';
import '../../../../shared/utils/classes/storage/localStorage.js';
import '@dynamic-labs/utils';
import '../../../../context/ViewContext/ViewContext.js';
import { ReactComponent as SvgStroke } from '../../../../shared/assets/stroke.js';
import '../../../../shared/consts/index.js';
import { AUTH_USER } from '../../../../utils/constants/localStorage.js';
import { classNames } from '../../../../utils/functions/classNames/classNames.js';
import { Icon } from '../../../../components/Icon/Icon.js';
import { ChainCard } from '../../../../components/ChainCard/ChainCard.js';
import { useWalletItemActions } from '../../../../utils/hooks/useWalletItemActions/useWalletItemActions.js';
import { pixelToRem } from '../../../../utils/functions/pixelToRem/pixelToRem.js';
import { Badge } from '../../../../components/Badge/Badge.js';

const WalletGroupItem = ({ wallet }) => {
    const [supportedChain] = wallet.walletConnector.supportedChains;
    const ChainIcon = getChainIcon(supportedChain);
    const chainInfo = getChainInfo(supportedChain);
    const { handleWalletItemClick } = useWalletItemActions();
    const isUsingMultiWallet = Boolean(localStorage.getItem(AUTH_USER));
    const label = getWalletListItemLabel({
        usingMultiWallet: isUsingMultiWallet,
        wallet,
    });
    const isPhantomLedger = wallet.key === 'phantomledger';
    const trailing = (jsxs("div", { className: classNames('wallet-list-item__trailing', 'wallet-group__item-label'), children: [label && (jsx("div", { className: classNames('trailing__child', {
                    trailing__label: true,
                }), children: jsx(Badge, { dot: true, text: label, className: 'trailing__badge' }) })), jsx("div", { "data-testid": 'trailing__arrow', className: 'trailing__child trailing__arrow', children: jsx(Icon, { color: 'text-tertiary', size: 'small', children: jsx(SvgStroke, {}) }) })] }));
    const renderChainIcon = useMemo(() => {
        if (isPhantomLedger)
            return (jsx(LedgerIcon, { style: { height: pixelToRem(28), width: pixelToRem(28) } }));
        return (jsx(ChainIcon, { style: { height: pixelToRem(28), width: pixelToRem(28) } }));
    }, [ChainIcon, isPhantomLedger]);
    const renderChainName = useMemo(() => {
        if (isPhantomLedger)
            return 'Ledger (Solana)';
        return (chainInfo === null || chainInfo === void 0 ? void 0 : chainInfo.displayName) || wallet.name;
    }, [chainInfo === null || chainInfo === void 0 ? void 0 : chainInfo.displayName, isPhantomLedger, wallet.name]);
    return (jsx(ChainCard, { className: 'wallet-group__item', onClick: () => handleWalletItemClick(wallet), chainName: renderChainName, startSlot: renderChainIcon, endSlot: trailing }, wallet.key));
};

export { WalletGroupItem };
