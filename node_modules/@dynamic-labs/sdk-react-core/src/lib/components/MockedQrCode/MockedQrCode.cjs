'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var jsxRuntime = require('react/jsx-runtime');
var iconic = require('@dynamic-labs/iconic');
var MockContext = require('../../context/MockContext/MockContext.cjs');
var ThemeContext = require('../../context/ThemeContext/ThemeContext.cjs');
var QRCode = require('../../views/QrCodeView/QRCode.cjs');

const MockedQrCode = () => {
    const { mockedSDK } = MockContext.useMockContext();
    const { theme } = ThemeContext.useThemeContext();
    if (!mockedSDK)
        return null;
    const accentColor = theme.theme.name === 'dark' ? '#FFF' : '#1648F9';
    return (jsxRuntime.jsx(QRCode.QRCode, { Icon: jsxRuntime.jsx(iconic.CoinbaseIcon, {}), logoSize: 50, accentColor: accentColor, value: 'hello world!'.repeat(20), walletKey: 'coinbase' }));
};

exports.MockedQrCode = MockedQrCode;
