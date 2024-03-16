'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var jsxRuntime = require('react/jsx-runtime');
require('@dynamic-labs/sdk-api');
require('../../shared/logger.cjs');
require('@dynamic-labs/iconic');
require('@dynamic-labs/wallet-connector-core');
require('../../context/ViewContext/ViewContext.cjs');
require('react');
var spinner = require('../../shared/assets/spinner.cjs');
require('@dynamic-labs/wallet-book');
require('../../utils/constants/colors.cjs');
require('../../shared/utils/classes/storage/localStorage.cjs');
require('viem');
require('@dynamic-labs/utils');
require('../../shared/consts/index.cjs');
var classNames = require('../../utils/functions/classNames/classNames.cjs');

const Spinner = ({ className = '' }) => (jsxRuntime.jsx(spinner.ReactComponent, { className: classNames.classNames('spinner', className) }));

exports.Spinner = Spinner;
