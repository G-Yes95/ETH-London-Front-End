import { ReactNode } from 'react';
import type { WalletConnector } from '@dynamic-labs/wallet-connector-core';
import { ChainToWalletMap } from '../../shared';
import { ThemeData } from '../ThemeContext';
import { ViewType } from '../ViewContext';
type MockContextProps = {
    children: ReactNode;
    customerTheme?: ThemeData;
    dynamicLayoutClassName?: string;
    mockedWalletConnector?: WalletConnector;
    newToWeb3WalletChainMap: ChainToWalletMap;
    view: ViewType;
    walletName: string;
};
type MockContextWrapperProps = {
    children: ReactNode;
    dynamicLayoutClassName?: string;
    mockedWalletConnector?: WalletConnector;
    walletName: string;
};
type MockContextValue = {
    mockedSDK: boolean;
};
export declare const MockContext: import("react").Context<MockContextValue | undefined>;
export declare const MockContextProvider: ({ children, walletName, view, mockedWalletConnector, customerTheme, dynamicLayoutClassName, }: MockContextProps) => JSX.Element;
export declare const MockContextWrapper: ({ dynamicLayoutClassName, mockedWalletConnector, walletName, children, }: MockContextWrapperProps) => JSX.Element;
export declare const useMockContext: () => MockContextValue;
export {};
