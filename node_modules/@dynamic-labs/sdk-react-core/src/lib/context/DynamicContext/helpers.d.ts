import { Wallet } from '../../shared';
import { ViewType } from '../ViewContext';
export declare const sdkSettingsTimeout: number;
export declare const isAuthTokenExpired: (token: string) => boolean;
export declare const initExpirationTime: (logout: VoidFunction) => void;
export declare const getInitialView: ({ connectedWallets, isBridgeFlow, isFullyConnected, isAuthenticated, isMultiWalletEnabled, }: {
    connectedWallets: Wallet[];
    isBridgeFlow: boolean;
    isAuthenticated: boolean;
    isFullyConnected: boolean;
    isMultiWalletEnabled: boolean;
}) => ViewType;
export declare const setDynamicContextSessionSettings: () => void;
export declare const setWagmiSessionSettings: () => void;
export declare const isDynamicContextSessionSettingExpired: () => boolean;
export declare const isWagmiSessionSettingExpired: () => boolean;
