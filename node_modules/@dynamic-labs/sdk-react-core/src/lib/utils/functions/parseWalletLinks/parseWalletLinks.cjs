'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var utils = require('@dynamic-labs/utils');
require('@dynamic-labs/sdk-api');
require('../../../shared/logger.cjs');
require('@dynamic-labs/iconic');
require('@dynamic-labs/wallet-connector-core');
require('react/jsx-runtime');
require('../../../context/ViewContext/ViewContext.cjs');
require('react');
require('@dynamic-labs/wallet-book');
var detectBrowser = require('../../../shared/utils/functions/detectBrowser/detectBrowser.cjs');
require('../../constants/colors.cjs');
require('../../../shared/utils/classes/storage/localStorage.cjs');
require('viem');
require('../../../shared/consts/index.cjs');

const parseWalletLinks = (links) => {
    const isIOS = utils.isIPhone() || utils.isIPad();
    const userBrowser = detectBrowser.detectBrowserName() || 'chrome';
    let currentDesktopUrl;
    switch (userBrowser) {
        case 'edge':
            currentDesktopUrl = links.edge;
            break;
        case 'firefox':
            currentDesktopUrl = links.firefox;
            break;
        case 'chrome':
        default:
            currentDesktopUrl = links.chrome;
            break;
    }
    const canShowAndroidAppButton = !isIOS && Boolean(links.android);
    const canShowIosAppButton = (isIOS || !utils.isMobile()) && Boolean(links.ios);
    return {
        canShowAndroidAppButton,
        canShowIosAppButton,
        currentDesktopUrl,
        hasMobileAppUrl: canShowAndroidAppButton || canShowIosAppButton,
        userBrowser,
    };
};

exports.parseWalletLinks = parseWalletLinks;
