import { ReactElement } from 'react';
import { QRCodeErrorCorrectionLevel } from 'qrcode';
type QRCodeProps = {
    Icon: ReactElement;
    accentColor?: string;
    ecl?: QRCodeErrorCorrectionLevel;
    logoMargin?: number;
    logoSize?: number;
    size?: number;
    value: string;
    walletKey?: string;
};
export declare const QRCode: ({ ecl, Icon, logoMargin, logoSize, size, value, accentColor, walletKey, }: QRCodeProps) => JSX.Element;
export {};
