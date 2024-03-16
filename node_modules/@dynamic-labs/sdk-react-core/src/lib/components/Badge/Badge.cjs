'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var jsxRuntime = require('react/jsx-runtime');
var classNames = require('../../utils/functions/classNames/classNames.cjs');

const Badge = ({ className = '', dot, text }) => (jsxRuntime.jsxs("div", { className: classNames.classNames('badge__container', className), children: [dot && jsxRuntime.jsx("span", { "data-testid": 'badge__dot', className: 'badge__dot' }), jsxRuntime.jsx("span", { children: text })] }));

exports.Badge = Badge;
