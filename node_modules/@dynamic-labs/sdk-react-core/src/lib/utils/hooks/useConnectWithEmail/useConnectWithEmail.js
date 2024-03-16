import { __awaiter } from '../../../../../_virtual/_tslib.js';
import { useState, useEffect } from 'react';
import '@dynamic-labs/sdk-api';
import { logger } from '../../../shared/logger.js';
import '@dynamic-labs/iconic';
import '@dynamic-labs/wallet-connector-core';
import 'react/jsx-runtime';
import '../../../context/ViewContext/ViewContext.js';
import '@dynamic-labs/wallet-book';
import '../../constants/colors.js';
import '../../../shared/utils/classes/storage/localStorage.js';
import 'viem';
import '@dynamic-labs/utils';
import '../../../shared/consts/index.js';
import { useErrorContext } from '../../../context/ErrorContext/ErrorContext.js';
import { useInternalDynamicContext } from '../../../context/DynamicContext/useInternalDynamicContext.js';

const useConnectWithEmail = ({ emailWalletConnector, handleConnect, }) => {
    const { error } = useErrorContext();
    const [loading, setLoading] = useState(false);
    const { setIsVerificationInProgress } = useInternalDynamicContext();
    const connectWithEmail = (email) => __awaiter(void 0, void 0, void 0, function* () {
        if (!email || !emailWalletConnector || loading)
            return;
        // Indicate auth verification process start
        setIsVerificationInProgress(true);
        setLoading(true);
        emailWalletConnector.setEmail(email);
        try {
            yield handleConnect(emailWalletConnector);
        }
        catch (e) {
            logger.error(e);
            setIsVerificationInProgress(false);
            setLoading(false);
        }
    });
    useEffect(() => {
        if (error && loading) {
            setLoading(false);
        }
    }, [error, loading]);
    return {
        connectWithEmail,
        loading,
    };
};

export { useConnectWithEmail };
