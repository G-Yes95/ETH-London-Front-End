'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _tslib = require('../../../../../_virtual/_tslib.cjs');
var React = require('react');
require('@dynamic-labs/sdk-api');
var logger = require('../../../shared/logger.cjs');
require('@dynamic-labs/iconic');
require('@dynamic-labs/wallet-connector-core');
require('react/jsx-runtime');
require('../../../context/ViewContext/ViewContext.cjs');
require('@dynamic-labs/wallet-book');
require('../../constants/colors.cjs');
require('../../../shared/utils/classes/storage/localStorage.cjs');
require('viem');
require('@dynamic-labs/utils');
require('../../../shared/consts/index.cjs');
var ErrorContext = require('../../../context/ErrorContext/ErrorContext.cjs');
var useInternalDynamicContext = require('../../../context/DynamicContext/useInternalDynamicContext.cjs');

const useConnectWithEmail = ({ emailWalletConnector, handleConnect, }) => {
    const { error } = ErrorContext.useErrorContext();
    const [loading, setLoading] = React.useState(false);
    const { setIsVerificationInProgress } = useInternalDynamicContext.useInternalDynamicContext();
    const connectWithEmail = (email) => _tslib.__awaiter(void 0, void 0, void 0, function* () {
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
            logger.logger.error(e);
            setIsVerificationInProgress(false);
            setLoading(false);
        }
    });
    React.useEffect(() => {
        if (error && loading) {
            setLoading(false);
        }
    }, [error, loading]);
    return {
        connectWithEmail,
        loading,
    };
};

exports.useConnectWithEmail = useConnectWithEmail;
