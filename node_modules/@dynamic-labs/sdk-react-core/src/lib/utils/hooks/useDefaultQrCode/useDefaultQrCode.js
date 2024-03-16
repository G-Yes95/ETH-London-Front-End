import { useState, useCallback, useEffect, useMemo } from 'react';
import { useInternalDynamicContext } from '../../../context/DynamicContext/useInternalDynamicContext.js';
import { useViewContext } from '../../../context/ViewContext/ViewContext.js';

const useDefaultQrCode = () => {
    const { showAuthFlow } = useInternalDynamicContext();
    const { view } = useViewContext();
    const [showQrCodeImage, setShowQrCodeImage] = useState(false);
    const [showQrCodeMessage, setShowQrCodeMessage] = useState(false);
    const resetState = useCallback(() => {
        setShowQrCodeImage(false);
        setShowQrCodeMessage(false);
    }, []);
    useEffect(() => {
        resetState();
    }, [resetState, showAuthFlow, view]);
    return useMemo(() => ({
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

export { useDefaultQrCode };
