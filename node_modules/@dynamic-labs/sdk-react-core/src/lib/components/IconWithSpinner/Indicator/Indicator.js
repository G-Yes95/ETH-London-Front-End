import { jsx } from 'react/jsx-runtime';
import '@dynamic-labs/sdk-api';
import '../../../shared/logger.js';
import '@dynamic-labs/iconic';
import '@dynamic-labs/wallet-connector-core';
import '../../../context/ViewContext/ViewContext.js';
import 'react';
import { ReactComponent as SvgWalletConnectLogo } from '../../../shared/assets/wallet-connect-logo.js';
import '@dynamic-labs/wallet-book';
import '../../../utils/constants/colors.js';
import '../../../shared/utils/classes/storage/localStorage.js';
import 'viem';
import '@dynamic-labs/utils';
import '../../../shared/consts/index.js';
import '@dynamic-labs/multi-wallet';
import { pixelToRem } from '../../../utils/functions/pixelToRem/pixelToRem.js';

const Indicator = ({ indicator, iconSize }) => {
    const walletConnectSizes = {
        container: (iconSize * 4) / 15,
        icon: (iconSize * 3) / 15,
    };
    const connectedSizes = {
        container: iconSize / 6,
        icon: iconSize / 9,
    };
    if (indicator === 'walletConnect') {
        return (jsx("div", { className: 'indicator__wallet-connect', style: {
                height: pixelToRem(walletConnectSizes.container),
                width: pixelToRem(walletConnectSizes.container),
            }, children: jsx(SvgWalletConnectLogo, { style: {
                    height: pixelToRem(walletConnectSizes.icon),
                    width: pixelToRem(walletConnectSizes.icon),
                } }) }));
    }
    return (jsx("div", { className: 'indicator__container indicator__container--connected', style: {
            height: pixelToRem(connectedSizes.container),
            width: pixelToRem(connectedSizes.container),
        }, "data-testid": 'connected-indicator', children: jsx("div", { className: 'indicator__icon', style: {
                height: pixelToRem(connectedSizes.icon),
                width: pixelToRem(connectedSizes.icon),
            } }) }));
};

export { Indicator };
