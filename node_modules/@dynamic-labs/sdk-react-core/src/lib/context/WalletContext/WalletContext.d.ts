import { ReactNode } from 'react';
export declare const WalletContext: import("react").Context<undefined>;
export declare const WalletContextProvider: ({ children, canSync, }: {
    children: ReactNode;
    canSync: boolean;
}) => JSX.Element;
export declare const useWalletContext: () => never;
