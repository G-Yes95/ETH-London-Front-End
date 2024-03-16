import { jsx } from 'react/jsx-runtime';
import { CoinbaseIcon } from '@dynamic-labs/iconic';
import { useMockContext } from '../../context/MockContext/MockContext.js';
import { useThemeContext } from '../../context/ThemeContext/ThemeContext.js';
import { QRCode } from '../../views/QrCodeView/QRCode.js';

const MockedQrCode = () => {
    const { mockedSDK } = useMockContext();
    const { theme } = useThemeContext();
    if (!mockedSDK)
        return null;
    const accentColor = theme.theme.name === 'dark' ? '#FFF' : '#1648F9';
    return (jsx(QRCode, { Icon: jsx(CoinbaseIcon, {}), logoSize: 50, accentColor: accentColor, value: 'hello world!'.repeat(20), walletKey: 'coinbase' }));
};

export { MockedQrCode };
