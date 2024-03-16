'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
require('@dynamic-labs/sdk-api');
var logger = require('../../../../shared/logger.cjs');
require('@dynamic-labs/iconic');
require('@dynamic-labs/wallet-connector-core');
require('react/jsx-runtime');
require('../../../ViewContext/ViewContext.cjs');
require('@dynamic-labs/wallet-book');
require('../../../../utils/constants/colors.cjs');
require('../../../../shared/utils/classes/storage/localStorage.cjs');
require('viem');
require('@dynamic-labs/utils');
require('../../../../shared/consts/index.cjs');

const useVerificationInProgress = () => {
    // Set to true when a customer starts any auth verification process and set to false when it ends
    // pro tip: helps indicate whether onAuthModalClose was called as a result of a verification process or not
    // because when modal is closed manually, the flag will be false at the moment of onAuthModalClose.
    // If it was closed due to a verification process, it will be true.
    const [isVerificationInProgress, _setIsVerificationInProgress] = React.useState(false);
    // Detects whether the flag is being set to false when it was already false
    const detectRedundantDisable = (newValue, oldValue) => {
        if (!newValue && !oldValue)
            logger.logger.debug('The "isVerificationInProgress" flag had not been previously enabled at the time of being disabled. Please ensure to set it to true whenever any kind of verification process is started');
    };
    // eslint-disable-next-line multiline-comment-style
    /** Setter for isVerificationInProgress that also logs a debug message if
     * it is set to false without having been set to true before */
    const setIsVerificationInProgress = (newValue) => {
        // Calls original setter with a callback. This prevents accessing an outdated value of isVerificationInProgress
        _setIsVerificationInProgress((oldValue) => {
            detectRedundantDisable(newValue, oldValue);
            return newValue;
        });
    };
    return [isVerificationInProgress, setIsVerificationInProgress];
};

exports.useVerificationInProgress = useVerificationInProgress;
