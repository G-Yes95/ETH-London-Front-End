import { ReactNode, SetStateAction, Dispatch } from 'react';
type QrCodeContextProps = {
    setShowQrCodeImage: Dispatch<SetStateAction<boolean>>;
    setShowQrCodeMessage: Dispatch<SetStateAction<boolean>>;
    showQrCodeImage: boolean;
    showQrCodeMessage: boolean;
};
export declare const QrCodeContext: import("react").Context<QrCodeContextProps | undefined>;
export declare const QrCodeContextProvider: ({ children, }: {
    children: ReactNode;
}) => JSX.Element;
export declare const useQrCodeContext: () => QrCodeContextProps;
export {};
