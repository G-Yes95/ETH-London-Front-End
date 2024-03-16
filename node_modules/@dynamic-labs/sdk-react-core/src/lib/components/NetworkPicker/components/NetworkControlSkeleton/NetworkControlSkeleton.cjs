'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var jsxRuntime = require('react/jsx-runtime');
var classNames = require('../../../../utils/functions/classNames/classNames.cjs');

const NetworkControlSkeleton = ({ className, }) => (jsxRuntime.jsx("div", { className: classNames.classNames('network-control-skeleton', className), "data-testid": 'network-control-loading', children: jsxRuntime.jsx("div", { className: 'network-control-skeleton__icon' }) }));

exports.NetworkControlSkeleton = NetworkControlSkeleton;
