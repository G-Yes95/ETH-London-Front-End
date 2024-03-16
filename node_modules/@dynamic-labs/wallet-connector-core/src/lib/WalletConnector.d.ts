import EventEmitter from 'eventemitter3';
import { ChainRpcProviders } from '@dynamic-labs/rpc-providers';
import { WalletBookSchema } from '@dynamic-labs/wallet-book';
import type { JwtVerifiedCredential } from '@dynamic-labs/sdk-api';
import { WalletBookSingleton } from './WalletBookSingleton';
import { WalletConnectorExtension } from './WalletConnectorExtension';
import { WalletConnectorCore } from './types';
export declare const Chains: readonly ["ETH", "FLOW", "SOL", "EVM", "ALGO", "STARK", "ATOM", "COSMOS"];
export type Chain = typeof Chains[number];
export declare const socialProviders: readonly ["google", "facebook", "apple", "github", "bitbucket", "gitlab", "linkedin", "twitter", "discord", "twitch", "microsoft"];
export type SocialProvider = typeof socialProviders[number];
export type PayloadParams = {
    params: {
        accounts: string[];
        chainId: number;
        message: string;
    }[];
};
export type FetchPublicAddressOpts = {
    chainId?: string;
    onConnect?(payload: PayloadParams): void;
    onDesktopUri?(uri: string): void;
    onDisplayUri?(uri: string): void;
};
export type NameServiceData = {
    avatar?: string;
    name?: string;
};
declare module './types' {
    namespace WalletConnectorCore {
        interface WalletConnector extends WalletConnectorBase {
        }
    }
}
export type WalletConnector = WalletConnectorCore.WalletConnector;
export interface WalletConnectorConstructor {
    new (props?: any): WalletConnector;
}
export type WalletConnectorsMethod = (props: {
    isWalletConnectV2Enabled: boolean;
}) => WalletConnectorConstructor[];
export type WalletConnectorEventTypes = {
    chainChange: (props: {
        chain: string;
    }) => void;
    accountChange: (props: {
        accounts: string[];
    }) => void;
    disconnect: () => void;
};
export declare abstract class WalletConnectorBase extends EventEmitter<WalletConnectorEventTypes> {
    #private;
    chainRpcProviders: typeof ChainRpcProviders | undefined;
    protected constructorProps: any;
    _walletBookInstance: WalletBookSingleton;
    /**
     * We store the constructor props so that we can use them later on
     * in getMobileOrInstalledWallet which may fall back to a different class
     * but will need the original constructor props.
     * @param props - constructor props
     */
    constructor(props: {
        walletBook: WalletBookSchema;
    });
    extend(extension: WalletConnectorExtension): void;
    didSetup: boolean;
    /**
     * Add the event listeners for the wallet and connect
     * with event emitter.
     */
    initEventListener(): void;
    get walletBook(): WalletBookSchema;
    filterByWalletBook(): boolean;
    /**
     * @default false
     */
    canConnectViaEmail: boolean;
    /**
     * IF the wallet needs to be connected via a custodial service
     * such as Blocto, this will be true.
     * @default false
     */
    canConnectViaCustodialService: boolean;
    /**
     * If the wallet is not installed, and can be connected via a QR code,
     * this will be true.
     * @default false
     */
    canConnectViaQrCode: boolean;
    /**
     * Whether this connector can be connected via social login.
     * @default false
     */
    canConnectViaSocial: boolean;
    /**
     * Connect to the wallet or custodial service
     *
     * Historically, this was used for starting the connect process to be able to fetch
     * public address. But it can be used for different connection initialization.
     *
     * @default string - the public address of the wallet
     */
    connect(args?: unknown): Promise<void>;
    connect<T = undefined>(args: T): Promise<void>;
    /**
     * The chain this wallet is connected
     */
    abstract connectedChain?: Chain;
    /**
     * Generic function to close the wallet connection
     * Originally implemented for WalletConnect, but it is used
     * for anything that needs to be "logged out" or cleaned up
     *
     * @default Promise<undefined>
     */
    endSession(): Promise<void>;
    /**
     * Gets the public address of the wallet
     *
     * @default Promise<undefined>
     */
    fetchPublicAddress(opts?: FetchPublicAddressOpts): Promise<string | undefined>;
    /**
     * Gets the balance of the wallet
     *
     * @default Promise<undefined>
     */
    getBalance(): Promise<string | undefined>;
    /**
     * Get the address silently
     *
     * @default Promise<[]>
     */
    getConnectedAccounts(): Promise<string[]>;
    /**
     * Gets the deep link of the wallet
     *
     * @default undefined
     */
    getDeepLink(): string | undefined;
    /**
     * Gets current network of connected wallet
     *
     * @default Promise<undefined>
     */
    getNetwork(): Promise<number | string | undefined>;
    /**
     * Gets current network of connected wallet
     *
     * @default Promise<undefined>
     */
    getNameService(): Promise<NameServiceData | undefined>;
    /**
     * Get the RPC provider for the wallet
     *
     * @default Promise<undefined>
     */
    getPublicClient(): Promise<unknown>;
    getPublicClient<T>(): Promise<T>;
    /**
     * @deprecated getWeb3Provider has been renamed to getWalletClient
     * If you would like to still get the ethers web3Provider,
     *  see our docs for enabling ethers: https://docs.dynamic.xyz/ethers
     *
     * Get the wallet provider
     */
    getWeb3Provider: {
        (): unknown;
        <T>(): T;
    };
    /**
     * @deprecated getRpcProvider has been renamed to getPublicClient
     * If you would like to still get the ethers rpcProvider,
     *  see our docs for enabling ethers: https://docs.dynamic.xyz/ethers
     *
     * Get the rpc provider
     */
    getRpcProvider: {
        (): Promise<unknown>;
        <T>(): Promise<T>;
    };
    /**
     * Get the session for the wallet
     * @default Promise<undefined>
     */
    getSession(): unknown;
    getSession<T>(): Promise<T>;
    /**
     * Get the signer for the wallet
     *
     * @default Promise<undefined>
     */
    getSigner(): Promise<unknown>;
    getSigner<T>(): Promise<T>;
    /**
     * Get the wallet client
     *
     * @default undefined
     */
    getWalletClient(): unknown;
    getWalletClient<T>(): T;
    /**
     * Initialize the wallet connector with any async operations
     *
     * @default Promise<void>
     */
    init(): Promise<void>;
    /**
     * If the wallet generated by a valid embedded wallet provider
     * For example: magic wallets
     * @default false
     */
    isEmbeddedWallet: boolean;
    /**
     * Check if the wallet is installed on the browser
     *
     * @default false
     */
    isInstalledOnBrowser(): boolean;
    /**
     * Flag if it is wallet Connect
     *
     * @default false
     */
    isWalletConnect: boolean;
    /**
     * Override key or the normalized wallet name if needed
     */
    get key(): string;
    /**
     * Wallet name
     */
    abstract name: string;
    /**
     * Override key for the wallet (used for injected wallet linking)
     */
    overrideKey: string | undefined;
    /**
     * Whether the wallet connector should fall back to a different wallet connector
     * This is called after the object is instantiated, so it can't be a static property
     * and will return the appropriate instance of the wallet connector
     * @returns WalletConnector
     * @default this
     */
    getMobileOrInstalledWallet(): WalletConnector;
    /**
     * In most cases this is an alias for `signMessage`
     *
     * @default Promise<undefined>
     */
    proveOwnership(messageToSign: string): Promise<string | undefined>;
    /**
     * Additional resources to add to the message to be signed
     *
     * @default undefined
     */
    providerResources: string[] | undefined;
    /**
     * Set up event listeners for the wallet
     *
     * @default void
     */
    setupEventListeners(): void;
    /**
     * Sign a message
     *
     * @default Promise<undefined>
     */
    signMessage(messageToSign: string): Promise<string | undefined>;
    /**
     * List of supported chains for this wallet
     */
    abstract readonly supportedChains: Chain[];
    /**
     * Whether the wallet supports network switching
     *
     * @default false
     */
    supportsNetworkSwitching(): boolean;
    /**
     * Switch the network
     * @default Promise<undefined>
     */
    switchNetwork({ networkName, networkChainId, }: {
        networkChainId?: number | string;
        networkName?: string;
    }): Promise<void>;
    /**
     * Requires switching network in the wallet itself
     * @default undefined
     */
    switchNetworkOnlyFromWallet: boolean | undefined;
    /**
     * Tear down event listeners for the wallet
     * @default void
     */
    teardownEventListeners(): void;
    /**
     * Sign a message
     *
     * @default Promise<undefined>
     */
    getSupportedNetworks(): Promise<string[] | undefined>;
    /**
     * Whether the connector has been initialized
     * @default true
     */
    isInitialized: boolean;
    /**
     * Receive the user verified credentials
     */
    setVerifiedCredentials(verifiedCredentials: JwtVerifiedCredential[]): void;
}
