'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var jsxRuntime = require('react/jsx-runtime');
var React = require('react');
var Typography = require('../Typography/Typography.cjs');
var isSignTypedData = require('./utils/isSignTypedData/isSignTypedData.cjs');
var SignTypedDataPreview = require('./components/SignTypedDataPreview/SignTypedDataPreview.cjs');

const SignMessagePreview = ({ message, }) => {
    const signTypedData = React.useMemo(() => {
        try {
            const json = JSON.parse(message);
            return isSignTypedData.isSignTypedData(json) ? json : undefined;
        }
        catch (e) {
            return undefined;
        }
    }, [message]);
    if (signTypedData) {
        return (jsxRuntime.jsx(SignTypedDataPreview.SignTypedDataPreview, { currentType: signTypedData.primaryType, types: signTypedData.types, showTypeName: true, data: signTypedData.message }));
    }
    return (jsxRuntime.jsx(Typography.Typography, { color: 'primary', variant: 'body_normal', children: jsxRuntime.jsx("span", { style: { whiteSpace: 'pre-line' }, children: message }) }));
};

exports.SignMessagePreview = SignMessagePreview;
