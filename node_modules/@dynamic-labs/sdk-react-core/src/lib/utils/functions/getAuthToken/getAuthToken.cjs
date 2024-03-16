'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var helpers = require('../../../context/DynamicContext/helpers.cjs');
require('@dynamic-labs/sdk-api');
require('../../../shared/logger.cjs');
require('@dynamic-labs/iconic');
require('@dynamic-labs/wallet-connector-core');
require('react/jsx-runtime');
require('../../../context/ViewContext/ViewContext.cjs');
require('react');
require('@dynamic-labs/wallet-book');
var localStorage$1 = require('../../constants/localStorage.cjs');
require('../../constants/colors.cjs');
var localStorage = require('../../../shared/utils/classes/storage/localStorage.cjs');
require('viem');
require('@dynamic-labs/utils');
require('../../../shared/consts/index.cjs');

const getAuthToken = () => {
    if (typeof window === 'undefined') {
        return undefined;
    }
    const token = localStorage.LocalStorage.getFromLS(localStorage$1.AUTH_TOKEN, true);
    if (!token) {
        return undefined;
    }
    if (helpers.isAuthTokenExpired(token)) {
        return undefined;
    }
    return token;
};

exports.getAuthToken = getAuthToken;
