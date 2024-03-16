'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

require('@dynamic-labs/sdk-api');
require('../../../shared/logger.cjs');
require('@dynamic-labs/iconic');
require('@dynamic-labs/wallet-connector-core');
require('react/jsx-runtime');
require('../../../context/ViewContext/ViewContext.cjs');
require('react');
require('@dynamic-labs/wallet-book');
var detectBrowser = require('../../../shared/utils/functions/detectBrowser/detectBrowser.cjs');
require('../../../utils/constants/colors.cjs');
require('../../../shared/utils/classes/storage/localStorage.cjs');
require('viem');
require('@dynamic-labs/utils');
require('../../../shared/consts/index.cjs');

const getPasskeyProviderFromUserAgent = (userAgent) => {
    const isIPhone = userAgent.match(/iPhone/i);
    if (isIPhone) {
        return 'iPhone';
    }
    const isAndroid = userAgent.match(/Android/i);
    if (isAndroid) {
        return 'android';
    }
    const browser = detectBrowser.detectBrowserName(userAgent);
    return browser;
};

exports.getPasskeyProviderFromUserAgent = getPasskeyProviderFromUserAgent;
