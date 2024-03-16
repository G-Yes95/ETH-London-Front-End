import { jsxs, jsx } from 'react/jsx-runtime';
import { Typography } from '../Typography/Typography.js';
import { IconWithSpinner } from '../IconWithSpinner/IconWithSpinner.js';

const SelectWalletChainLayout = ({ children, HeaderIcon }) => (jsxs("div", { className: 'select-wallet-chain-layout__container', children: [jsx(IconWithSpinner, { className: 'select-wallet-chain-layout__icon', Icon: HeaderIcon, iconSize: 96 }), jsxs("div", { className: 'select-wallet-chain-layout__body', children: [jsx(Typography, { className: 'select-wallet-chain-layout__text', as: 'p', color: 'secondary', variant: 'body_normal', children: "This wallet supports multiple chains. Select which chain you'd like to connect to" }), jsx("div", { className: 'select-wallet-chain-layout__list', children: children })] })] }));

export { SelectWalletChainLayout };
