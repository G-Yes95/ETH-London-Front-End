import { PublicClient } from 'viem';
import { WalletConnector } from '@dynamic-labs/wallet-connector-core';
import { AccountChangeEventHandler, ChainChangeEventHandler, DisconnectEventHandler } from '../types';
export declare const eventListenerHandlers: (walletConnector: WalletConnector, publicClient: PublicClient) => {
    handleAccountChange: AccountChangeEventHandler;
    handleChainChange: ChainChangeEventHandler;
    handleDisconnect: DisconnectEventHandler;
};
