import { jsx } from 'react/jsx-runtime';
import { useMemo } from 'react';
import { Typography } from '../Typography/Typography.js';
import { isSignTypedData } from './utils/isSignTypedData/isSignTypedData.js';
import { SignTypedDataPreview } from './components/SignTypedDataPreview/SignTypedDataPreview.js';

const SignMessagePreview = ({ message, }) => {
    const signTypedData = useMemo(() => {
        try {
            const json = JSON.parse(message);
            return isSignTypedData(json) ? json : undefined;
        }
        catch (e) {
            return undefined;
        }
    }, [message]);
    if (signTypedData) {
        return (jsx(SignTypedDataPreview, { currentType: signTypedData.primaryType, types: signTypedData.types, showTypeName: true, data: signTypedData.message }));
    }
    return (jsx(Typography, { color: 'primary', variant: 'body_normal', children: jsx("span", { style: { whiteSpace: 'pre-line' }, children: message }) }));
};

export { SignMessagePreview };
