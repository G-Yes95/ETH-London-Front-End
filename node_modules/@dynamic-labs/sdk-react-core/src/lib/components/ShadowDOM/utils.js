import '@dynamic-labs/sdk-api';
import '../../shared/logger.js';
import '@dynamic-labs/iconic';
import '@dynamic-labs/wallet-connector-core';
import 'react/jsx-runtime';
import '../../context/ViewContext/ViewContext.js';
import 'react';
import '@dynamic-labs/wallet-book';
import { isSSR } from '../../shared/utils/functions/isSSR/isSSR.js';
import '../../utils/constants/colors.js';
import '../../shared/utils/classes/storage/localStorage.js';
import 'viem';
import '@dynamic-labs/utils';
import '../../shared/consts/index.js';

const isShadowDOMFlagEnabled = () => {
    if (isSSR())
        return false;
    const flag = 'shadowDOM.enabled';
    const searchParams = new URLSearchParams(window.location.search);
    // by default, enable the widget
    if (!searchParams.has(flag)) {
        return true;
    }
    return searchParams.get(flag) === 'true';
};

export { isShadowDOMFlagEnabled };
