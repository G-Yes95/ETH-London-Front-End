'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

require('@dynamic-labs/sdk-api');
require('../../shared/logger.cjs');
require('@dynamic-labs/iconic');
require('@dynamic-labs/wallet-connector-core');
require('react/jsx-runtime');
require('../../context/ViewContext/ViewContext.cjs');
require('react');
require('@dynamic-labs/wallet-book');
var isSSR = require('../../shared/utils/functions/isSSR/isSSR.cjs');
require('../../utils/constants/colors.cjs');
require('../../shared/utils/classes/storage/localStorage.cjs');
require('viem');
require('@dynamic-labs/utils');
require('../../shared/consts/index.cjs');

const isShadowDOMFlagEnabled = () => {
    if (isSSR.isSSR())
        return false;
    const flag = 'shadowDOM.enabled';
    const searchParams = new URLSearchParams(window.location.search);
    // by default, enable the widget
    if (!searchParams.has(flag)) {
        return true;
    }
    return searchParams.get(flag) === 'true';
};

exports.isShadowDOMFlagEnabled = isShadowDOMFlagEnabled;
