'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var useInternalDynamicContext = require('../../../context/DynamicContext/useInternalDynamicContext.cjs');
var ViewContext = require('../../../context/ViewContext/ViewContext.cjs');

const useDefaultQrCode = () => {
    const { showAuthFlow } = useInternalDynamicContext.useInternalDynamicContext();
    const { view } = ViewContext.useViewContext();
    const [showQrCodeImage, setShowQrCodeImage] = React.useState(false);
    const [showQrCodeMessage, setShowQrCodeMessage] = React.useState(false);
    const resetState = React.useCallback(() => {
        setShowQrCodeImage(false);
        setShowQrCodeMessage(false);
    }, []);
    React.useEffect(() => {
        resetState();
    }, [resetState, showAuthFlow, view]);
    return React.useMemo(() => ({
        setShowQrCodeImage,
        setShowQrCodeMessage,
        showQrCodeImage,
        showQrCodeMessage,
    }), [
        setShowQrCodeImage,
        setShowQrCodeMessage,
        showQrCodeImage,
        showQrCodeMessage,
    ]);
};

exports.useDefaultQrCode = useDefaultQrCode;
