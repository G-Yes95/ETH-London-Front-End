'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var jsxRuntime = require('react/jsx-runtime');
var Button = require('../Button/Button.cjs');

const SelectNetworkButton = ({ networkId, networkName, networkIconUrl, onClick, }) => {
    const networkImage = (jsxRuntime.jsx("img", { alt: networkName, className: 'select-network-button__icon', src: networkIconUrl }));
    return (jsxRuntime.jsxs(Button.Button, { dataTestId: 'SelectNetworkButton', onClick: () => onClick(networkId), expanded: true, className: 'select-network-button', children: ["Select", networkImage, networkName, " network"] }));
};

exports.SelectNetworkButton = SelectNetworkButton;
