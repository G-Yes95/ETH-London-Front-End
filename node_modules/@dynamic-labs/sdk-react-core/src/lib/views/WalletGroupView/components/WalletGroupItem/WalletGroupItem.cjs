'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var jsxRuntime = require('react/jsx-runtime');
var React = require('react');
var walletConnectorCore = require('@dynamic-labs/wallet-connector-core');
var iconic = require('@dynamic-labs/iconic');
require('@dynamic-labs/sdk-api');
require('../../../../shared/logger.cjs');
var getChainIcon = require('../../../../shared/utils/functions/chain/getChainIcon.cjs');
require('@dynamic-labs/wallet-book');
var getWalletListItemLabel = require('../../../../shared/utils/functions/getWalletListItemLabel/getWalletListItemLabel.cjs');
require('viem');
require('../../../../shared/utils/classes/storage/localStorage.cjs');
require('@dynamic-labs/utils');
require('../../../../context/ViewContext/ViewContext.cjs');
var stroke = require('../../../../shared/assets/stroke.cjs');
require('../../../../shared/consts/index.cjs');
var localStorage$1 = require('../../../../utils/constants/localStorage.cjs');
var classNames = require('../../../../utils/functions/classNames/classNames.cjs');
var Icon = require('../../../../components/Icon/Icon.cjs');
var ChainCard = require('../../../../components/ChainCard/ChainCard.cjs');
var useWalletItemActions = require('../../../../utils/hooks/useWalletItemActions/useWalletItemActions.cjs');
var pixelToRem = require('../../../../utils/functions/pixelToRem/pixelToRem.cjs');
var Badge = require('../../../../components/Badge/Badge.cjs');

const WalletGroupItem = ({ wallet }) => {
    const [supportedChain] = wallet.walletConnector.supportedChains;
    const ChainIcon = getChainIcon.getChainIcon(supportedChain);
    const chainInfo = walletConnectorCore.getChainInfo(supportedChain);
    const { handleWalletItemClick } = useWalletItemActions.useWalletItemActions();
    const isUsingMultiWallet = Boolean(localStorage.getItem(localStorage$1.AUTH_USER));
    const label = getWalletListItemLabel.getWalletListItemLabel({
        usingMultiWallet: isUsingMultiWallet,
        wallet,
    });
    const isPhantomLedger = wallet.key === 'phantomledger';
    const trailing = (jsxRuntime.jsxs("div", { className: classNames.classNames('wallet-list-item__trailing', 'wallet-group__item-label'), children: [label && (jsxRuntime.jsx("div", { className: classNames.classNames('trailing__child', {
                    trailing__label: true,
                }), children: jsxRuntime.jsx(Badge.Badge, { dot: true, text: label, className: 'trailing__badge' }) })), jsxRuntime.jsx("div", { "data-testid": 'trailing__arrow', className: 'trailing__child trailing__arrow', children: jsxRuntime.jsx(Icon.Icon, { color: 'text-tertiary', size: 'small', children: jsxRuntime.jsx(stroke.ReactComponent, {}) }) })] }));
    const renderChainIcon = React.useMemo(() => {
        if (isPhantomLedger)
            return (jsxRuntime.jsx(iconic.LedgerIcon, { style: { height: pixelToRem.pixelToRem(28), width: pixelToRem.pixelToRem(28) } }));
        return (jsxRuntime.jsx(ChainIcon, { style: { height: pixelToRem.pixelToRem(28), width: pixelToRem.pixelToRem(28) } }));
    }, [ChainIcon, isPhantomLedger]);
    const renderChainName = React.useMemo(() => {
        if (isPhantomLedger)
            return 'Ledger (Solana)';
        return (chainInfo === null || chainInfo === void 0 ? void 0 : chainInfo.displayName) || wallet.name;
    }, [chainInfo === null || chainInfo === void 0 ? void 0 : chainInfo.displayName, isPhantomLedger, wallet.name]);
    return (jsxRuntime.jsx(ChainCard.ChainCard, { className: 'wallet-group__item', onClick: () => handleWalletItemClick(wallet), chainName: renderChainName, startSlot: renderChainIcon, endSlot: trailing }, wallet.key));
};

exports.WalletGroupItem = WalletGroupItem;
