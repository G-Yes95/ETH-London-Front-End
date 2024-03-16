import { WalletConnector, WalletOption } from '../../../..';
import { OpenWalletHandler } from './useWalletItemActions.types';
export declare const useWalletItemActions: () => {
    handleAlreadyConnectedWallet: (walletConnector: WalletConnector) => Promise<void>;
    handleCustodialWalletClick: (walletConnector: WalletConnector) => Promise<void>;
    handleInstalledExtensionClick: (walletConnector: WalletConnector) => Promise<void>;
    handleMobileWalletClick: (walletConnector: WalletConnector) => Promise<void>;
    handleUninstalledClick: (walletConnector: WalletConnector) => Promise<void>;
    handleWalletItemClick: (wallet: WalletOption) => Promise<void>;
    openWallet: OpenWalletHandler;
};
