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
var localStorage$1 = require('../../constants/localStorage.cjs');
require('../../constants/colors.cjs');
var localStorage = require('../../../shared/utils/classes/storage/localStorage.cjs');
require('viem');
require('@dynamic-labs/utils');
require('../../../shared/consts/index.cjs');

const storeAuthToken = (jwt) => {
    localStorage.LocalStorage.setToLS(localStorage$1.AUTH_TOKEN, jwt, true);
};

exports.storeAuthToken = storeAuthToken;
