import Client from '@walletconnect/client';
import { PublicClient } from 'viem';
import { FetchPublicAddressOpts, PayloadParams, DeepLinkVariant, WalletConnector } from '@dynamic-labs/wallet-connector-core';
import { WalletSchema } from '@dynamic-labs/wallet-book';
export declare const initClient: (name: string, bridge: string, settings?: any) => Client;
/**
 * Attach event handlers to WalletConnect events.
 */
export declare const setupWalletConnectEventListeners: (walletConnector: WalletConnector, client: Client) => void;
export declare const teardownWalletConnectEventListeners: (client: Client) => void;
/**
 * Initialize a client from a stored session and terminate the connection.
 */
export declare const killWalletConnectSession: (client: Client) => Promise<void>;
export declare const createSession: (client: Client) => Promise<PayloadParams>;
export declare const fetchWalletConnectEVMPublicAddress: (metadata: WalletSchema, wcClient: Client, deepLinkPreference: DeepLinkVariant, opts?: FetchPublicAddressOpts) => Promise<string | undefined>;
export declare const signWalletConnectPersonalMessage: (messageToSign: string, metadata: WalletSchema, client: Client, deepLinkPreference: DeepLinkVariant, rpcProvider?: () => Promise<PublicClient | undefined>) => Promise<string | undefined>;
