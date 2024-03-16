import { useState } from 'react';
import '@dynamic-labs/sdk-api';
import { logger } from '../../../../shared/logger.js';
import '@dynamic-labs/iconic';
import '@dynamic-labs/wallet-connector-core';
import 'react/jsx-runtime';
import '../../../ViewContext/ViewContext.js';
import '@dynamic-labs/wallet-book';
import '../../../../utils/constants/colors.js';
import '../../../../shared/utils/classes/storage/localStorage.js';
import 'viem';
import '@dynamic-labs/utils';
import '../../../../shared/consts/index.js';

const useVerificationInProgress = () => {
    // Set to true when a customer starts any auth verification process and set to false when it ends
    // pro tip: helps indicate whether onAuthModalClose was called as a result of a verification process or not
    // because when modal is closed manually, the flag will be false at the moment of onAuthModalClose.
    // If it was closed due to a verification process, it will be true.
    const [isVerificationInProgress, _setIsVerificationInProgress] = useState(false);
    // Detects whether the flag is being set to false when it was already false
    const detectRedundantDisable = (newValue, oldValue) => {
        if (!newValue && !oldValue)
            logger.debug('The "isVerificationInProgress" flag had not been previously enabled at the time of being disabled. Please ensure to set it to true whenever any kind of verification process is started');
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

export { useVerificationInProgress };
