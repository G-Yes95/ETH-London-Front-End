import { WalletOption } from '../../../types';
type Args = {
    usingMultiWallet: boolean;
    wallet: WalletOption;
};
type Label = 'Last used' | 'Installed' | 'Multichain' | undefined;
export declare const getWalletListItemLabel: ({ usingMultiWallet, wallet, }: Args) => Label;
export {};
