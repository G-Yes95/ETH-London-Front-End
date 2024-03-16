import { ReactNode } from 'react';
import { WalletUiUtils } from '@dynamic-labs/types';
import { WalletConnector } from '@dynamic-labs/wallet-connector-core';
import { WalletUiUtilsHookProps } from './useWalletUiUtils.types';
export declare const useWalletUiUtils: ({ appLogoUrl, appName, getAppOrigin, }: WalletUiUtilsHookProps) => [
    ReactNode | undefined,
    WalletUiUtils<WalletConnector>
];
