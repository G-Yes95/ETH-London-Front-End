import { ReactElement } from 'react';
type QrCodeContainerProps = {
    Icon: ReactElement;
    accentColor: string;
    desktopUri?: string;
    qrcodeValue: string;
    showCopyToClipboardButton?: boolean;
    walletKey: string;
    walletName: string;
    showQrCodeMessage: boolean;
};
export declare const QrCodeContainer: ({ accentColor, walletKey, walletName, qrcodeValue, Icon: WalletIcon, showCopyToClipboardButton, desktopUri, showQrCodeMessage, }: QrCodeContainerProps) => JSX.Element;
export {};
