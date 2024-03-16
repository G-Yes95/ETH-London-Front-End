'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

require('@dynamic-labs/sdk-api');
require('../../shared/logger.cjs');
var validateType = require('../../shared/utils/functions/validateType/validateType.cjs');
require('@dynamic-labs/iconic');
require('@dynamic-labs/wallet-connector-core');
require('react/jsx-runtime');
require('../ViewContext/ViewContext.cjs');
require('react');
require('@dynamic-labs/wallet-book');
require('../../utils/constants/colors.cjs');
require('../../shared/utils/classes/storage/localStorage.cjs');
require('viem');
require('@dynamic-labs/utils');
require('../../shared/consts/index.cjs');

// TODO: need validation for optional fields
// https://linear.app/dynamic-labs/issue/DYN-1461
const validateAuthUser = (data) => validateType.validateType(data, {
    environmentId: 'environmentId',
    lastVerifiedCredentialId: 'lastAuthenticatedAccountId',
    userId: 'userId',
    verifiedCredentials: [
        {
            format: 'format',
            id: 'id',
        },
    ],
});
const validateLocalStorageExpiry = (data) => {
    if (!data)
        return false;
    const timeNow = new Date().getTime();
    if (timeNow > data.expiry) {
        return false;
    }
    return true;
};

exports.validateAuthUser = validateAuthUser;
exports.validateLocalStorageExpiry = validateLocalStorageExpiry;
