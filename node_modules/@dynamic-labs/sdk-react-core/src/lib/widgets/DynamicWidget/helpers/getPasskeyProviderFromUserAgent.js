import '@dynamic-labs/sdk-api';
import '../../../shared/logger.js';
import '@dynamic-labs/iconic';
import '@dynamic-labs/wallet-connector-core';
import 'react/jsx-runtime';
import '../../../context/ViewContext/ViewContext.js';
import 'react';
import '@dynamic-labs/wallet-book';
import { detectBrowserName } from '../../../shared/utils/functions/detectBrowser/detectBrowser.js';
import '../../../utils/constants/colors.js';
import '../../../shared/utils/classes/storage/localStorage.js';
import 'viem';
import '@dynamic-labs/utils';
import '../../../shared/consts/index.js';

const getPasskeyProviderFromUserAgent = (userAgent) => {
    const isIPhone = userAgent.match(/iPhone/i);
    if (isIPhone) {
        return 'iPhone';
    }
    const isAndroid = userAgent.match(/Android/i);
    if (isAndroid) {
        return 'android';
    }
    const browser = detectBrowserName(userAgent);
    return browser;
};

export { getPasskeyProviderFromUserAgent };
