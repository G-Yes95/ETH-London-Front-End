import { WalletBookSchema } from '@dynamic-labs/wallet-book';
import { AuthModeType, Wallet, WalletOption } from '../../../shared/types';
type BuilderParams = {
    authMode: AuthModeType;
    connectedWallets: Wallet[];
    multiWallet: boolean;
    inputList: WalletOption[];
    isWalletConnectList: boolean;
    lastUsedWalletName: string | undefined;
    loginWithEmail?: boolean;
    numberOfWalletsToShow: number;
    searchFilter: string | undefined;
    signWithEmailWalletName: string | undefined;
    walletsFilter: ((options: WalletOption[]) => WalletOption[]) | undefined;
    groupWallets?: boolean;
    walletBook: WalletBookSchema;
    showMoreWalletsWithFilter?: boolean;
};
type BuilderResult = {
    numberOfWallets: number;
    walletsList: WalletOption[];
};
export declare const PRIORITY_WALLET_LIST: string[];
export declare const SIGN_IN_WITH_EMAIL_WALLET_NAME = "Sign In With Email";
export declare const walletListBuilder: ({ authMode, connectedWallets, multiWallet, numberOfWalletsToShow, inputList, isWalletConnectList, lastUsedWalletName, signWithEmailWalletName, searchFilter, walletsFilter, loginWithEmail, groupWallets, walletBook, showMoreWalletsWithFilter, }: BuilderParams) => BuilderResult;
export {};
