import type { WalletConnector } from '@dynamic-labs/wallet-connector-core';
import { UserProfile, Wallet } from '../../../shared/types';
export declare const isSelectedWalletAlreadyConnected: (linkedWallets: Wallet[], selectedWallet: WalletConnector, user?: UserProfile | undefined) => boolean;
