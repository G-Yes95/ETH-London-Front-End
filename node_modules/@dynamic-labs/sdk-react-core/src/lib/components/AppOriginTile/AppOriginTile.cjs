'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var jsxRuntime = require('react/jsx-runtime');
var Typography = require('../Typography/Typography.cjs');

const AppOriginTile = ({ appLogoUrl, appName, appOrigin, }) => (jsxRuntime.jsxs("div", { className: 'app-origin-tile', children: [Boolean(appName) && (jsxRuntime.jsxs("div", { className: 'app-origin-tile__title', children: [Boolean(appLogoUrl) && (jsxRuntime.jsx("img", { alt: 'app_logo', src: appLogoUrl, className: 'app-origin-tile__logo' })), jsxRuntime.jsx(Typography.Typography, { color: 'primary', variant: 'body_normal', children: appName })] })), jsxRuntime.jsx(Typography.Typography, { color: 'secondary', variant: 'body_normal', weight: 'regular', children: appOrigin })] }));

exports.AppOriginTile = AppOriginTile;
