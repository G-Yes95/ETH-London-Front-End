'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var jsxRuntime = require('react/jsx-runtime');
var iconic = require('@dynamic-labs/iconic');
var ViewContext = require('../../../../context/ViewContext/ViewContext.cjs');

const PhantomLedgerIcon = () => {
    const { view } = ViewContext.useViewContext();
    const renderSmallerIconSize = view !== 'pending-connect' && view !== 'pending-signature';
    const wrapperStyle = renderSmallerIconSize ? { height: 24, width: 24 } : {};
    const iconsStyle = renderSmallerIconSize
        ? {
            leftIcon: { height: 22, left: '-.275rem', width: 22 },
            rightIcon: { height: 22, right: '-.275rem', width: 22 },
        }
        : {
            leftIcon: { height: 40, left: '-.5rem', width: 40 },
            rightIcon: { height: 40, right: '-.5rem', width: 40 },
        };
    return (jsxRuntime.jsxs("div", { style: wrapperStyle, className: 'phantom-ledger-icon__container', children: [jsxRuntime.jsx(iconic.PhantomIcon, { className: 'phantom-ledger-icon', style: iconsStyle.leftIcon }), jsxRuntime.jsx(iconic.LedgerIcon, { className: 'phantom-ledger-icon', style: iconsStyle.rightIcon })] }));
};

exports.PhantomLedgerIcon = PhantomLedgerIcon;
