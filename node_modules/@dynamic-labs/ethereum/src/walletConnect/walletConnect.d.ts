import Client from '@walletconnect/client';
import { Hex, WalletClient } from 'viem';
import { Chain, FetchPublicAddressOpts, DeepLinkVariant } from '@dynamic-labs/wallet-connector-core';
import { EvmNetwork } from '@dynamic-labs/types';
import { EthWalletConnector, EthWalletConnectorOpts } from '../EthWalletConnector';
type ConnectorSession = {
    connected: boolean;
    accounts: string[];
    chainId: number;
    bridge: string;
    key: string;
    clientId: string;
    clientMeta: any;
    peerId: string;
    peerMeta: any;
    handshakeId: number;
    handshakeTopic: string;
};
export type WalletConnectOpts = EthWalletConnectorOpts & {
    walletConnectV1Bridge: string;
    walletName: string;
    deepLinkPreference?: DeepLinkVariant;
};
export declare class WalletConnect extends EthWalletConnector {
    supportedChains: Chain[];
    connectedChain: Chain;
    name: string;
    bridge: string;
    canConnectViaQrCode: boolean;
    isWalletConnect: boolean;
    switchNetworkOnlyFromWallet: boolean;
    private deepLinkPreference;
    client?: Client;
    clientOptions?: any;
    constructor({ walletConnectV1Bridge, walletName, ...props }: WalletConnectOpts);
    getClient(): Client;
    supportsNetworkSwitching(): boolean;
    setupEventListeners(): void;
    teardownEventListeners(): void;
    getWalletClient(): WalletClient | undefined;
    fetchPublicAddress(opts?: FetchPublicAddressOpts): Promise<string | undefined>;
    getDeepLink(): string | undefined;
    signMessage(messageToSign: string): Promise<string | undefined>;
    endSession(): Promise<void>;
    providerSwitchNetwork({ network, provider, }: {
        network: EvmNetwork;
        provider: WalletClient;
    }): Promise<void>;
    getConnectedAccounts(): Promise<Hex[]>;
    getSession(): Promise<ConnectorSession | undefined>;
}
export {};
