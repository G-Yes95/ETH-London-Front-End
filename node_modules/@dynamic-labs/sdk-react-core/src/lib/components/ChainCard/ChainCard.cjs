'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var jsxRuntime = require('react/jsx-runtime');
var Typography = require('../Typography/Typography.cjs');
var classNames = require('../../utils/functions/classNames/classNames.cjs');

const ChainCard = ({ onClick, chainName, startSlot, endSlot, className, }) => (jsxRuntime.jsxs("div", { onClick: onClick, role: 'button', tabIndex: 1, className: classNames.classNames('chain-card', className), children: [startSlot, jsxRuntime.jsx(Typography.Typography, { color: 'primary', variant: 'body_normal', weight: 'medium', className: 'chain-card__text', children: chainName }), endSlot] }));

exports.ChainCard = ChainCard;
