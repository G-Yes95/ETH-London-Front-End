'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var jsxRuntime = require('react/jsx-runtime');
var Typography = require('../Typography/Typography.cjs');
var classNames = require('../../utils/functions/classNames/classNames.cjs');

const Chip = ({ children, icon, className, }) => (jsxRuntime.jsxs("div", { className: classNames.classNames('chip', className, {
        'chip__with-icon': Boolean(icon),
    }), children: [Boolean(icon) && jsxRuntime.jsx("div", { className: 'chip--icon', children: icon }), jsxRuntime.jsx(Typography.Typography, { variant: 'body_small', children: children })] }));

exports.Chip = Chip;
